use super::error_chain_fmt;
use crate::domain::{CategoryName, NewCategory};
use actix_web::http::StatusCode;
use actix_web::{web, HttpResponse, ResponseError};
use anyhow::Context;
use sqlx::PgPool;
use uuid::Uuid;

#[derive(serde::Deserialize)]
pub struct NewCategoryForm {
    pub name: String,
}

impl TryFrom<NewCategoryForm> for NewCategory {
    type Error = String;

    fn try_from(new_category: NewCategoryForm) -> Result<Self, Self::Error> {
        let name = CategoryName::parse(new_category.name)?;

        Ok(Self { name })
    }
}

#[derive(thiserror::Error)]
pub enum CategoryError {
    #[error("{0}")]
    ValidationError(String),
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for CategoryError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for CategoryError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::ValidationError(_) => StatusCode::BAD_REQUEST,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Adding a new category",
    skip(form, pool),
    fields(
        category_name = %form.name,
    )
)]
pub async fn post_category(
    pool: web::Data<PgPool>,
    form: web::Json<NewCategoryForm>,
) -> Result<HttpResponse, CategoryError> {
    let new_category = form.0.try_into().map_err(CategoryError::ValidationError)?;
    let mut transaction = pool
        .begin()
        .await
        .context("Failed to acquire a Postgres connection from the Pool.")?;
    let category_id = insert_category(&mut transaction, &new_category)
        .await
        .context("Failed to insert new category in the database.")?;
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to store a new category.")?;

    Ok(HttpResponse::Created().json(category_id))
}

#[tracing::instrument(name = "Saving new category in the database", skip(transaction))]
async fn insert_category(
    transaction: &mut sqlx::Transaction<'_, sqlx::Postgres>,
    new_category: &NewCategory,
) -> Result<Uuid, anyhow::Error> {
    let category_id = Uuid::new_v4();
    sqlx::query!(
        r#"
        INSERT INTO category (id, name)
        VALUES ($1, $2)
        "#,
        category_id,
        new_category.name.as_ref(),
    )
    .execute(transaction)
    .await?;
    Ok(category_id)
}

#[derive(thiserror::Error)]
pub enum GetCategoryError {
    #[error("Category not found")]
    NotFound,
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for GetCategoryError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for GetCategoryError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::NotFound => StatusCode::NOT_FOUND,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Fetching a category from the database",
    skip(pool)
    fields(category_id = %id)
)]
pub async fn get_category(
    pool: web::Data<PgPool>,
    id: web::Path<Uuid>,
) -> Result<HttpResponse, GetCategoryError> {
    let category_id = id.into_inner();

    let category = find_category_by_id(&pool, category_id).await?;

    match category {
        Some(category) => Ok(HttpResponse::Ok().json(category)),
        None => Err(GetCategoryError::NotFound),
    }
}

#[derive(Debug, serde::Serialize)]
pub struct ExistingCategory {
    pub id: Uuid,
    pub name: String,
}

#[tracing::instrument(name = "Querying the database for a category", skip(pool))]
pub async fn find_category_by_id(
    pool: &PgPool,
    category_id: Uuid,
) -> Result<Option<ExistingCategory>, anyhow::Error> {
    let category = sqlx::query!(
        r#"
        SELECT id, name
        FROM category
        WHERE id = $1
        "#,
        category_id,
    )
    .fetch_optional(pool)
    .await?;

    let category = match category {
        Some(category) => category,
        None => return Ok(None),
    };

    Ok(Some(ExistingCategory {
        id: category.id,
        name: category.name,
    }))
}

#[tracing::instrument(name = "Getting all categories", skip(pool))]
pub async fn get_all_categories(pool: web::Data<PgPool>) -> Result<HttpResponse, GetCategoryError> {
    let categories = find_all_categories(&pool).await?;

    if categories.is_empty() {
        Err(GetCategoryError::NotFound)
    } else {
        Ok(HttpResponse::Ok().json(categories))
    }
}

#[tracing::instrument(name = "Querying the database for all categories", skip(pool))]
pub async fn find_all_categories(pool: &PgPool) -> Result<Vec<ExistingCategory>, anyhow::Error> {
    let categories = sqlx::query!(
        r#"
        SELECT id, name
        FROM category
        "#,
    )
    .fetch_all(pool)
    .await?
    .into_iter()
    .map(|category| ExistingCategory {
        // Adjusted for ExistingCategory
        id: category.id,
        name: category.name, // Adjusted variable name
    })
    .collect();

    Ok(categories) // Adjusted variable name
}
