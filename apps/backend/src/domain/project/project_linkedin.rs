use validator::validate_url;

#[derive(Debug)]
pub struct ProjectLinkedin(String);

impl ProjectLinkedin {
    /// Attempts to create a `ProjectLinkedin` from a given string.
    ///
    /// If the input is an empty string, it returns an error.
    /// If the input is a non-empty string, it validates it as a URL and checks if the domain is linkedin.com.
    /// Returns `Ok` with the `ProjectLinkedin` if the URL is valid and belongs to LinkedIn.
    /// Returns `Err` with validation errors if the URL is not valid or does not belong to LinkedIn.
    pub fn parse(s: String) -> Result<ProjectLinkedin, String> {
        if s.is_empty() {
            Err("URL cannot be empty.".to_string())
        } else if validate_url(&s) {
            let url = url::Url::parse(&s).map_err(|_| format!("{} is not a valid URL", s))?;
            let domain = url.domain().unwrap_or("");
            let is_linkedin_url = domain == "linkedin.com" || domain.ends_with(".linkedin.com");

            if is_linkedin_url {
                Ok(ProjectLinkedin(s))
            } else {
                Err(format!("{} is not a valid LinkedIn URL", s))
            }
        } else {
            Err(format!("{} is not a valid URL", s))
        }
    }
}

impl std::fmt::Display for ProjectLinkedin {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

impl AsRef<str> for ProjectLinkedin {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_url_is_rejected() {
        let result = ProjectLinkedin::parse("".to_string());
        assert!(result.is_err());
    }

    #[test]
    fn valid_linkedin_url_is_accepted() {
        let url = "https://www.linkedin.com/in/ValidProfile".to_string();
        let result = ProjectLinkedin::parse(url.clone());
        assert!(result.is_ok());
        assert_eq!(result.unwrap().0, url);
    }

    #[test]
    fn valid_subdomain_linkedin_url_is_accepted() {
        let url = "https://subdomain.linkedin.com/ValidPage".to_string();
        let result = ProjectLinkedin::parse(url.clone());
        assert!(result.is_ok());
        assert_eq!(result.unwrap().0, url);
    }

    #[test]
    fn non_linkedin_url_is_rejected() {
        let url = "https://www.example.com/NotLinkedin".to_string();
        let result = ProjectLinkedin::parse(url);
        assert!(result.is_err());
    }

    #[test]
    fn invalid_url_format_is_rejected() {
        let url = "not a url".to_string();
        let result = ProjectLinkedin::parse(url);
        assert!(result.is_err());
    }
}
