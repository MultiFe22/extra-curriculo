use chrono::{NaiveDateTime, ParseError};

#[derive(Debug, Clone)]
pub struct ProjectTimestamp(NaiveDateTime);

impl ProjectTimestamp {
    /// Parses a timestamp string into a `ProjectTimestamp`.
    /// The input should be in "YYYY-MM-DD HH:MM:SS" format, matching PostgreSQL's
    /// "timestamp without time zone" format.
    pub fn parse(s: &str) -> Result<Self, ParseError> {
        let format = "%Y-%m-%d %H:%M:%S";
        let datetime = NaiveDateTime::parse_from_str(s, format)?;
        Ok(ProjectTimestamp(datetime))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parse_valid_timestamp() {
        let valid_timestamp_str = "2023-03-15 12:34:56";
        let result = ProjectTimestamp::parse(valid_timestamp_str);
        assert!(result.is_ok());

        // Optionally, verify the parsed datetime matches the expected value
        let expected_datetime =
            NaiveDateTime::parse_from_str(valid_timestamp_str, "%Y-%m-%d %H:%M:%S").unwrap();
        assert_eq!(result.unwrap().0, expected_datetime);
    }

    #[test]
    fn parse_invalid_timestamp_format() {
        let invalid_format_str = "15-03-2023 12:34:56"; // Day-Month-Year format
        let result = ProjectTimestamp::parse(invalid_format_str);
        assert!(result.is_err());
    }

    #[test]
    fn parse_invalid_date() {
        let invalid_date_str = "2023-02-30 12:34:56"; // February 30th is an invalid date
        let result = ProjectTimestamp::parse(invalid_date_str);
        assert!(result.is_err());
    }

    #[test]
    fn parse_invalid_time() {
        let invalid_time_str = "2023-03-15 25:00:00"; // 25:00:00 is an invalid time
        let result = ProjectTimestamp::parse(invalid_time_str);
        assert!(result.is_err());
    }

    #[test]
    fn parse_numeric_input() {
        let numeric_str = "1234567890"; // Just a number, not a valid timestamp format
        let result = ProjectTimestamp::parse(numeric_str);
        assert!(result.is_err());
    }

    #[test]
    fn parse_random_text_input() {
        let random_text_str = "random text here"; // Random text, not a valid timestamp format
        let result = ProjectTimestamp::parse(random_text_str);
        assert!(result.is_err());
    }

    #[test]
    fn parse_partial_timestamp() {
        let partial_timestamp_str = "2023-03-15"; // Only date part, missing time part
        let result = ProjectTimestamp::parse(partial_timestamp_str);
        assert!(result.is_err());
    }

    #[test]
    fn parse_timestamp_with_extra_characters() {
        let extra_chars_timestamp_str = "2023-03-15 12:34:56 extra"; // Valid timestamp followed by extra text
        let result = ProjectTimestamp::parse(extra_chars_timestamp_str);
        assert!(result.is_err());
    }
}
