-- Add migration script here
CREATE TABLE IF NOT EXISTS user_project_role(
    user_id uuid NOT NULL,
    project_id uuid NOT NULL,
    role_id uuid NOT NULL,
    PRIMARY KEY (user_id, project_id, role_id),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_role
        FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE
);
