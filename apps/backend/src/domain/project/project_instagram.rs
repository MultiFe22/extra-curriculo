#[derive(Debug)]
pub struct ProjectInstagram(String);

impl ProjectInstagram {
    /// Parses a given string into a `ProjectInstagram` if it meets Instagram's handle validation constraints.
    ///
    /// Constraints:
    /// - Must start with a letter.
    /// - Can only contain letters, numbers, periods (.), and underscores (_).
    /// - Length must be between 1 and 30 characters.
    /// - An empty string is considered valid. Because it means the project has no Instagram handle.
    ///
    /// Returns an `Ok(ProjectInstagram)` if the input is valid, or an `Err` with a message otherwise.
    pub fn parse(s: String) -> Result<ProjectInstagram, String> {
        if s.is_empty() {
            return Ok(Self(s));
        }

        if s.len() > 30 {
            return Err("Instagram handle must be shorter than 30 chars.".to_string());
        }

        if !s.starts_with(char::is_alphabetic) {
            return Err("Instagram handle must start with a letter.".to_string());
        }

        if !s
            .chars()
            .all(|c| c.is_alphanumeric() || c == '.' || c == '_')
        {
            return Err(
                "Instagram handle can only contain letters, numbers, periods, and underscores."
                    .to_string(),
            );
        }

        Ok(Self(s))
    }
}

impl std::fmt::Display for ProjectInstagram {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<str> for ProjectInstagram {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn handle_too_long_is_rejected() {
        let handle = "a".repeat(31); // Exceeds 30 characters
        assert!(ProjectInstagram::parse(handle).is_err());
    }

    #[test]
    fn valid_handle_is_accepted() {
        assert!(ProjectInstagram::parse("valid_handle".to_string()).is_ok());
    }

    #[test]
    fn handle_starts_with_non_letter_is_rejected() {
        assert!(ProjectInstagram::parse("_invalid".to_string()).is_err());
    }

    #[test]
    fn handle_with_invalid_chars_is_rejected() {
        assert!(ProjectInstagram::parse("invalid!handle".to_string()).is_err());
    }

    #[test]
    fn empty_handle_is_accepted() {
        assert!(ProjectInstagram::parse("".to_string()).is_ok());
    }
}
