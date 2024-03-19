-- Add migration script here
CREATE TABLE IF NOT EXISTS project(
    id uuid PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    picture text, -- Assuming URL or file path for external storage
    banner text, -- Assuming URL or file path for external storage
    is_active boolean NOT NULL,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now(),
    is_recruiting boolean NOT NULL,
    email text NOT NULL,
    modality text NOT NULL,
    address text NOT NULL,
    professor text NOT NULL,
    instagram text,
    facebook text,
    linkedin text,
    twitter text,
    website text
);

