-- Add migration script here
-- Step 1: Create the category table
CREATE TABLE IF NOT EXISTS category(
    id uuid PRIMARY KEY,
    name text NOT NULL
);

-- Step 2: Add category_id to the project table and define the foreign key constraint
ALTER TABLE project
ADD COLUMN category_id uuid,
ADD CONSTRAINT fk_project_category
FOREIGN KEY (category_id) REFERENCES category(id);
