use actix_web::{http::StatusCode, web, HttpResponse, ResponseError};
use anyhow::Context;
use secrecy::{ExposeSecret, Secret};
use sqlx::{PgPool, Postgres, Transaction};
use crate::authentication::create_user;

use crate::domain::{NewUser, UserEmail, UserName, UserPassword};

use super::error_chain_fmt;

#[derive(serde::Deserialize)]
pub struct UserForm {
    email: String,
    username: String,
    password: Secret<String>,
}

impl TryFrom<UserForm> for NewUser {
    type Error = String;
    fn try_from(form: UserForm) -> Result<Self, Self::Error> {
        let email = UserEmail::parse(form.email)?;
        let name = UserName::parse(form.username)?;
        let password = UserPassword::parse(form.password.expose_secret().to_string())?;

        Ok(Self {
            email,
            name,
            password,
        })
    }
}

#[derive(thiserror::Error)]
pub enum UserError {
    #[error("{0}")]
    ValidationError(String),
    #[error("Email already exists")]
    EmailExistsError,
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for UserError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for UserError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::ValidationError(_) => StatusCode::BAD_REQUEST,
            Self::EmailExistsError => StatusCode::CONFLICT,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Creating a new user",
    skip(form, pool),
    fields(
        email = %form.email,
        username = %form.username,
    )
)]
pub async fn signup(
    pool: web::Data<PgPool>,
    form: web::Json<UserForm>,
) -> Result<HttpResponse, UserError> {
    let new_user: NewUser = form.0.try_into().map_err(UserError::ValidationError)?;

    let mut transaction = pool
        .begin()
        .await
        .map_err(|e| UserError::UnexpectedError(e.into()))?;

    if check_duplicate_email(new_user.email.as_ref(), &mut transaction).await.context("Failed to check for duplicate email.")? {
        return Err(UserError::EmailExistsError);
    }

    let _ = create_user(new_user.name.as_ref(), new_user.email.as_ref(), new_user.password.clone(), &mut transaction)
        .await
        .context("Failed to insert new user in the database.")?;

    transaction
        .commit()
        .await
        .map_err(|e| UserError::UnexpectedError(e.into()))?;

    Ok(HttpResponse::Created().finish())
}

async fn check_duplicate_email(
    email: &str,
    transaction: &mut Transaction<'_, Postgres>,
) -> Result<bool, sqlx::Error> {
    let row = sqlx::query!(
        r#"
        SELECT EXISTS(
            SELECT 1
            FROM users
            WHERE email = $1
        ) AS "exists!"
        "#,
        email,
    )
    .fetch_one(transaction)
    .await?;

    Ok(row.exists)
}
