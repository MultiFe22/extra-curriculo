use validator::validate_url;

#[derive(Debug)]
pub struct ProjectFacebook(String);

impl ProjectFacebook {
    /// Attempts to create a `ProjectFacebook` from a given string.
    ///
    /// If the input is an empty string, it returns an error.
    /// If the input is a non-empty string, it validates it as a URL and checks if the domain is facebook.com.
    /// Returns `Ok` with the `ProjectFacebook` if the URL is valid and belongs to Facebook.
    /// Returns `Err` with validation errors if the URL is not valid or does not belong to Facebook.
    pub fn parse(s: String) -> Result<ProjectFacebook, String> {
        if s.is_empty() {
            Err("URL cannot be empty.".to_string())
        } else if validate_url(&s) {
            let url = url::Url::parse(&s).map_err(|_| format!("{} is not a valid URL", s))?;
            let domain = url.domain().unwrap_or("");
            let is_facebook_url = domain == "facebook.com" || domain.ends_with(".facebook.com");

            if is_facebook_url {
                Ok(ProjectFacebook(s))
            } else {
                Err(format!("{} is not a valid Facebook URL", s))
            }
        } else {
            Err(format!("{} is not a valid URL", s))
        }
    }
}

impl std::fmt::Display for ProjectFacebook {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

impl AsRef<str> for ProjectFacebook {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_url_is_rejected() {
        let result = ProjectFacebook::parse("".to_string());
        assert!(result.is_err());
    }

    #[test]
    fn valid_facebook_url_is_accepted() {
        let url = "https://www.facebook.com/ValidPage".to_string();
        let result = ProjectFacebook::parse(url.clone());
        assert!(result.is_ok());
        assert_eq!(result.unwrap().0, url);
    }

    #[test]
    fn valid_subdomain_facebook_url_is_accepted() {
        let url = "https://subdomain.facebook.com/ValidPage".to_string();
        let result = ProjectFacebook::parse(url.clone());
        assert!(result.is_ok());
        assert_eq!(result.unwrap().0, url);
    }

    #[test]
    fn non_facebook_url_is_rejected() {
        let url = "https://www.example.com/NotFacebook".to_string();
        let result = ProjectFacebook::parse(url);
        assert!(result.is_err());
    }

    #[test]
    fn invalid_url_format_is_rejected() {
        let url = "not a url".to_string();
        let result = ProjectFacebook::parse(url);
        assert!(result.is_err());
    }
}
