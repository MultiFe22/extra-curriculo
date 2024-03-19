-- Add migration script here
CREATE TABLE IF NOT EXISTS program(
    id uuid PRIMARY KEY,
    name text NOT NULL,
    department text NOT NULL,
    institute text NOT NULL,
    college text NOT NULL,
    campus text NOT NULL
);
