-- Add migration script here
ALTER TABLE users
ADD COLUMN is_active boolean NOT NULL DEFAULT TRUE, -- careful with this default value
ADD COLUMN profile_pic text,
ADD COLUMN created_at timestamp NOT NULL DEFAULT now(),
ADD COLUMN updated_at timestamp NOT NULL DEFAULT now();
