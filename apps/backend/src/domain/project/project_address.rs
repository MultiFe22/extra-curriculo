use unicode_segmentation::UnicodeSegmentation;

#[derive(Debug)]
pub struct ProjectAddress(String);

impl ProjectAddress {
    /// Parses a given string into a `ProjectAddress` if it meets the validation constraints.
    ///
    /// Constraints:
    /// - The address must not be less than 5 graphemes in length.
    ///
    /// Returns an `Ok(ProjectAddress)` if the input is valid, or an `Err` with a message otherwise.
    pub fn parse(s: String) -> Result<ProjectAddress, String> {
        let grapheme_count = s.graphemes(true).count();
        let starts_or_ends_with_whitespace = s.starts_with(' ') || s.ends_with(' ');
        if grapheme_count < 5 || starts_or_ends_with_whitespace {
            Err(format!("{} is not a valid project address.", s))
        } else {
            Ok(Self(s))
        }
    }
}

impl std::fmt::Display for ProjectAddress {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<str> for ProjectAddress {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use claims::assert_err;
    use fake::faker::address::en::SecondaryAddress;
    use fake::Fake;

    #[derive(Debug, Clone)]
    struct ValidAddressFixture(String);

    impl quickcheck::Arbitrary for ValidAddressFixture {
        fn arbitrary<G: quickcheck::Gen>(g: &mut G) -> Self {
            let address = SecondaryAddress().fake_with_rng(g);
            Self(address)
        }
    }

    #[quickcheck_macros::quickcheck]
    fn valid_addresses_are_parsed_successfully(valid_address: ValidAddressFixture) -> bool {
        ProjectAddress::parse(valid_address.0).is_ok()
    }

    #[test]
    fn parse_short_address_is_rejected() {
        let address = "123".to_string(); // Shorter than 5 graphemes
        assert!(ProjectAddress::parse(address).is_err());
    }

    #[test]
    fn string_starting_or_ending_with_whitespace_is_rejected() {
        let name = " Avenue".to_string();
        let name2 = "Avenue ".to_string();
        let name3 = " Avenue ".to_string();
        assert_err!(ProjectAddress::parse(name));
        assert_err!(ProjectAddress::parse(name2));
        assert_err!(ProjectAddress::parse(name3));
    }

    #[test]
    fn parse_valid_address_is_accepted() {
        let address = "12345".to_string(); // Exactly 5 characters, simple case
        assert!(ProjectAddress::parse(address).is_ok());
    }

    // Review if this affects business logic
    #[test]
    fn parse_valid_complex_address_is_accepted() {
        let address = "🏠📬🌍🎉😊".to_string(); // Complex graphemes, but still 5
        assert!(ProjectAddress::parse(address).is_ok());
    }
}
