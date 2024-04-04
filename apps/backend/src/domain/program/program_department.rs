use unicode_segmentation::UnicodeSegmentation;
#[derive(Debug)]
pub struct ProgramDepartment(String);

impl ProgramDepartment {
    /// Returns an instance of `ProgramDepartment` if the input satisfies all
    /// our validation constraints on subscriber names.
    /// It panics otherwise.
    pub fn parse(s: String) -> Result<ProgramDepartment, String> {
        // `.trim()` returns a view over the input `s` without trailing
        // whitespace-like characters.
        // `.is_empty` checks if the view contains any character.
        let is_empty_or_whitespace = s.trim().is_empty();
        // A grapheme is defined by the Unicode standard as a "user-perceived"
        // character: `å` is a single grapheme, but it is composed of two characters // (`a` and `̊`).
        //
        // `graphemes` returns an iterator over the graphemes in the input `s`.
        // `true` specifies that we want to use the extended grapheme definition set, // the recommended one.
        let is_too_long = s.graphemes(true).count() > 50;

        // Iterate over all characters in the input `s` to check if any of them
        // matches one of the characters in the forbidden array.
        let forbidden_characters = [
            '/', '(', ')', '"', '<', '>', '\\', '{', '}', '!', '@', '#', '$', '%', '^', '&', '*',
            '_', '+', '=', '|', '~', '`', ';', ':', '\'', ',', '.', '?', '[', ']', '0', '1', '2',
            '3', '4', '5', '6', '7', '8', '9',
        ];

        let contains_forbidden_characters = s.chars().any(|g| forbidden_characters.contains(&g));
        let starts_or_ends_with_whitespace = s.starts_with(' ') || s.ends_with(' ');
        if is_empty_or_whitespace || is_too_long || contains_forbidden_characters || starts_or_ends_with_whitespace {
            Err(format!("{} is not a valid department name.", s))
        } else {
            Ok(Self(s))
        }
    }
}

impl AsRef<str> for ProgramDepartment {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use crate::domain::ProgramDepartment;
    use claims::{assert_err, assert_ok};
    #[test]
    fn a_50_grapheme_long_name_is_valid() {
        let name = "ё".repeat(50);
        assert_ok!(ProgramDepartment::parse(name));
    }
    #[test]
    fn a_name_longer_than_50_graphemes_is_rejected() {
        let name = "a".repeat(51);
        assert_err!(ProgramDepartment::parse(name));
    }
    #[test]
    fn whitespace_only_names_are_rejected() {
        let name = " ".to_string();
        assert_err!(ProgramDepartment::parse(name));
    }

    #[test]
    fn string_starting_or_ending_with_whitespace_is_rejected() {
        let name = " Ursula Le Guin".to_string();
        let name2 = "Ursula Le Guin ".to_string();
        let name3 = " Ursula Le Guin ".to_string();
        assert_err!(ProgramDepartment::parse(name));
        assert_err!(ProgramDepartment::parse(name2));
        assert_err!(ProgramDepartment::parse(name3));
    }

    #[test]
    fn empty_string_is_rejected() {
        let name = "".to_string();
        assert_err!(ProgramDepartment::parse(name));
    }
    #[test]
    fn names_containing_an_invalid_character_are_rejected() {
        for name in &[
            '"', '<', '>', '\\', '{', '}', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '=',
            '|', '~', '`', ';', '\'', ',', '.', '?', '[', ']', '0', '1', '2', '3', '4', '5', '6',
            '7', '8', '9',
        ] {
            let name = name.to_string();
            assert_err!(ProgramDepartment::parse(name));
        }
    }
    #[test]
    fn a_valid_name_is_parsed_successfully() {
        let name = "Ursula Le Guin".to_string();
        assert_ok!(ProgramDepartment::parse(name));
    }
}
