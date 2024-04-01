use uuid::Uuid;

use crate::helpers::spawn_app;

#[tokio::test]
async fn post_program_returns_a_200_for_valid_json_data() {
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "name": "Computer Science",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    let response = app.post_program(new_program).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn post_program_persists_program_in_database() {
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "name": "Computer Science",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    app.post_program(new_program).await;

    let saved = sqlx::query!("SELECT * FROM program")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved program");

    assert_eq!(saved.name, "Computer Science");
    assert_eq!(saved.institute, "Institute of Computing");
    assert_eq!(saved.department, "Computer Science");
    assert_eq!(saved.campus, "Main Campus");
    assert_eq!(saved.college, "UFRJ");
}

#[tokio::test]
async fn post_program_returns_a_400_for_invalid_json_data() {
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "name": "",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    let response = app.post_program(new_program).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_program_returns_a_400_for_invalid_json_structure() {
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    let response = app.post_program(new_program).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_program_returns_a_400_when_fields_are_present_but_invalid() {
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "name": "@@@@@@@",
        "institute": "Institute of Computing*",
        "department": "Comp#uter Science",
        "campus": "Main Cam#pus",
        "college": "UFR21J",
    });

    let response = app.post_program(new_program).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_program_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;
    // Sabotage the database
    sqlx::query!("ALTER TABLE program DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let new_program = serde_json::json!({
        "name": "Computer Science",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    // Act
    let response = app.post_program(new_program).await;

    // Assert
    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_program_returns_a_200_for_valid_uuid() {
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "name": "Computer Science",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    let response: reqwest::Response = app.post_program(new_program).await;
    let program_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let response = app.get_program(program_id).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn get_program_returns_a_404_for_invalid_uuid() {
    let app = spawn_app().await;

    let response = app.get_program(Uuid::new_v4()).await;

    assert_eq!(response.status().as_u16(), 404);
}

#[tokio::test]
async fn get_program_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;

    let new_program = serde_json::json!({
        "name": "Computer Science",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    let response: reqwest::Response = app.post_program(new_program).await;

    assert!(response.status().is_success());

    // Sabotage the database
    sqlx::query!("ALTER TABLE program DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let program_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");
    // Act
    let response = app.get_program(program_id).await;
    // Assert
    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_all_programs_returns_a_200_and_a_list_of_programs() {
    let app = spawn_app().await;

    // Optionally, insert a program to ensure the list is not empty
    let new_program = serde_json::json!({
        "name": "Computer Science",
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    app.post_program(new_program).await;

    // Fetching all programs
    let response = app.get_all_programs().await;

    assert_eq!(response.status().as_u16(), 200);

    // Optionally, verify the structure of the response or the presence of the inserted program
    let programs: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert!(
        !programs.is_empty(),
        "Expected at least one program in the response"
    );
}

#[tokio::test]
async fn get_all_programs_returns_a_200_and_correct_program_details() {
    let app = spawn_app().await;

    // Define two programs with distinct names
    let program_names = vec!["program Alpha", "program Beta"];
    let base_program = serde_json::json!({
        "institute": "Institute of Computing",
        "department": "Computer Science",
        "campus": "Main Campus",
        "college": "UFRJ",
    });

    // Post the two programs
    for name in &program_names {
        let mut program = base_program.clone();
        program["name"] = serde_json::Value::from(*name);
        app.post_program(program).await;
    }

    // Fetching all programs
    let response = app.get_all_programs().await;
    assert_eq!(response.status().as_u16(), 200);

    // Parse response and verify size
    let programs: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert_eq!(
        programs.len(),
        2,
        "Expected exactly two programs in the response"
    );

    // Verify that the programs in the response have the correct names
    let mut program_names_from_response: Vec<String> = programs
        .iter()
        .map(|p| p["name"].as_str().unwrap().to_string())
        .collect();
    program_names_from_response.sort_unstable();
    let mut program_names_expected: Vec<&str> = program_names.iter().cloned().collect();
    program_names_expected.sort_unstable();

    assert_eq!(
        program_names_from_response, program_names_expected,
        "The program names in the response do not match the expected names"
    );
}

#[tokio::test]
async fn get_all_programs_returns_a_404_when_no_programs_exist() {
    let app = spawn_app().await;

    // Attempt to fetch all programs when none have been created
    let response = app.get_all_programs().await;

    // Assert that the response status is `404 Not Found`
    assert_eq!(
        response.status().as_u16(),
        404,
        "Expected a 404 status for no programs available"
    );

    // Optionally, verify the response body is empty
    let body = response.text().await.expect("Failed to read response body");
    assert!(
        body.is_empty(),
        "Expected an empty response body for no programs available"
    );
}

#[tokio::test]
async fn get_all_programs_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;

    // Sabotage the database
    sqlx::query!("ALTER TABLE program DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // Act
    let response = app.get_all_programs().await;

    // Assert
    assert_eq!(response.status().as_u16(), 500);
}