use crate::authentication::AuthError;
use crate::authentication::{validate_credentials, Credentials};
use crate::routes::error_chain_fmt;
use crate::session_state::TypedSession;
use actix_web::error::InternalError;
use actix_web::web;
use actix_web::HttpResponse;
use secrecy::Secret;
use sqlx::PgPool;

#[derive(serde::Deserialize)]
pub struct FormData {
    email: String,
    password: Secret<String>,
}

#[tracing::instrument(
    skip(form, pool, session),
    fields(email=tracing::field::Empty, user_id=tracing::field::Empty)
)]
pub async fn login(
    form: web::Json<FormData>,
    pool: web::Data<PgPool>,
    session: TypedSession,
) -> Result<HttpResponse, InternalError<LoginError>> {
    let credentials = Credentials {
        email: form.0.email,
        password: form.0.password,
    };
    // REVIEW IT LATER: RESPONSE CODES
    match validate_credentials(credentials, &pool).await {
        Ok(user_id) => {
            tracing::Span::current().record("user_id", &tracing::field::display(&user_id));
            session.renew();
            session.insert_user_id(user_id).map_err(|e| {
                InternalError::from_response(
                    LoginError::UnexpectedError(e.into()),
                    HttpResponse::InternalServerError().finish(),
                )
            })?;
            Ok(HttpResponse::Ok().finish()) // Return a 200 OK response
        }
        Err(e) => {
            let e = match e {
                AuthError::InvalidCredentials(_) => LoginError::AuthError(e.into()),
                AuthError::UnexpectedError(_) => LoginError::UnexpectedError(e.into()),
            };
            Err(InternalError::from_response(
                e,
                HttpResponse::InternalServerError().finish(),
            ))
        }
    }
}

#[derive(thiserror::Error)]
pub enum LoginError {
    #[error("Authentication failed")]
    AuthError(#[source] anyhow::Error),
    #[error("Something went wrong")]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for LoginError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}
