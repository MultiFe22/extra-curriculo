use uuid::Uuid;

use crate::helpers::spawn_app;

#[tokio::test]
async fn post_tag_returns_a_201_for_valid_json_data() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({
        "name": "Computer Science",
    });

    let response = app.post_tag(new_tag).await;

    assert_eq!(response.status().as_u16(), 201);
}

#[tokio::test]
async fn post_tag_persists_tag_in_database() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({
        "name": "Computer Science",
    });

    app.post_tag(new_tag).await;

    let saved = sqlx::query!("SELECT * FROM tag")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved tag");

    assert_eq!(saved.name, "Computer Science");
}

#[tokio::test]
async fn post_tag_returns_a_400_for_invalid_json_data() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({
        "name": "",
    });

    let response = app.post_tag(new_tag).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_tag_returns_a_400_when_data_is_missing() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({});

    let response = app.post_tag(new_tag).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_tag_fails_if_there_is_a_fatal_database_error() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({
        "name": "Computer Science",
    });

    let mut connection = app.db_pool.acquire().await.unwrap();
    sqlx::query!("ALTER TABLE tag DROP COLUMN name")
        .execute(&mut connection)
        .await
        .unwrap();

    let response = app.post_tag(new_tag).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_tag_returns_a_200_for_valid_id() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({
        "name": "Computer Science",
    });

    let response = app.post_tag(new_tag).await;

    let tag_id = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let response = app.get_tag(tag_id).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn get_tag_returns_a_404_for_invalid_id() {
    let app = spawn_app().await;

    let response = app.get_tag(Uuid::new_v4()).await;

    assert_eq!(response.status().as_u16(), 404);
}

#[tokio::test]
async fn get_tag_fails_if_there_is_a_fatal_database_error() {
    let app = spawn_app().await;

    let new_tag = serde_json::json!({
        "name": "Computer Science",
    });

    let response = app.post_tag(new_tag).await;

    let tag_id = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let mut connection = app.db_pool.acquire().await.unwrap();
    sqlx::query!("ALTER TABLE tag DROP COLUMN name")
        .execute(&mut connection)
        .await
        .unwrap();

    let response = app.get_tag(tag_id).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_all_tags_returns_a_200_and_a_list_of_tags() {
    let app = spawn_app().await;

    // Optionally, insert a tag to ensure the list is not empty
    let new_tag = serde_json::json!({
        "name": "Computer Science"
    });

    app.post_tag(new_tag).await;

    // Fetching all tags
    let response = app.get_all_tags().await;

    assert_eq!(response.status().as_u16(), 200);

    // Optionally, verify the structure of the response or the presence of the inserted tag
    let tags: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert!(
        !tags.is_empty(),
        "Expected at least one tag in the response"
    );
}

#[tokio::test]
async fn get_all_tags_returns_a_200_and_correct_tag_details() {
    let app = spawn_app().await;

    // Define two tags with distinct names
    let tag_names = vec!["tag Alpha", "tag Beta"];
    let base_tag = serde_json::json!({});

    // Post the two tags
    for name in &tag_names {
        let mut tag = base_tag.clone();
        tag["name"] = serde_json::Value::from(*name);
        app.post_tag(tag).await;
    }

    // Fetching all tags
    let response = app.get_all_tags().await;
    assert_eq!(response.status().as_u16(), 200);

    // Parse response and verify size
    let tags: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert_eq!(tags.len(), 2, "Expected exactly two tags in the response");

    // Verify that the tags in the response have the correct names
    let mut tag_names_from_response: Vec<String> = tags
        .iter()
        .map(|p| p["name"].as_str().unwrap().to_string())
        .collect();
    tag_names_from_response.sort_unstable();
    let mut tag_names_expected: Vec<&str> = tag_names.iter().cloned().collect();
    tag_names_expected.sort_unstable();

    assert_eq!(
        tag_names_from_response, tag_names_expected,
        "The tag names in the response do not match the expected names"
    );
}

#[tokio::test]
async fn get_all_tags_returns_a_404_when_no_tags_exist() {
    let app = spawn_app().await;

    // Attempt to fetch all tags when none have been created
    let response = app.get_all_tags().await;

    // Assert that the response status is `404 Not Found`
    assert_eq!(
        response.status().as_u16(),
        404,
        "Expected a 404 status for no tags available"
    );
}

#[tokio::test]
async fn get_all_tags_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;

    // Sabotage the database
    sqlx::query!("ALTER TABLE tag DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // Act
    let response = app.get_all_tags().await;

    // Assert
    assert_eq!(response.status().as_u16(), 500);
}
