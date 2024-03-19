-- Add migration script here
CREATE TABLE IF NOT EXISTS tag(
    id uuid PRIMARY KEY,
    name text NOT NULL
);
