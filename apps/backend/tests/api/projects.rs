use uuid::Uuid;

use crate::helpers::spawn_app;

#[tokio::test]
async fn post_project_returns_a_200_for_valid_json_data() {
    let app = spawn_app().await;

    let new_project = serde_json::json!({
        "name": "Environmental Sustainability Project",
        "description": "This project aims to develop sustainable business practices to reduce environmental impact.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "sustainability@example.com",
        "modality": "Hybrid",
        "address": "123 Eco Way, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "testing",
        "facebook": "https://facebook.com/environment_project",
        "linkedin": "https://linkedin.com/company/environment_project",
        "twitter": "@testing",
        "website": "https://www.environmentproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.post_project(new_project).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn post_project_persists_project_in_database() {
    let app = spawn_app().await;

    let new_project = serde_json::json!({
        "name": "Environmental Sustainability Project",
        "description": "This project aims to develop sustainable business practices to reduce environmental impact.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "sustainability@example.com",
        "modality": "Hybrid",
        "address": "123 Eco Way, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "testing",
        "facebook": "https://facebook.com/environment_project",
        "linkedin": "https://linkedin.com/company/environment_project",
        "twitter": "@testing",
        "website": "https://www.environmentproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    app.post_project(new_project).await;

    let saved = sqlx::query!("SELECT * FROM project")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved project");

    assert_eq!(saved.name, "Environmental Sustainability Project");
    assert_eq!(saved.description, "This project aims to develop sustainable business practices to reduce environmental impact.");
    assert_eq!(
        saved.picture.unwrap_or("".to_string()),
        "https://example.com/images/project-picture.jpg"
    );
    assert_eq!(
        saved.banner.unwrap_or("".to_string()),
        "https://example.com/images/project-banner.jpg"
    );
    assert_eq!(saved.is_recruiting, true);
    assert_eq!(saved.email, "sustainability@example.com");
    assert_eq!(saved.modality, "Hybrid");
    assert_eq!(saved.address, "123 Eco Way, Green City, Earth");
    assert_eq!(saved.professor, "Dr. Greenleaf");
    assert_eq!(saved.instagram.unwrap_or("".to_string()), "testing");
    assert_eq!(
        saved.facebook.unwrap_or("".to_string()),
        "https://facebook.com/environment_project"
    );
    assert_eq!(
        saved.linkedin.unwrap_or("".to_string()),
        "https://linkedin.com/company/environment_project"
    );
    assert_eq!(saved.twitter.unwrap_or("".to_string()), "@testing");
    assert_eq!(
        saved.website.unwrap_or("".to_string()),
        "https://www.environmentproject.com"
    );
    assert_eq!(
        saved.category_id,
        Uuid::parse_str("90cb0d68-9a9d-4526-ab74-9b686d50a4e2").unwrap()
    );
}

#[tokio::test]
async fn post_project_returns_a_400_for_invalid_json_data() {
    let app = spawn_app().await;

    let new_project = serde_json::json!({
        "name": "Environmental Sustainability Project",
        "description": "This project aims to develop sustainable business practices to reduce environmental impact.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "", // invalid email
        "modality": "Hybrid",
        "address": "123 Eco Way, Green City, Earth",
    });

    let response = app.post_project(new_project).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_project_returns_a_400_when_fields_are_present_but_invalid() {
    let app = spawn_app().await;

    let new_project = serde_json::json!({
        "name": "Environmental Sustainability Project",
        "description": "This project aims to develop sustainable business practices to reduce environmental impact.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "le.com", // invalid
        "modality": "Hybrid",
        "address": "123 Eco Way, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "testing",
        "facebook": "https://test.com/environment_project", //invalid
        "linkedin": "https://linkedin.com/company/environment_project",
        "twitter": "testing", // invalid
        "website": "https://www.environmentproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.post_project(new_project).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn post_project_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;
    // Sabotage the database
    sqlx::query!("ALTER TABLE project DROP COLUMN email;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let new_project = serde_json::json!({
        "name": "Environmental Sustainability Project",
        "description": "This project aims to develop sustainable business practices to reduce environmental impact.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "sustainability@example.com",
        "modality": "Hybrid",
        "address": "123 Eco Way, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "testing",
        "facebook": "https://facebook.com/environment_project",
        "linkedin": "https://linkedin.com/company/environment_project",
        "twitter": "@testing",
        "website": "https://www.environmentproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    // Act
    let response = app.post_project(new_project).await;

    // Assert
    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_project_returns_a_200_for_valid_uuid() {
    let app = spawn_app().await;

    let new_project = serde_json::json!({
        "name": "Environmental Sustainability Project",
        "description": "This project aims to develop sustainable business practices to reduce environmental impact.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "sustainability@example.com",
        "modality": "Hybrid",
        "address": "123 Eco Way, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "testing",
        "facebook": "https://facebook.com/environment_project",
        "linkedin": "https://linkedin.com/company/environment_project",
        "twitter": "@testing",
        "website": "https://www.environmentproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response: reqwest::Response = app.post_project(new_project).await;
    let project_id: Uuid = response.json().await.expect("Failed to parse the response body");

    let response = app.get_project(project_id).await;

    assert_eq!(response.status().as_u16(), 200);
    
}

#[tokio::test]
async fn get_project_returns_a_404_for_invalid_uuid() {
    let app = spawn_app().await;

    let response = app.get_project(Uuid::new_v4()).await;

    assert_eq!(response.status().as_u16(), 404);
}