use validator::validate_url;

#[derive(Debug)]
pub struct ProjectPicture(String);

impl ProjectPicture {
    /// Attempts to create a `ProjectPicture` from a given string.
    ///
    /// If the input is an empty string, it directly creates a `ProjectPicture`.
    /// If the input is a non-empty string, it validates it as a URL.
    /// Returns `Ok` with the `ProjectPicture` if the URL is valid or if there is no URL.
    /// Returns `Err` with validation errors if the URL is not valid.
    pub fn parse(s: String) -> Result<ProjectPicture, String> {
        if s.is_empty() || validate_url(&s) {
            Ok(ProjectPicture(s))
        } else {
            Err(format!("{} is not a valid picture link", s))
        }
    }
}

impl std::fmt::Display for ProjectPicture {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        // We just forward to the Display implementation of
        // the wrapped String.
        self.0.fmt(f)
    }
}

impl AsRef<str> for ProjectPicture {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_string_creates_project_picture() {
        let picture = ProjectPicture::parse("".to_string()).unwrap();
        assert_eq!(picture.0, "");
    }

    #[test]
    fn valid_url_creates_project_picture() {
        let url = "https://example.com/image.png".to_string();
        let picture = ProjectPicture::parse(url.clone()).unwrap();
        assert_eq!(picture.0, url);
    }

    #[test]
    fn invalid_url_returns_error() {
        let result = ProjectPicture::parse("not a url".to_string());
        assert!(result.is_err());
    }
}
