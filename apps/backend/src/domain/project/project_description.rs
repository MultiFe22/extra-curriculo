use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct ProjectDescription(String);

impl ProjectDescription {
    /// Returns an instance of `ProjectDescription` if the input satisfies the
    /// validation constraints on project descriptions. Specifically, the description
    /// must be between 30 and 500 graphemes in length and cannot consist solely of whitespace.
    pub fn parse(s: String) -> Result<ProjectDescription, String> {
        let grapheme_len = s.graphemes(true).count(); // Counting graphemes for validation
        let is_all_whitespace = s.trim().is_empty(); // Checks if the description is only whitespace

        if grapheme_len < 30 {
            Err(format!("The description is too short. It must be at least 30 graphemes long, but it was {} graphemes.", grapheme_len))
        } else if grapheme_len > 1500 {
            Err(format!("The description is too long. It must be no more than 500 graphemes long, but it was {} graphemes.", grapheme_len))
        } else if is_all_whitespace {
            Err("The description cannot consist solely of whitespace.".to_string())
        } else {
            Ok(Self(s))
        }
    }
}

impl AsRef<str> for ProjectDescription {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::ProjectDescription;
    use claims::{assert_err, assert_ok};

    #[test]
    fn description_too_short_is_rejected() {
        let desc = "短".repeat(29); // Each "短" is a single grapheme
        assert_err!(ProjectDescription::parse(desc));
    }

    #[test]
    fn description_too_long_is_rejected() {
        let desc = "長".repeat(1501); // Each "長" is a single grapheme
        assert_err!(ProjectDescription::parse(desc));
    }

    #[test]
    fn all_whitespace_description_is_rejected() {
        let desc = "     ".to_string(); // Only whitespace
        assert_err!(ProjectDescription::parse(desc));
    }

    #[test]
    fn valid_description_is_parsed_successfully() {
        let desc =
            "This is a valid project description that meets the length requirements.".to_string();
        assert_ok!(ProjectDescription::parse(desc));
    }

    #[test]
    fn minimum_length_description_is_valid() {
        let desc = "a".repeat(30); // Using characters for simplicity
        assert_ok!(ProjectDescription::parse(desc));
    }

    #[test]
    fn maximum_length_description_is_valid() {
        let desc = "b".repeat(500); // Using characters for simplicity
        assert_ok!(ProjectDescription::parse(desc));
    }
}
