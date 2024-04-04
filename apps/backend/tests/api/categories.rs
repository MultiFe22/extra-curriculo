use uuid::Uuid;

use crate::helpers::spawn_app;

#[tokio::test]
async fn post_category_returns_a_201_for_valid_json_data() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({
        "name": "Computer Science",
    });

    let response = app.post_category(new_category).await;

    assert_eq!(response.status().as_u16(), 201);
}

#[tokio::test]
async fn post_category_persists_category_in_database() {
    let app = spawn_app().await;

    sqlx::query!("DELETE FROM category")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let new_category = serde_json::json!({
        "name": "Computer Science",
    });

    app.post_category(new_category).await;

    let saved = sqlx::query!("SELECT * FROM category")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved category");

    assert_eq!(saved.name, "Computer Science");
}

#[tokio::test]
async fn post_category_returns_a_400_for_invalid_json_data() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({
        "name": "",
    });

    let response = app.post_category(new_category).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_category_returns_a_400_when_data_is_missing() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({});

    let response = app.post_category(new_category).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_category_fails_if_inserting_duplicate_category() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({
        "name": "Computer Science",
    });

    app.post_category(new_category.clone()).await;

    let response = app.post_category(new_category).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn post_category_fails_if_there_is_a_fatal_database_error() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({
        "name": "Computer Science",
    });

    let mut connection = app.db_pool.acquire().await.unwrap();
    sqlx::query!("ALTER TABLE category DROP COLUMN name")
        .execute(&mut connection)
        .await
        .unwrap();

    let response = app.post_category(new_category).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_category_returns_a_200_for_valid_id() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({
        "name": "Computer Science",
    });

    let response = app.post_category(new_category).await;

    let category_id = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let response = app.get_category(category_id).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn get_category_returns_a_404_for_invalid_id() {
    let app = spawn_app().await;

    let response = app.get_category(Uuid::new_v4()).await;

    assert_eq!(response.status().as_u16(), 404);
}

#[tokio::test]
async fn get_category_fails_if_there_is_a_fatal_database_error() {
    let app = spawn_app().await;

    let new_category = serde_json::json!({
        "name": "Computer Science",
    });

    let response = app.post_category(new_category).await;

    let category_id = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let mut connection = app.db_pool.acquire().await.unwrap();
    sqlx::query!("ALTER TABLE category DROP COLUMN name")
        .execute(&mut connection)
        .await
        .unwrap();

    let response = app.get_category(category_id).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_all_categories_returns_a_200_and_a_list_of_categories() {
    let app = spawn_app().await;

    // Optionally, insert a category to ensure the list is not empty
    let new_category = serde_json::json!({
        "name": "Computer Science"
    });

    app.post_category(new_category).await;

    // Fetching all categories
    let response = app.get_all_categories().await;

    assert_eq!(response.status().as_u16(), 200);

    // Optionally, verify the structure of the response or the presence of the inserted category
    let categories: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert!(
        !categories.is_empty(),
        "Expected at least one category in the response"
    );
}

#[tokio::test]
async fn get_all_categories_returns_a_200_and_correct_category_details() {
    let app = spawn_app().await;

    sqlx::query!("DELETE FROM category")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // Define two categories with distinct names
    let category_names = vec!["category Alpha", "category Beta"];
    let base_category = serde_json::json!({});

    // Post the two categories
    for name in &category_names {
        let mut category = base_category.clone();
        category["name"] = serde_json::Value::from(*name);
        app.post_category(category).await;
    }

    // Fetching all categories
    let response = app.get_all_categories().await;
    assert_eq!(response.status().as_u16(), 200);

    // Parse response and verify size
    let categories: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert_eq!(
        categories.len(),
        2,
        "Expected exactly two categories in the response"
    );

    // Verify that the categories in the response have the correct names
    let mut category_names_from_response: Vec<String> = categories
        .iter()
        .map(|p| p["name"].as_str().unwrap().to_string())
        .collect();
    category_names_from_response.sort_unstable();
    let mut category_names_expected: Vec<&str> = category_names.iter().cloned().collect();
    category_names_expected.sort_unstable();

    assert_eq!(
        category_names_from_response, category_names_expected,
        "The category names in the response do not match the expected names"
    );
}

#[tokio::test]
async fn get_all_categories_returns_a_404_when_no_categories_exist() {
    let app = spawn_app().await;

    // Optionally, clear all categories to ensure the list is empty
    sqlx::query!("DELETE FROM category")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // Attempt to fetch all categories when none have been created
    let response = app.get_all_categories().await;

    // Assert that the response status is `404 Not Found`
    assert_eq!(
        response.status().as_u16(),
        404,
        "Expected a 404 status for no categories available"
    );
}

#[tokio::test]
async fn get_all_categories_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;

    // Sabotage the database
    sqlx::query!("ALTER TABLE category DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // Act
    let response = app.get_all_categories().await;

    // Assert
    assert_eq!(response.status().as_u16(), 500);
}
