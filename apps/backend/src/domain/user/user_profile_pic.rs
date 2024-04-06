use validator::validate_url;

#[derive(Debug)]
pub struct UserProfilePic(String);

impl UserProfilePic {
    /// Attempts to create a `UserProfilePic` from a given string.
    ///
    /// If the input is an empty string, it directly creates a `UserPicture`.
    /// If the input is a non-empty string, it validates it as a URL.
    /// Returns `Ok` with the `UserPicture` if the URL is valid or if there is no URL.
    /// Returns `Err` with validation errors if the URL is not valid.
    pub fn parse(s: String) -> Result<UserProfilePic, String> {
        if s.is_empty() || validate_url(&s) {
            Ok(UserProfilePic(s))
        } else {
            Err(format!("{} is not a valid Profile Pic link", s))
        }
    }
}

impl std::fmt::Display for UserProfilePic {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        // We just forward to the Display implementation of
        // the wrapped String.
        self.0.fmt(f)
    }
}

impl AsRef<str> for UserProfilePic {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn empty_string_creates_user_profile_pic() {
        let picture = UserProfilePic::parse("".to_string()).unwrap();
        assert_eq!(picture.0, "");
    }

    #[test]
    fn valid_url_creates_user_profile_pic() {
        let url = "https://example.com/image.png".to_string();
        let picture = UserProfilePic::parse(url.clone()).unwrap();
        assert_eq!(picture.0, url);
    }

    #[test]
    fn invalid_url_returns_error() {
        let result = UserProfilePic::parse("not a url".to_string());
        assert!(result.is_err());
    }
}
