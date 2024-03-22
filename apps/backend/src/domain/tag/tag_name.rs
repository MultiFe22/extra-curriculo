use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct TagName(String);

impl TagName {
    /// Returns an instance of `TagName` if the input satisfies all
    /// our validation constraints on tag names.
    /// It panics otherwise.
    pub fn parse(s: String) -> Result<TagName, String> {
        let is_empty_or_whitespace = s.trim().is_empty();
        let is_too_long = s.graphemes(true).count() > 40; // Maximum length is now 40
        let forbidden_characters = ['/', '(', ')', '"', '<', '>', '\\', '{', '}'];
        let contains_forbidden_characters = s.chars().any(|g| forbidden_characters.contains(&g));

        if is_empty_or_whitespace || is_too_long || contains_forbidden_characters {
            Err(format!("{} is not a valid tag name.", s))
        } else {
            Ok(Self(s))
        }
    }
}

impl AsRef<str> for TagName {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::TagName;
    use claims::{assert_err, assert_ok};

    #[test]
    fn a_40_grapheme_long_name_is_valid() {
        let name = "ё".repeat(40);
        assert_ok!(TagName::parse(name));
    }

    #[test]
    fn a_name_longer_than_40_graphemes_is_rejected() {
        let name = "a".repeat(41);
        assert_err!(TagName::parse(name));
    }

    #[test]
    fn whitespace_only_names_are_rejected() {
        let name = " ".to_string();
        assert_err!(TagName::parse(name));
    }

    #[test]
    fn empty_string_is_rejected() {
        let name = "".to_string();
        assert_err!(TagName::parse(name));
    }

    #[test]
    fn names_containing_an_invalid_character_are_rejected() {
        for name in &['/', '(', ')', '"', '<', '>', '\\', '{', '}'] {
            let name = name.to_string();
            assert_err!(TagName::parse(name));
        }
    }

    #[test]
    fn a_valid_name_is_parsed_successfully() {
        let name = "Hugo Award".to_string(); // Using a different example name
        assert_ok!(TagName::parse(name));
    }
}
