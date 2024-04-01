use crate::domain::{
    NewProgram, ProgramCampus, ProgramCollege, ProgramDepartment, ProgramInstitute, ProgramName,
};
use actix_web::http::StatusCode;
use actix_web::{web, HttpResponse, ResponseError};
use anyhow::Context;
use sqlx::{PgPool, Postgres, Transaction};
use uuid::Uuid;

use super::error_chain_fmt;

#[derive(serde::Deserialize)]
pub struct NewProgramForm {
    pub name: String,
    pub institute: String,
    pub department: String,
    pub campus: String,
    pub college: String,
}

impl TryFrom<NewProgramForm> for NewProgram {
    type Error = String;

    fn try_from(new_program: NewProgramForm) -> Result<Self, Self::Error> {
        let name = ProgramName::parse(new_program.name)?;
        let institute = ProgramInstitute::parse(new_program.institute)?;
        let department = ProgramDepartment::parse(new_program.department)?;
        let campus = ProgramCampus::parse(new_program.campus)?;
        let college = ProgramCollege::parse(new_program.college)?;

        Ok(Self {
            name,
            institute,
            department,
            campus,
            college,
        })
    }
}

#[derive(thiserror::Error)]
pub enum ProgramError {
    #[error("{0}")]
    ValidationError(String),
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for ProgramError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for ProgramError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::ValidationError(_) => StatusCode::BAD_REQUEST,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Adding a new program",
    skip(form, pool),
    fields(
        program_name = %form.name,
        program_institute = %form.institute,
        program_department = %form.department,
        program_campus = %form.campus,
        program_college = %form.college,
    )
)]
pub async fn post_program(
    form: web::Json<NewProgramForm>,
    pool: web::Data<PgPool>,
) -> Result<HttpResponse, ProgramError> {
    let new_program = form.0.try_into().map_err(ProgramError::ValidationError)?;
    let mut transaction = pool
        .begin()
        .await
        .context("Failed to acquire a Postgres connection from the Pool.")?;
    let program_id = insert_program(&mut transaction, &new_program)
        .await
        .context("Failed to insert new subscriber in the database.")?;
    transaction
        .commit()
        .await
        .context("Failed to commit SQL transaction to store a new subscriber.")?;
    Ok(HttpResponse::Ok().json(program_id))
}

#[tracing::instrument(
    name = "Saving new program in the database",
    skip(new_program, transaction)
)]
pub async fn insert_program(
    transaction: &mut Transaction<'_, Postgres>,
    new_program: &NewProgram,
) -> Result<Uuid, sqlx::Error> {
    let program_id = Uuid::new_v4();
    sqlx::query!(
        r#"INSERT INTO program (id, name, institute, department, campus, college)
        VALUES ($1, $2, $3, $4, $5, $6)
        "#,
        program_id,
        new_program.name.as_ref(),
        new_program.institute.as_ref(),
        new_program.department.as_ref(),
        new_program.campus.as_ref(),
        new_program.college.as_ref()
    )
    .execute(transaction)
    .await?;
    Ok(program_id)
}

#[derive(thiserror::Error)]
pub enum GetProgramError {
    #[error("Program not found")]
    NotFound,
    #[error(transparent)]
    UnexpectedError(#[from] anyhow::Error),
}

impl std::fmt::Debug for GetProgramError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        error_chain_fmt(self, f)
    }
}

impl ResponseError for GetProgramError {
    fn status_code(&self) -> StatusCode {
        match self {
            Self::NotFound => StatusCode::NOT_FOUND,
            Self::UnexpectedError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}

#[tracing::instrument(
    name = "Getting a program by ID",
    skip(pool),
    fields(program_id = %id)
)]
pub async fn get_program(
    pool: web::Data<PgPool>,
    id: web::Path<uuid::Uuid>,
) -> Result<HttpResponse, GetProgramError> {
    let program_id = id.into_inner();

    let program = find_program_by_id(&pool, program_id).await?;

    match program {
        Some(program) => Ok(HttpResponse::Ok().json(program)),
        None => Ok(HttpResponse::NotFound().finish()),
    }
}

#[derive(Debug, serde::Serialize)]
pub struct ExistingProgram {
    pub id: Uuid,
    pub name: String,
    pub institute: String,
    pub department: String,
    pub campus: String,
    pub college: String,
}

#[tracing::instrument(
    name = "Querying the database for a program by ID",
    skip(pool),
    fields(program_id = %program_id)
)]
pub async fn find_program_by_id(
    pool: &PgPool,
    program_id: Uuid,
) -> Result<Option<ExistingProgram>, anyhow::Error> {
    let program = sqlx::query!(
        r#"
        SELECT id, name, institute, department, campus, college
        FROM program
        WHERE id = $1
        "#,
        program_id
    )
    .fetch_optional(pool)
    .await?;

    // check if the program is found, if not return None
    let program = match program {
        Some(program) => program,
        None => return Ok(None),
    };

    Ok(Some(ExistingProgram {
        id: program.id,
        name: program.name,
        institute: program.institute,
        department: program.department,
        campus: program.campus,
        college: program.college,
    }))
}

#[tracing::instrument(name = "Getting all programs", skip(pool))]
pub async fn get_all_programs(pool: web::Data<PgPool>) -> Result<HttpResponse, GetProgramError> {
    let programs = find_all_programs(&pool).await?;

    if programs.is_empty() {
        Ok(HttpResponse::NotFound().finish())
    } else {
        Ok(HttpResponse::Ok().json(programs))
    }
}

#[tracing::instrument(name = "Querying the database for all programs", skip(pool))]
pub async fn find_all_programs(pool: &PgPool) -> Result<Vec<ExistingProgram>, anyhow::Error> {
    let programs = sqlx::query!(
        r#"
        SELECT id, name, institute, department, campus, college
        FROM program
        "#
    )
    .fetch_all(pool)
    .await?
    .into_iter()
    .map(|program| ExistingProgram {
        id: program.id,
        name: program.name,
        institute: program.institute,
        department: program.department,
        campus: program.campus,
        college: program.college,
    })
    .collect();

    Ok(programs)
}
