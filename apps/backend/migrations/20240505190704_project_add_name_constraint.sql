-- Add migration script here
ALTER TABLE project
ADD CONSTRAINT project_name_unique UNIQUE (name);
