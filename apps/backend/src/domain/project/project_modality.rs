use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct ProjectModality(String);

impl ProjectModality {
    /// Parses a given string into a `ProjectModality` if it meets the validation constraints.
    ///
    /// Constraints:
    /// - The modality name must not be empty.
    /// - The modality name must not exceed 30 graphemes in length.
    ///
    /// Returns an `Ok(ProjectModality)` if the input is valid, or an `Err` with a message otherwise.
    pub fn parse(s: String) -> Result<ProjectModality, String> {
        let grapheme_count = s.graphemes(true).count();
        let starts_or_ends_with_whitespace = s.starts_with(' ') || s.ends_with(' ');
        if s.is_empty() || starts_or_ends_with_whitespace {
            Err("The modality name cannot be empty or start/end with a whitespace.".to_string())
        } else if grapheme_count > 30 {
            Err("The modality name must not exceed 30 graphemes.".to_string())
        } else {
            Ok(Self(s))
        }
    }
}

impl std::fmt::Display for ProjectModality {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<str> for ProjectModality {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use claims::assert_err;

    use super::*;

    #[test]
    fn parse_empty_string_is_rejected() {
        let modality = "".to_string();
        assert!(ProjectModality::parse(modality).is_err());
    }

    #[test]
    fn parse_long_string_is_rejected() {
        let modality = "too long".repeat(4); // Using a string that might visually appear shorter due to combining characters
        assert!(ProjectModality::parse(modality).is_err());
    }

    #[test]
    fn string_starting_or_ending_with_whitespace_is_rejected() {
        let name = " Hybrid".to_string();
        let name2 = "Hybrid ".to_string();
        let name3 = " Hybrid ".to_string();
        assert_err!(ProjectModality::parse(name));
        assert_err!(ProjectModality::parse(name2));
        assert_err!(ProjectModality::parse(name3));
    }

    #[test]
    fn parse_long_grapheme_is_rejected() {
        let modality = "𝔾𝕣𝕒𝕡𝕙𝕖𝕞𝕖".repeat(6); // Using a string that might visually appear shorter due to combining characters
        assert!(ProjectModality::parse(modality).is_err());
    }

    #[test]
    fn valid_modality_name_is_parsed_successfully() {
        let modality = "Online".to_string();
        assert!(ProjectModality::parse(modality).is_ok());
    }

    #[test]
    fn valid_modality_with_complex_characters_is_parsed_successfully() {
        let modality = "👨‍👩‍👧‍👦🌍🎉".to_string(); // Emoji sequence
        assert!(ProjectModality::parse(modality).is_ok());
    }
}
