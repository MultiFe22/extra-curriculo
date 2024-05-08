-- Add migration script here
CREATE OR REPLACE FUNCTION add_project_tags(p_project_id UUID, p_tag_ids UUID[])
RETURNS VOID AS $$
DECLARE
    current_count INT;
    new_count INT;
    tag_id UUID;  -- Declare the variable used in the FOREACH loop
BEGIN
    -- Count current tags
    SELECT COUNT(*) INTO current_count FROM project_tag WHERE project_id = p_project_id;
    -- Calculate new potential count
    new_count := current_count + array_length(p_tag_ids, 1);

    -- Check if the new count would exceed the limit
    IF new_count > 10 THEN
        RAISE EXCEPTION 'Adding these tags would exceed the limit of 10 tags per project.';
    ELSE
        -- Insert tags if under limit
        FOREACH tag_id IN ARRAY p_tag_ids LOOP
            INSERT INTO project_tag (project_id, tag_id) VALUES (p_project_id, tag_id);
        END LOOP;
    END IF;
END;
$$ LANGUAGE plpgsql;
