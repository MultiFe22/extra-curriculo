use actix_web::http::StatusCode;
use actix_web::{web, HttpResponse, ResponseError};
use anyhow::Context;
use sqlx::{PgPool, Postgres, Transaction};
use uuid::Uuid;

use crate::domain::ProjectCategoryId;
use crate::domain::{
    NewProject, ProjectAddress, ProjectBanner, ProjectDescription, ProjectEmail, ProjectFacebook,
    ProjectInstagram, ProjectLinkedin, ProjectModality, ProjectName, ProjectPicture,
    ProjectProfessor, ProjectTwitter, ProjectWebsite,
};

#[derive(serde::Deserialize)]
pub struct NewProjectForm {
    address: String,
    banner: String,
    description: String,
    email: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    modality: String,
    name: String,
    professor: String,
    twitter: String,
    website: String,
    picture: String,
    category_id: String,
    is_recruiting: bool,
}

impl TryFrom<NewProjectForm> for NewProject {
    type Error = String;
    fn try_from(value: NewProjectForm) -> Result<Self, Self::Error> {
        let address = ProjectAddress::parse(value.address)?;
        let banner = ProjectBanner::parse(value.banner)?;
        let description = ProjectDescription::parse(value.description)?;
        let email = ProjectEmail::parse(value.email)?;
        let facebook = ProjectFacebook::parse(value.facebook)?;
        let instagram = ProjectInstagram::parse(value.instagram)?;
        let linkedin = ProjectLinkedin::parse(value.linkedin)?;
        let modality = ProjectModality::parse(value.modality)?;
        let name = ProjectName::parse(value.name)?;
        let professor = ProjectProfessor::parse(value.professor)?;
        let twitter = ProjectTwitter::parse(value.twitter)?;
        let website = ProjectWebsite::parse(value.website)?;
        let picture = ProjectPicture::parse(value.picture)?;
        let category_id = ProjectCategoryId::parse(value.category_id)?;
        let is_recruiting = value.is_recruiting; // this is the only field not being validated or parsed, because it's a boolean
        Ok(Self {
            address,
            banner,
            description,
            email,
            facebook,
            instagram,
            linkedin,
            modality,
            name,
            professor,
            twitter,
            website,
            picture,
            category_id,
            is_recruiting,
        })
    }
}

pub fn error_chain_fmt(
    e: &impl std::error::Error,
    f: &mut std::fmt::Formatter<'_>,
) -> std::fmt::Result {
    writeln!(f, "{}", e)?;
    let mut current = e.source();
    while let Some(cause) = current {
        writeln!(f, "Caused by: {}", cause)?;
        current = cause.source();
    }
    Ok(())
}

#[derive(thiserror::Error)]
pub enum ProjectError {
    #[error("{0}")]
    ValidationError(String),
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for ProjectError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for ProjectError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::ValidationError(_) => StatusCode::BAD_REQUEST,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Adding a new project",
    skip(form, pool),
    fields(
        project_name = %form.name,
        project_email = %form.email,
        project_category_id = %form.category_id,
        project_modality = %form.modality,
        project_professor = %form.professor,
        project_website = %form.website,
        project_facebook = %form.facebook,
        project_instagram = %form.instagram,
        project_linkedin = %form.linkedin,
        project_twitter = %form.twitter,
        project_address = %form.address,
        project_banner = %form.banner,
        project_picture = %form.picture,
    )
)]
pub async fn post_project(
    form: web::Json<NewProjectForm>,
    pool: web::Data<PgPool>,
) -> Result<HttpResponse, ProjectError> {
    let new_project = form.0.try_into().map_err(ProjectError::ValidationError)?;
    let mut transaction = pool
        .begin()
        .await
        .context("Failed to acquire a Postgres connection from the Pool.")?;
    let _project_id = insert_project(&mut transaction, &new_project)
        .await
        .context("Failed to insert new subscriber in the database.")?;
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to store a new subscriber.")?;
    Ok(HttpResponse::Ok().finish())
}

#[tracing::instrument(
    name = "Saving new project details in the database",
    skip(new_project, transaction)
)]
pub async fn insert_project(
    transaction: &mut Transaction<'_, Postgres>,
    new_project: &NewProject,
) -> Result<Uuid, sqlx::Error> {
    let project_id = Uuid::new_v4();
    sqlx::query!(
        r#"INSERT INTO project (id, name, description, modality, professor, email, website, facebook, instagram, linkedin, twitter, address, banner, picture, category_id, created_at, updated_at, is_recruiting, is_active)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        "#,
        project_id,
        new_project.name.as_ref(),
        new_project.description.as_ref(),
        new_project.modality.as_ref(),
        new_project.professor.as_ref(),
        new_project.email.as_ref(),
        new_project.website.as_ref(),
        new_project.facebook.as_ref(),
        new_project.instagram.as_ref(),
        new_project.linkedin.as_ref(),
        new_project.twitter.as_ref(),
        new_project.address.as_ref(),
        new_project.banner.as_ref(),
        new_project.picture.as_ref(),
        new_project.category_id.as_ref(),
        chrono::Utc::now(),
        chrono::Utc::now(),
        new_project.is_recruiting,
        true
    )
    .execute(transaction)
    .await?;
    Ok(project_id)
}
