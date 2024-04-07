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
    let project_id = insert_project(&mut transaction, &new_project)
        .await
        .context("Failed to insert new subscriber in the database.")?;
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to store a new subscriber.")?;
    Ok(HttpResponse::Created().json(project_id))
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

#[derive(thiserror::Error)]
pub enum GetProjectError {
    #[error("Project not found")]
    NotFound,
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for GetProjectError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for GetProjectError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::NotFound => StatusCode::NOT_FOUND,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Getting a project by ID",
    skip(pool),
    fields(project_id = %id)
)]
pub async fn get_project(
    pool: web::Data<PgPool>,
    id: web::Path<uuid::Uuid>,
) -> Result<HttpResponse, GetProjectError> {
    let project_id = id.into_inner();

    let project = find_project_by_id(&pool, project_id).await?;

    match project {
        Some(project) => Ok(HttpResponse::Ok().json(project)),
        None => Err(GetProjectError::NotFound),
    }
}

#[derive(Debug, serde::Serialize)]
pub struct ExistingProject {
    pub id: Uuid,
    pub name: String,
    pub description: String,
    pub modality: String,
    pub professor: String,
    pub email: String,
    pub website: String,
    pub facebook: String,
    pub instagram: String,
    pub linkedin: String,
    pub twitter: String,
    pub address: String,
    pub banner: String,
    pub picture: String,
    pub category_id: Uuid,
    pub is_recruiting: bool,
}

#[tracing::instrument(
    name = "Querying the database for a project by ID",
    skip(pool),
    fields(project_id = %project_id)
)]
pub async fn find_project_by_id(
    pool: &PgPool,
    project_id: Uuid,
) -> Result<Option<ExistingProject>, anyhow::Error> {
    let project = sqlx::query!(
        r#"
        SELECT id, name, description, picture, banner, is_recruiting, email, modality,
        address, professor, website, facebook, instagram, linkedin, twitter, category_id
        FROM project
        WHERE id = $1
        "#,
        project_id
    )
    .fetch_optional(pool)
    .await?;

    // check if the project is found, if not return None
    let project = match project {
        Some(project) => project,
        None => return Ok(None),
    };

    Ok(Some(ExistingProject {
        id: project.id,
        name: project.name,
        description: project.description,
        modality: project.modality,
        professor: project.professor,
        email: project.email,
        website: project.website.unwrap_or("".to_string()),
        facebook: project.facebook.unwrap_or("".to_string()),
        instagram: project.instagram.unwrap_or("".to_string()),
        linkedin: project.linkedin.unwrap_or("".to_string()),
        twitter: project.twitter.unwrap_or("".to_string()),
        address: project.address,
        banner: project.banner.unwrap_or("".to_string()),
        picture: project.picture.unwrap_or("".to_string()),
        category_id: project.category_id,
        is_recruiting: project.is_recruiting,
    }))
}

#[tracing::instrument(name = "Getting all projects", skip(pool))]
pub async fn get_all_projects(pool: web::Data<PgPool>) -> Result<HttpResponse, GetProjectError> {
    let projects = find_all_projects(&pool).await?;

    if projects.is_empty() {
        Err(GetProjectError::NotFound)
    } else {
        Ok(HttpResponse::Ok().json(projects))
    }
}

#[tracing::instrument(name = "Querying the database for all projects", skip(pool))]
pub async fn find_all_projects(pool: &PgPool) -> Result<Vec<ExistingProject>, anyhow::Error> {
    let projects = sqlx::query!(
        r#"
        SELECT id, name, description, picture, banner, is_recruiting, email, modality,
        address, professor, website, facebook, instagram, linkedin, twitter, category_id
        FROM project
        "#
    )
    .fetch_all(pool)
    .await?
    .into_iter()
    .map(|project| ExistingProject {
        id: project.id,
        name: project.name,
        description: project.description,
        modality: project.modality,
        professor: project.professor,
        email: project.email,
        website: project.website.unwrap_or("".to_string()),
        facebook: project.facebook.unwrap_or("".to_string()),
        instagram: project.instagram.unwrap_or("".to_string()),
        linkedin: project.linkedin.unwrap_or("".to_string()),
        twitter: project.twitter.unwrap_or("".to_string()),
        address: project.address,
        banner: project.banner.unwrap_or("".to_string()),
        picture: project.picture.unwrap_or("".to_string()),
        category_id: project.category_id,
        is_recruiting: project.is_recruiting,
    })
    .collect();

    Ok(projects)
}
