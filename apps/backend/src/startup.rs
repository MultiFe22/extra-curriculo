// use crate::authentication::reject_anonymous_users;
use crate::configuration::DatabaseSettings;
use crate::configuration::Settings;
use crate::email_client::EmailClient;
use crate::routes::get_all_categories;
use crate::routes::get_all_programs;
use crate::routes::get_all_projects;
use crate::routes::get_all_tags;
use crate::routes::get_category;
use crate::routes::get_program;
use crate::routes::get_project;
use crate::routes::get_project_tags;
use crate::routes::get_tag;
use crate::routes::health_check;
use crate::routes::post_category;
use crate::routes::post_program;
use crate::routes::post_project;
use crate::routes::post_tag;
use crate::routes::put_project;
use crate::routes::put_project_tags;
use actix_cors::Cors;
use actix_session::storage::RedisSessionStore;
use actix_session::SessionMiddleware;
use actix_web::cookie::Key;
use actix_web::dev::Server;
use actix_web::{web, App, HttpServer};
use actix_web_flash_messages::storage::CookieMessageStore;
use actix_web_flash_messages::FlashMessagesFramework;
// use actix_web_lab::middleware::from_fn;
use secrecy::ExposeSecret;
use secrecy::Secret;
use sqlx::postgres::PgPoolOptions;
use sqlx::PgPool;
use std::net::TcpListener;
use tracing_actix_web::TracingLogger;

// We need to mark `run` as public.
// It is no longer a binary entrypoint, therefore we can mark it as async // without having to use any proc-macro incantation.
async fn run(
    listener: TcpListener,
    db_pool: PgPool,
    email_client: EmailClient,
    base_url: String,
    hmac_secret: Secret<String>,
    redis_uri: Secret<String>,
) -> Result<Server, anyhow::Error> {
    let db_pool = web::Data::new(db_pool);
    let base_url = web::Data::new(ApplicationBaseUrl(base_url));
    let email_client = web::Data::new(email_client);
    let secret_key = Key::from(hmac_secret.expose_secret().as_bytes());
    let message_store =
        CookieMessageStore::builder(Key::from(hmac_secret.expose_secret().as_bytes())).build();
    let message_framework = FlashMessagesFramework::builder(message_store).build();
    let redis_store = RedisSessionStore::new(redis_uri.expose_secret()).await?;
    let server = HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin() // change this in production
            .allow_any_method() // change this in production
            .allow_any_header() // cgange this in production
            .supports_credentials()
            .max_age(3600);
        // Wrap the connection in a smart pointer
        App::new()
            .wrap(cors)
            .wrap(message_framework.clone())
            .wrap(SessionMiddleware::new(
                redis_store.clone(),
                secret_key.clone(),
            ))
            .wrap(TracingLogger::default())
            .route("/health_check", web::get().to(health_check))
            .route("/projects", web::post().to(post_project))
            .route("/projects", web::get().to(get_all_projects))
            .route("/projects/{id}", web::get().to(get_project))
            .route("/projects/{id}", web::put().to(put_project))
            .route("/projects/{id}/tags", web::put().to(put_project_tags))
            .route("/projects/{id}/tags", web::get().to(get_project_tags))
            .route("/programs", web::post().to(post_program))
            .route("/programs/{id}", web::get().to(get_program))
            .route("/programs", web::get().to(get_all_programs))
            .route("/tags", web::post().to(post_tag))
            .route("/tags", web::get().to(get_all_tags))
            .route("/tags/{id}", web::get().to(get_tag))
            .route("/categories", web::post().to(post_category))
            .route("/categories", web::get().to(get_all_categories))
            .route("/categories/{id}", web::get().to(get_category))
            // .route("/subscriptions", web::post().to(subscribe))
            // .route("/subscriptions/confirm", web::get().to(confirm))
            // .route("/newsletters", web::post().to(publish_newsletter))
            // .route("/", web::get().to(home))
            // .route("/login", web::get().to(login_form))
            // .route("/login", web::post().to(login))
            // .service(
            //     web::scope("/admin")
            //         .wrap(from_fn(reject_anonymous_users))
            //         .route("/dashboard", web::get().to(admin_dashboard))
            //         .route("/password", web::get().to(change_password_form))
            //         .route("/password", web::post().to(change_password))
            //         .route("/logout", web::post().to(log_out)),
            // )
            .app_data(db_pool.clone())
            .app_data(email_client.clone())
            .app_data(base_url.clone())
    })
    .listen(listener)?
    .run();

    Ok(server)
}

// We need to define a wrapper type in order to retrieve the URL
// in the `subscribe` handler.
// Retrieval from the context, in actix-web, is type-based: using
// a raw `String` would expose us to conflicts.
pub struct ApplicationBaseUrl(pub String);

pub struct Application {
    pub port: u16,
    server: Server,
}

impl Application {
    pub async fn build(configuration: Settings) -> Result<Self, anyhow::Error> {
        let connection_pool = get_connection_pool(&configuration.database);

        let sender_email = configuration
            .email_client
            .sender()
            .expect("Failed to parse sender email address.");
        let timeout = configuration.email_client.timeout();
        let email_client = EmailClient::new(
            configuration.email_client.base_url,
            sender_email,
            configuration.email_client.authorization_token,
            timeout,
        );
        // Now the port is read from the configuration file.
        let address = format!(
            "{}:{}",
            configuration.application.host, configuration.application.port
        );

        let listener = TcpListener::bind(address)?;
        let port = listener.local_addr().unwrap().port();
        let server = run(
            listener,
            connection_pool,
            email_client,
            configuration.application.base_url,
            configuration.application.hmac_secret,
            configuration.redis_uri,
        )
        .await?;
        println!("Server running on port {}", port);
        // We "save" the bound port in one of `Application`'s fields
        Ok(Self { port, server })
    }
    pub fn port(&self) -> u16 {
        self.port
    }

    // A more expressive name that makes it clear that
    // this function only returns when the application is stopped.
    pub async fn run_until_stopped(self) -> Result<(), std::io::Error> {
        self.server.await
    }
}

pub fn get_connection_pool(configuration: &DatabaseSettings) -> PgPool {
    PgPoolOptions::new()
        .acquire_timeout(std::time::Duration::from_secs(2))
        .connect_lazy_with(configuration.with_db())
}
