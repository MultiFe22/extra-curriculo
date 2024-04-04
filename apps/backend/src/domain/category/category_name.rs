use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct CategoryName(String); // Renamed from TagName to CategoryName

impl CategoryName {
    /// Returns an instance of `CategoryName` if the input satisfies all
    /// our validation constraints on category names.
    /// It panics otherwise.
    pub fn parse(s: String) -> Result<CategoryName, String> {
        let is_empty_or_whitespace = s.trim().is_empty();
        let is_too_long = s.graphemes(true).count() > 40; // Maximum length is 40 graphemes
        let forbidden_characters = ['/', '(', ')', '"', '<', '>', '\\', '{', '}'];
        let contains_forbidden_characters = s.chars().any(|g| forbidden_characters.contains(&g));

        let starts_or_ends_with_whitespace = s.starts_with(' ') || s.ends_with(' ');
        if is_empty_or_whitespace
            || is_too_long
            || contains_forbidden_characters
            || starts_or_ends_with_whitespace
        {
            Err(format!("{} is not a valid category name.", s))
        } else {
            Ok(Self(s))
        }
    }
}

impl AsRef<str> for CategoryName {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::CategoryName; // Updated to CategoryName
    use claims::{assert_err, assert_ok};

    #[test]
    fn a_40_grapheme_long_name_is_valid() {
        let name = "ё".repeat(40);
        assert_ok!(CategoryName::parse(name));
    }

    #[test]
    fn a_name_longer_than_40_graphemes_is_rejected() {
        let name = "a".repeat(41);
        assert_err!(CategoryName::parse(name));
    }

    #[test]
    fn whitespace_only_names_are_rejected() {
        let name = " ".to_string();
        assert_err!(CategoryName::parse(name));
    }

    #[test]
    fn string_starting_or_ending_with_whitespace_is_rejected() {
        let name = " Extensão".to_string();
        let name2 = "Extensão ".to_string();
        let name3 = " Extensão ".to_string();
        assert_err!(CategoryName::parse(name));
        assert_err!(CategoryName::parse(name2));
        assert_err!(CategoryName::parse(name3));
    }

    #[test]
    fn empty_string_is_rejected() {
        let name = "".to_string();
        assert_err!(CategoryName::parse(name));
    }

    #[test]
    fn names_containing_an_invalid_character_are_rejected() {
        for name in &['/', '(', ')', '"', '<', '>', '\\', '{', '}'] {
            let name = name.to_string();
            assert_err!(CategoryName::parse(name));
        }
    }

    #[test]
    fn a_valid_name_is_parsed_successfully() {
        let name = "Hugo Award".to_string(); // Maintaining the example name
        assert_ok!(CategoryName::parse(name));
    }
}
