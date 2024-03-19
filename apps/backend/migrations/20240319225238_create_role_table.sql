-- Add migration script here
CREATE TABLE IF NOT EXISTS role(
    id uuid PRIMARY KEY,
    name text NOT NULL,
    level smallint NOT NULL
);
