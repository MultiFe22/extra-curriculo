//! src/domain/mod.rs
mod category;
mod program;
mod project;
mod tag;
mod user;
pub use category::CategoryName;
pub use category::NewCategory;
pub use program::NewProgram;
pub use program::ProgramCampus;
pub use program::ProgramCollege;
pub use program::ProgramDepartment;
pub use program::ProgramInstitute;
pub use program::ProgramName;
pub use project::NewProject;
pub use project::ProjectAddress;
pub use project::ProjectBanner;
pub use project::ProjectCategoryId;
pub use project::ProjectDescription;
pub use project::ProjectEmail;
pub use project::ProjectFacebook;
pub use project::ProjectInstagram;
pub use project::ProjectLinkedin;
pub use project::ProjectModality;
pub use project::ProjectName;
pub use project::ProjectPicture;
pub use project::ProjectProfessor;
pub use project::ProjectTwitter;
pub use project::ProjectWebsite;
pub use tag::NewTag;
pub use tag::TagName;
pub use user::NewUser;
pub use user::UserEmail;
pub use user::UserName;
pub use user::UserProfilePic;
