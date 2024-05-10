use std::collections::HashSet;

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
pub struct ProjectForm {
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

impl TryFrom<ProjectForm> for NewProject {
    type Error = String;
    fn try_from(value: ProjectForm) -> Result<Self, Self::Error> {
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
    #[error("Project not found")]
    NotFound,
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
            Self::NotFound => StatusCode::NOT_FOUND,
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
    form: web::Json<ProjectForm>,
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

#[tracing::instrument(
    name = "Updating a project",
    skip(id, form, pool),
    fields(
        project_id = %id,
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
pub async fn put_project(
    id: web::Path<Uuid>,
    form: web::Json<ProjectForm>,
    pool: web::Data<PgPool>,
) -> Result<HttpResponse, ProjectError> {
    let project_id = id.into_inner();
    let updated_project = form.0.try_into().map_err(ProjectError::ValidationError)?;
    let mut transaction = pool
        .begin()
        .await
        .context("Failed to acquire a Postgres connection from the Pool.")?;
    // check if the project exists
    let _ = find_project_by_id(&pool, project_id)
        .await?
        .ok_or(ProjectError::NotFound)?;
    update_project(&mut transaction, project_id, &updated_project)
        .await
        .context("Failed to update project in the database.")?;
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to update project.")?;
    Ok(HttpResponse::Ok().finish())
}

#[tracing::instrument(
    name = "Updating a project in the database",
    skip(transaction, updated_project)
)]
pub async fn update_project(
    transaction: &mut Transaction<'_, Postgres>,
    project_id: Uuid,
    updated_project: &NewProject,
) -> Result<(), sqlx::Error> {
    sqlx::query!(
        r#"UPDATE project
        SET name = $1, description = $2, modality = $3, professor = $4, email = $5, website = $6, facebook = $7, instagram = $8, linkedin = $9, twitter = $10, address = $11, banner = $12, picture = $13, category_id = $14, updated_at = $15, is_recruiting = $16
        WHERE id = $17
        "#,
        updated_project.name.as_ref(),
        updated_project.description.as_ref(),
        updated_project.modality.as_ref(),
        updated_project.professor.as_ref(),
        updated_project.email.as_ref(),
        updated_project.website.as_ref(),
        updated_project.facebook.as_ref(),
        updated_project.instagram.as_ref(),
        updated_project.linkedin.as_ref(),
        updated_project.twitter.as_ref(),
        updated_project.address.as_ref(),
        updated_project.banner.as_ref(),
        updated_project.picture.as_ref(),
        updated_project.category_id.as_ref(),
        chrono::Utc::now(),
        updated_project.is_recruiting,
        project_id
    )
    .execute(transaction)
    .await?;
    Ok(())
}

#[derive(serde::Deserialize)]
pub struct NewProjectTags {
    tags: Vec<Uuid>,
}

#[tracing::instrument(
    name = "Updating project tags",
    skip(id, new_tags, pool),
    fields(
        project_id = %id,
        new_tags = ?new_tags.tags
    )
)]
pub async fn put_project_tags(
    id: web::Path<Uuid>,
    new_tags: web::Json<NewProjectTags>,
    pool: web::Data<PgPool>,
) -> Result<HttpResponse, ProjectError> {
    let project_id = id.into_inner();
    let new_tag_ids = new_tags.into_inner().tags;
    let mut transaction = pool
        .begin()
        .await
        .context("Failed to acquire a Postgres connection from the Pool.")?;

    // if new tags length is greater than 10, return a validation error
    if new_tag_ids.len() > 10 {
        return Err(ProjectError::ValidationError(
            "A project can have at most 10 tags.".to_string(),
        ));
    }

    let _ = find_project_by_id(&pool, project_id)
        .await?
        .ok_or(ProjectError::NotFound)?;

    // Fetch current tags from the database
    let current_tags = find_project_tags(&project_id, &pool)
        .await
        .context("Failed to fetch current tags from the database while updating project tags.")?;

    // transform new_tag_id into a HashSet
    let new_tag_ids = new_tag_ids.into_iter().collect::<HashSet<Uuid>>();

    // Calculate tags to delete and to add
    let tags_to_delete = current_tags
        .difference(&new_tag_ids)
        .cloned()
        .collect::<Vec<Uuid>>();
    let tags_to_add = new_tag_ids
        .difference(&current_tags)
        .cloned()
        .collect::<Vec<Uuid>>();

    // Delete old tags not in the new list
    delete_project_tags(&mut transaction, &project_id, &tags_to_delete)
        .await
        .context("Failed to delete old tags from the database while updating project tags.")?;

    // Insert new tags
    insert_project_tags(&mut transaction, &project_id, &tags_to_add)
        .await
        .context("Failed to insert new tags in the database while updating project tags.")?;

    // Commit transaction
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to update project.")?;

    Ok(HttpResponse::Ok().finish())
}

