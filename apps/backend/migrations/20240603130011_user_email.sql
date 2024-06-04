-- Add migration script here
ALTER TABLE users 
ADD COLUMN email TEXT UNIQUE;

UPDATE users SET email = 'default@example.com' WHERE email IS NULL;

ALTER TABLE users 
ALTER COLUMN email SET NOT NULL;
