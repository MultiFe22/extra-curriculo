use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct ProjectProfessor(String);

impl ProjectProfessor {
    /// Parses a given string into a `ProjectProfessor` if it meets the validation constraints.
    ///
    /// Constraints:
    /// - The name must not be empty.
    /// - The name must not exceed 100 graphemes in length.
    /// - The name may only contain letters, spaces, periods (.), hyphens (-) and other characters (might change).
    ///
    /// Returns an `Ok(ProjectProfessor)` if the input is valid, or an `Err` with a message otherwise.
    pub fn parse(s: String) -> Result<ProjectProfessor, String> {
        let grapheme_count = s.graphemes(true).count();
        let starts_or_ends_with_whitespace = s.starts_with(' ') || s.ends_with(' ');
        if s.is_empty() || starts_or_ends_with_whitespace {
            Err("The name cannot be empty or start/end with a whitespace.".to_string())
        } else if grapheme_count > 100 {
            Err("The name must not exceed 100 graphemes.".to_string())
        } else if !s
            .chars()
            .all(|c| c.is_alphabetic() || c == ' ' || c == '.' || c == '-' || c == '\'')
        {
            Err("The name contains invalid characters. Only letters, spaces, periods, and hyphens are allowed.".to_string())
        } else {
            Ok(Self(s))
        }
    }
}

impl std::fmt::Display for ProjectProfessor {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<str> for ProjectProfessor {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use claims::assert_err;
    use fake::faker::name::en::NameWithTitle;
    use fake::Fake;

    #[derive(Debug, Clone)]
    struct ValidNameFixture(String);

    impl quickcheck::Arbitrary for ValidNameFixture {
        fn arbitrary<G: quickcheck::Gen>(g: &mut G) -> Self {
            let name = NameWithTitle().fake_with_rng(g);
            Self(name)
        }
    }

    #[quickcheck_macros::quickcheck]
    fn valid_names_are_parsed_successfully(valid_name: ValidNameFixture) -> bool {
        ProjectProfessor::parse(valid_name.0).is_ok()
    }

    #[test]
    fn name_empty_is_rejected() {
        assert!(ProjectProfessor::parse("".to_string()).is_err());
    }

    #[test]
    fn string_starting_or_ending_with_whitespace_is_rejected() {
        let name = " Dr. John-Doe".to_string();
        let name2 = "Dr. John-Doe ".to_string();
        let name3 = " Dr. John-Doe ".to_string();
        assert_err!(ProjectProfessor::parse(name));
        assert_err!(ProjectProfessor::parse(name2));
        assert_err!(ProjectProfessor::parse(name3));
    }

    #[test]
    fn name_too_long_is_rejected() {
        let long_name = "a".repeat(101); // Exceeds 100 graphemes
        assert!(ProjectProfessor::parse(long_name).is_err());
    }

    #[test]
    fn valid_name_with_special_chars_is_accepted() {
        assert!(ProjectProfessor::parse("Dr. John-Doe".to_string()).is_ok());
    }

    #[test]
    fn invalid_name_with_unallowed_chars_is_rejected() {
        // Assume @ is not an allowed character
        assert!(ProjectProfessor::parse("Dr.@Jane Doe".to_string()).is_err());
    }
}