#[tracing::instrument(name = "Find current tags for a project", skip(project_id, pool))]
async fn find_project_tags(
    project_id: &Uuid,
    pool: &PgPool,
) -> Result<HashSet<Uuid>, anyhow::Error> {
    let tags = sqlx::query!(
        r#"
        SELECT tag_id
        FROM project_tag
        WHERE project_id = $1
        "#,
        project_id
    )
    .fetch_all(pool)
    .await?
    .into_iter()
    .map(|tag| tag.tag_id)
    .collect();

    Ok(tags)
}

#[tracing::instrument(
    name = "Inserting new tags for a project",
    skip(transaction, project_id, tags_to_add)
)]
async fn insert_project_tags(
    transaction: &mut Transaction<'_, Postgres>,
    project_id: &Uuid,
    tags_to_add: &[Uuid],
) -> Result<(), anyhow::Error> {
    // execute it in one query
    sqlx::query!(
        r#"
        INSERT INTO project_tag (project_id, tag_id)
        SELECT $1, unnest($2::uuid[])
        "#,
        project_id,
        &tags_to_add
    )
    .execute(transaction)
    .await?;
    Ok(())
}

#[tracing::instrument(
    name = "Deleting old tags for a project",
    skip(transaction, project_id, tags_to_delete)
)]
async fn delete_project_tags(
    transaction: &mut Transaction<'_, Postgres>,
    project_id: &Uuid,
    tags_to_delete: &[Uuid],
) -> Result<(), anyhow::Error> {
    // execute it in one query
    sqlx::query!(
        r#"
        DELETE FROM project_tag
        WHERE project_id = $1 AND tag_id = ANY($2)
        "#,
        project_id,
        tags_to_delete
    )
    .execute(transaction)
    .await?;
    Ok(())
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
    pub tags: Vec<String>,
    pub category_name: String,
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
        SELECT 
            p.id, 
            p.name, 
            p.description, 
            p.picture, 
            p.banner, 
            p.is_recruiting, 
            p.email, 
            p.modality,
            p.address, 
            p.professor, 
            p.website, 
            p.facebook, 
            p.instagram, 
            p.linkedin, 
            p.twitter, 
            p.category_id,
            c.name AS category_name,
            STRING_AGG(t.name, '/') AS tags
        FROM 
            project p
        LEFT JOIN 
            project_tag pt ON p.id = pt.project_id
        LEFT JOIN 
            tag t ON pt.tag_id = t.id
        LEFT JOIN
            category c ON p.category_id = c.id
        WHERE 
            p.id = $1
        GROUP BY 
            p.id, c.name
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

    // parse the tags string into a Vec<String>
    let tags: Vec<String> = project
        .tags
        .map(|tags| tags.split('/').map(|tag| tag.to_string()).collect())
        .unwrap_or_else(Vec::new);

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
        tags,
        category_name: project.category_name,
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
        SELECT 
            p.id, 
            p.name, 
            p.description, 
            p.picture, 
            p.banner, 
            p.is_recruiting, 
            p.email, 
            p.modality,
            p.address, 
            p.professor, 
            p.website, 
            p.facebook, 
            p.instagram, 
            p.linkedin, 
            p.twitter, 
            p.category_id,
            c.name AS category_name,
            STRING_AGG(t.name, '/') AS tags
        FROM 
            project p
        LEFT JOIN 
            project_tag pt ON p.id = pt.project_id
        LEFT JOIN 
            tag t ON pt.tag_id = t.id
        LEFT JOIN
            category c ON p.category_id = c.id
        GROUP BY 
            p.id, c.name
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
        tags: project.tags.map_or_else(
            || Vec::new(),
            |tags| tags.split('/').map(|tag| tag.to_string()).collect(),
        ),
        category_name: project.category_name,
    })
    .collect();

    Ok(projects)
}

#[tracing::instrument(
    name = "Get project tags",
    skip(pool, id),
    fields(project_id = %id)
)]
pub async fn get_project_tags(
    pool: web::Data<PgPool>,
    id: web::Path<Uuid>,
) -> Result<HttpResponse, GetProjectError> {
    let project_id = id.into_inner();

    let _ = find_project_by_id(&pool, project_id)
        .await?
        .ok_or(GetProjectError::NotFound)?;

    let tags = find_project_tags(&project_id, &pool).await?;

    // transform the tags into a Vec of uuids
    let tags = tags.into_iter().collect::<Vec<Uuid>>();

    Ok(HttpResponse::Ok().json(tags))
}
