use super::{
    ProjectAddress, ProjectBanner, ProjectCategoryId, ProjectDescription, ProjectEmail,
    ProjectFacebook, ProjectInstagram, ProjectLinkedin, ProjectModality, ProjectName,
    ProjectPicture, ProjectProfessor, ProjectTwitter, ProjectWebsite,
};


pub struct NewProject {
    pub address: ProjectAddress,
    pub banner: ProjectBanner,
    pub description: ProjectDescription,
    pub email: ProjectEmail,
    pub facebook: ProjectFacebook,
    pub instagram: ProjectInstagram,
    pub linkedin: ProjectLinkedin,
    pub modality: ProjectModality,
    pub name: ProjectName,
    pub professor: ProjectProfessor,
    pub twitter: ProjectTwitter,
    pub website: ProjectWebsite,
    pub picture: ProjectPicture,
    pub category_id: ProjectCategoryId,
    pub is_recruiting: bool,
}
