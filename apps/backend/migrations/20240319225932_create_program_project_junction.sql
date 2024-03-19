-- Add migration script here
CREATE TABLE IF NOT EXISTS program_project(
    program_id uuid NOT NULL,
    project_id uuid NOT NULL,
    PRIMARY KEY (program_id, project_id),
    CONSTRAINT fk_program
        FOREIGN KEY (program_id) 
        REFERENCES program(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id) 
        REFERENCES project(id)
        ON DELETE CASCADE
);
