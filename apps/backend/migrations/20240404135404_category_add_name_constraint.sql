-- Add migration script here
ALTER TABLE category
ADD CONSTRAINT category_name_unique UNIQUE (name);
