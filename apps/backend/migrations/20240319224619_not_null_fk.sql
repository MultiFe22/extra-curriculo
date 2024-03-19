-- Add migration script here
-- Ensure all existing projects have a valid category_id before running this
ALTER TABLE project
ALTER COLUMN category_id SET NOT NULL;
