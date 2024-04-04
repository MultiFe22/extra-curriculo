-- Add migration script here
ALTER TABLE tag
ADD CONSTRAINT tag_name_unique UNIQUE (name);
