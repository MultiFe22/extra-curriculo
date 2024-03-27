use validator::validate_url;

#[derive(Debug)]
pub struct ProjectWebsite(String);

impl ProjectWebsite {
    /// Attempts to create a `ProjectWebsite` from a given string.
    ///
    /// The input string is validated as a URL. If the input is an empty string, it returns an error.
    /// Returns `Ok(ProjectWebsite)` if the URL is valid.
    /// Returns `Err` with validation errors if the URL is not valid.
    pub fn parse(s: String) -> Result<ProjectWebsite, String> {
        if s.is_empty() {
            Err("URL cannot be empty.".to_string())
        } else if validate_url(&s) {
            Ok(ProjectWebsite(s))
        } else {
            Err(format!("{} is not a valid URL", s))
        }
    }
}

impl std::fmt::Display for ProjectWebsite {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

impl AsRef<str> for ProjectWebsite {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_url_is_rejected() {
        let result = ProjectWebsite::parse("".to_string());
        assert!(result.is_err());
    }

    #[test]
    fn valid_website_url_is_accepted() {
        let url = "https://www.example.com".to_string();
        let result = ProjectWebsite::parse(url.clone());
        assert!(result.is_ok());
        assert_eq!(result.unwrap().0, url);
    }

    #[test]
    fn invalid_website_url_is_rejected() {
        let url = "not url".to_string(); // Misspelled protocol
        let result = ProjectWebsite::parse(url);
        assert!(result.is_err());
    }
}
