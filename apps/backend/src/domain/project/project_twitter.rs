#[derive(Debug)]
pub struct ProjectTwitter(String);

impl ProjectTwitter {
    /// Attempts to create a `ProjectTwitter` from a given string, validating it against Twitter's handle rules.
    ///
    /// Constraints:
    /// - Must start with `@`.
    /// - Can only contain letters, numbers, and underscores.
    /// - Length must be between 2 and 15 characters, excluding the `@`.
    ///
    /// Returns `Ok(ProjectTwitter)` if the input is valid, or an `Err` with a message otherwise.
    pub fn parse(s: String) -> Result<ProjectTwitter, String> {
        if !s.starts_with('@') {
            Err("Twitter handle must start with '@'.".to_string())
        } else if s.len() < 2 || s.len() > 16 {
            // Including @
            Err(
                "Twitter handle must be between 2 and 15 characters long, excluding '@'."
                    .to_string(),
            )
        } else if !s[1..].chars().all(|c| c.is_alphanumeric() || c == '_') {
            Err("Twitter handle can only contain letters, numbers, and underscores.".to_string())
        } else {
            Ok(Self(s))
        }
    }
}

impl std::fmt::Display for ProjectTwitter {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<str> for ProjectTwitter {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn handle_starts_with_at_symbol() {
        assert!(ProjectTwitter::parse("@validHandle".to_string()).is_ok());
    }

    #[test]
    fn handle_too_short_is_rejected() {
        assert!(ProjectTwitter::parse("@".to_string()).is_err());
    }

    #[test]
    fn handle_too_long_is_rejected() {
        assert!(ProjectTwitter::parse("@1234567890123456".to_string()).is_err());
    }

    #[test]
    fn handle_with_invalid_chars_is_rejected() {
        assert!(ProjectTwitter::parse("@invalid!handle".to_string()).is_err());
    }

    #[test]
    fn valid_handle_is_accepted() {
        assert!(ProjectTwitter::parse("@valid_123".to_string()).is_ok());
    }
}
