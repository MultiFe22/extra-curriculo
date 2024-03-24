use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct ProjectName(String);

impl ProjectName {
    /// Returns an instance of `ProjectName` if the input satisfies all
    /// validation constraints on project names. It returns an error otherwise.
    ///
    /// Validation rules:
    /// - The name must not be empty or consist only of whitespace.
    /// - The name must not exceed 60 graphemes in length.
    ///   interfere with parsing or are generally not expected in project names.
    pub fn parse(s: String) -> Result<ProjectName, String> {
        let is_empty_or_whitespace = s.trim().is_empty();
        let is_too_long = s.graphemes(true).count() > 60; // Adjusted maximum length to 60

        if is_empty_or_whitespace || is_too_long {
            Err(format!("{} is not a valid project name.", s))
        } else {
            Ok(Self(s))
        }
    }
}

impl AsRef<str> for ProjectName {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::ProjectName;
    use claims::{assert_err, assert_ok};

    #[test]
    fn a_60_grapheme_long_name_is_valid() {
        let name = "ё".repeat(60);
        assert_ok!(ProjectName::parse(name));
    }

    #[test]
    fn a_name_longer_than_60_graphemes_is_rejected() {
        let name = "a".repeat(61);
        assert_err!(ProjectName::parse(name));
    }

    #[test]
    fn whitespace_only_names_are_rejected() {
        let name = " ".to_string();
        assert_err!(ProjectName::parse(name));
    }

    #[test]
    fn empty_string_is_rejected() {
        let name = "".to_string();
        assert_err!(ProjectName::parse(name));
    }

    #[test]
    fn a_valid_name_is_parsed_successfully() {
        let name = "NextGen_Project2024".to_string(); // An example project name
        assert_ok!(ProjectName::parse(name));
    }
}
