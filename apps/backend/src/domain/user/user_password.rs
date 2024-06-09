use secrecy::{ExposeSecret, Secret};
use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct UserPassword(Secret<String>);

impl UserPassword {
    /// Returns an instance of `UserPassword` if the input satisfies all
    /// our validation constraints on passwords.
    /// It panics otherwise.
    pub fn parse(s: String) -> Result<UserPassword, String> {
        let is_too_short = s.graphemes(true).count() <= 8;

        if is_too_short {
            Err(format!("{} is not a valid password.", s))
        } else {
            Ok(Self(Secret::new(s)))
        }
    }

    /// Exposes the secret password as a reference to a string slice.
    pub fn expose_secret(&self) -> &str {
        self.0.expose_secret()
    }

    /// Clones the secret password and returns a new instance of `UserPassword`.
    pub fn clone(&self) -> Secret<String> {
        self.0.clone()
    }
}

impl AsRef<str> for UserPassword {
    fn as_ref(&self) -> &str {
        self.0.expose_secret()
    }
}



#[cfg(test)]
mod tests {
    use super::UserPassword;
    use claims::{assert_err, assert_ok};

    #[test]
    fn a_password_longer_than_8_graphemes_is_valid() {
        let password = "password123".to_string();
        assert_ok!(UserPassword::parse(password));
    }

    #[test]
    fn a_password_of_8_graphemes_is_rejected() {
        let password = "pass1234".to_string();
        assert_err!(UserPassword::parse(password));
    }

    #[test]
    fn a_password_of_less_than_8_graphemes_is_rejected() {
        let password = "short".to_string();
        assert_err!(UserPassword::parse(password));
    }

    #[test]
    fn a_valid_password_is_parsed_successfully() {
        let password = "this_is_a_valid_password".to_string();
        assert_ok!(UserPassword::parse(password));
    }
}
