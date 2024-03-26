use uuid::Uuid;

#[derive(Debug)]
pub struct ProjectCategoryId(Uuid);

impl ProjectCategoryId {
    /// Attempts to create a `ProjectCategoryId` from a given UUID string.
    ///
    /// Returns `Ok(ProjectCategoryId)` if the input is a valid UUID.
    /// Returns `Err` with a message otherwise.
    pub fn parse(s: String) -> Result<ProjectCategoryId, String> {
        match Uuid::parse_str(&s) {
            Ok(uuid) => Ok(ProjectCategoryId(uuid)),
            Err(_) => Err(format!("{} is not a valid UUID", s)),
        }
    }
}

impl std::fmt::Display for ProjectCategoryId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<Uuid> for ProjectCategoryId {
    fn as_ref(&self) -> &Uuid {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn valid_uuid_is_accepted() {
        let valid_uuid_str = Uuid::new_v4().to_string();
        assert!(ProjectCategoryId::parse(valid_uuid_str).is_ok());
    }

    #[test]
    fn invalid_uuid_is_rejected() {
        let invalid_uuid_str = "invalid-uuid".to_string();
        assert!(ProjectCategoryId::parse(invalid_uuid_str).is_err());
    }
}
