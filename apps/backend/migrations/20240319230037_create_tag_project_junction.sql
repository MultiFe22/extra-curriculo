-- Add migration script here
CREATE TABLE IF NOT EXISTS project_tag(
    project_id uuid NOT NULL,
    tag_id uuid NOT NULL,
    PRIMARY KEY (project_id, tag_id),
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_tag
        FOREIGN KEY (tag_id)
        REFERENCES tag(id)
        ON DELETE CASCADE
);
