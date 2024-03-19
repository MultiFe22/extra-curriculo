-- Add migration script here
CREATE TABLE IF NOT EXISTS user_tag(
    user_id uuid NOT NULL,
    tag_id uuid NOT NULL,
    PRIMARY KEY (user_id, tag_id),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_tag
        FOREIGN KEY (tag_id)
        REFERENCES tag(id)
        ON DELETE CASCADE
);
