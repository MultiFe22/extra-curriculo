use super::error_chain_fmt;
use crate::domain::{NewTag, TagName};
use actix_web::http::StatusCode;
use actix_web::{web, HttpResponse, ResponseError};
use anyhow::Context;
use sqlx::PgPool;
use uuid::Uuid;

#[derive(serde::Deserialize)]
pub struct NewTagForm {
    pub name: String,
}

impl TryFrom<NewTagForm> for NewTag {
    type Error = String;

    fn try_from(new_tag: NewTagForm) -> Result<Self, Self::Error> {
        let name = TagName::parse(new_tag.name)?;

        Ok(Self { name })
    }
}

#[derive(thiserror::Error)]
pub enum TagError {
    #[error("{0}")]
    ValidationError(String),
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for TagError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for TagError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::ValidationError(_) => StatusCode::BAD_REQUEST,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Adding a new tag",
    skip(form, pool),
    fields(
        tag_name = %form.name,
    )
)]
pub async fn post_tag(
    pool: web::Data<PgPool>,
    form: web::Json<NewTagForm>,
) -> Result<HttpResponse, TagError> {
    let new_tag = form.0.try_into().map_err(TagError::ValidationError)?;
    let mut transaction = pool
        .begin()
        .await
        .context("Failed to acquire a Postgres connection from the Pool.")?;
    let tag_id = insert_tag(&mut transaction, &new_tag)
        .await
        .context("Failed to insert new tag in the database.")?;
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to store a new tag.")?;

    Ok(HttpResponse::Created().json(tag_id))
}

#[tracing::instrument(name = "Saving new tag in the database", skip(transaction))]
async fn insert_tag(
    transaction: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    new_tag: &NewTag,
) -> Result<Uuid, anyhow::Error> {
    let tag_id = Uuid::new_v4();
    sqlx::query!(
        r#"
        INSERT INTO tag (id, name)
        VALUES ($1, $2)
        "#,
        tag_id,
        new_tag.name.as_ref(),
    )
    .execute(transaction)
    .await?;
    Ok(tag_id)
}

#[derive(thiserror::Error)]
pub enum GetTagError {
    #[error("Tag not found")]
    NotFound,
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for GetTagError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for GetTagError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::NotFound => StatusCode::NOT_FOUND,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Fetching a tag from the database",
    skip(pool)
    fields(tag_id = %id)
)]
pub async fn get_tag(
    pool: web::Data<PgPool>,
    id: web::Path<Uuid>,
) -> Result<HttpResponse, GetTagError> {
    let tag_id = id.into_inner();

    let tag = find_tag_by_id(&pool, tag_id).await?;

    match tag {
        Some(tag) => Ok(HttpResponse::Ok().json(tag)),
        None => Err(GetTagError::NotFound),
    }
}

#[derive(Debug, serde::Serialize)]
pub struct ExistingTag {
    pub id: Uuid,
    pub name: String,
}

#[tracing::instrument(name = "Querying the database for a tag", skip(pool))]
pub async fn find_tag_by_id(
    pool: &PgPool,
    tag_id: Uuid,
) -> Result<Option<ExistingTag>, anyhow::Error> {
    let tag = sqlx::query!(
        r#"
        SELECT id, name
        FROM tag
        WHERE id = $1
        "#,
        tag_id,
    )
    .fetch_optional(pool)
    .await?;

    let tag = match tag {
        Some(tag) => tag,
        None => return Ok(None),
    };

    Ok(Some(ExistingTag {
        id: tag.id,
        name: tag.name,
    }))
}

#[tracing::instrument(name = "Getting all tags", skip(pool))]
pub async fn get_all_tags(pool: web::Data<PgPool>) -> Result<HttpResponse, GetTagError> {
    let tags = find_all_tags(&pool).await?;

    if tags.is_empty() {
        Err(GetTagError::NotFound)
    } else {
        Ok(HttpResponse::Ok().json(tags))
    }
}

#[tracing::instrument(name = "Querying the database for all tags", skip(pool))]
pub async fn find_all_tags(pool: &PgPool) -> Result<Vec<ExistingTag>, anyhow::Error> {
    let tags = sqlx::query!(
        r#"
        SELECT id, name
        FROM tag
        "#,
    )
    .fetch_all(pool)
    .await?
    .into_iter()
    .map(|tag| ExistingTag {
        id: tag.id,
        name: tag.name,
    })
    .collect();

    Ok(tags)
}
