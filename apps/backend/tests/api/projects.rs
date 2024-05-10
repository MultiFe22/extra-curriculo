use std::collections::HashSet;

use uuid::Uuid;

use crate::helpers::spawn_app;

#[tokio::test]
async fn post_project_returns_a_201_for_valid_json_data() {
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

    assert_eq!(response.status().as_u16(), 201);
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
async fn post_project_fails_if_inserting_duplicate_project() {
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

    app.post_project(new_project.clone()).await;

    let response = app.post_project(new_project).await;

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
    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let response = app.get_project(project_id).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn get_project_returns_a_200_and_correct_fields_for_valid_uuid() {
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

    let response: reqwest::Response = app.post_project(new_project.clone()).await;
    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let response = app.get_project(project_id).await;

    assert_eq!(response.status().as_u16(), 200);

    let returned_project: serde_json::Value = response
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(returned_project["name"], new_project["name"]);
    assert_eq!(returned_project["description"], new_project["description"]);
    assert_eq!(returned_project["picture"], new_project["picture"]);
    assert_eq!(returned_project["banner"], new_project["banner"]);
    assert_eq!(
        returned_project["is_recruiting"],
        new_project["is_recruiting"]
    );
    assert_eq!(returned_project["email"], new_project["email"]);
    assert_eq!(returned_project["modality"], new_project["modality"]);
    assert_eq!(returned_project["address"], new_project["address"]);
    assert_eq!(returned_project["professor"], new_project["professor"]);
    assert_eq!(returned_project["instagram"], new_project["instagram"]);
    assert_eq!(returned_project["facebook"], new_project["facebook"]);
    assert_eq!(returned_project["linkedin"], new_project["linkedin"]);
    assert_eq!(returned_project["twitter"], new_project["twitter"]);
    assert_eq!(returned_project["website"], new_project["website"]);
    assert_eq!(returned_project["category_id"], new_project["category_id"]);
    assert_eq!(
        returned_project["tags"],
        serde_json::json!([]),
        "The project tags should be an empty array"
    );
}

#[tokio::test]
async fn get_project_returns_a_404_for_invalid_uuid() {
    let app = spawn_app().await;

    let response = app.get_project(Uuid::new_v4()).await;

    assert_eq!(response.status().as_u16(), 404);
}

#[tokio::test]
async fn get_project_fails_if_there_is_a_fatal_database_error() {
    // Arrange
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

    assert!(response.status().is_success());

    // Sabotage the database
    sqlx::query!("ALTER TABLE project DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");
    // Act
    let response = app.get_project(project_id).await;
    // Assert
    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn get_all_projects_returns_a_200_and_a_list_of_projects() {
    let app = spawn_app().await;

    // Optionally, insert a project to ensure the list is not empty
    let new_project = serde_json::json!({
        "name": "Global Health Initiative",
        "description": "A project aimed at improving global health outcomes through innovation.",
        "picture": "https://example.com/images/health-project-picture.jpg",
        "banner": "https://example.com/images/health-project-banner.jpg",
        "is_recruiting": true,
        "email": "health@example.com",
        "modality": "Remote",
        "address": "456 Health Blvd, Wellness City, Earth",
        "professor": "Dr. Healwell",
        "instagram": "health_initiative",
        "facebook": "https://facebook.com/global_health_initiative",
        "linkedin": "https://linkedin.com/company/global_health_initiative",
        "twitter": "@healthforall",
        "website": "https://www.globalhealthinitiative.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    app.post_project(new_project).await;

    // Fetching all projects
    let response = app.get_all_projects().await;

    assert_eq!(response.status().as_u16(), 200);

    // Optionally, verify the structure of the response or the presence of the inserted project
    let projects: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert!(
        !projects.is_empty(),
        "Expected at least one project in the response"
    );
}

#[tokio::test]
async fn get_all_projects_returns_a_200_and_correct_project_details() {
    let app = spawn_app().await;

    // Define two projects with distinct names
    let project_names = vec!["Project Alpha", "Project Beta"];
    let base_project = serde_json::json!({
        "description": "A project aimed at testing the get all projects endpoint.",
        "picture": "https://example.com/images/project-picture.jpg",
        "banner": "https://example.com/images/project-banner.jpg",
        "is_recruiting": true,
        "email": "project@example.com",
        "modality": "Remote",
        "address": "123 Project St, Test City, Earth",
        "professor": "Dr. Test",
        "instagram": "test_project",
        "facebook": "https://facebook.com/test_project",
        "linkedin": "https://linkedin.com/company/test_project",
        "twitter": "@testproject",
        "website": "https://www.testproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    // Post the two projects
    for name in &project_names {
        let mut project = base_project.clone();
        project["name"] = serde_json::Value::from(*name);
        app.post_project(project).await;
    }

    // Fetching all projects
    let response = app.get_all_projects().await;
    assert_eq!(response.status().as_u16(), 200);

    // Parse response and verify size
    let projects: Vec<serde_json::Value> = response
        .json()
        .await
        .expect("Failed to parse the response body");
    assert_eq!(
        projects.len(),
        2,
        "Expected exactly two projects in the response"
    );

    // Verify that the projects in the response have the correct names
    let mut project_names_from_response: Vec<String> = projects
        .iter()
        .map(|p| p["name"].as_str().unwrap().to_string())
        .collect();
    project_names_from_response.sort_unstable();
    let mut project_names_expected: Vec<&str> = project_names.iter().cloned().collect();
    project_names_expected.sort_unstable();

    // check if the project "tags" are an empty array
    for project in projects {
        assert_eq!(
            project["tags"],
            serde_json::json!([]),
            "The project tags should be an empty array"
        );
    }

    assert_eq!(
        project_names_from_response, project_names_expected,
        "The project names in the response do not match the expected names"
    );
}

#[tokio::test]
async fn get_all_projects_returns_a_404_when_no_projects_exist() {
    let app = spawn_app().await;

    // Attempt to fetch all projects when none have been created
    let response = app.get_all_projects().await;

    // Assert that the response status is `404 Not Found`
    assert_eq!(
        response.status().as_u16(),
        404,
        "Expected a 404 status for no projects available"
    );
}

#[tokio::test]
async fn get_all_projects_fails_if_there_is_a_fatal_database_error() {
    // Arrange
    let app = spawn_app().await;

    // Sabotage the database
    sqlx::query!("ALTER TABLE project DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // Act
    let response = app.get_all_projects().await;

    // Assert
    assert_eq!(response.status().as_u16(), 500);
}
#[tokio::test]
async fn put_project_updates_project_with_valid_data() {
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let updated_data = serde_json::json!({
        "name": "Updated Project Name",
        "description": "Updated project description! Respecing the specs.",
        "picture": "https://example.com/images/updated-picture.jpg",
        "banner": "https://example.com/images/updated-banner.jpg",
        "is_recruiting": false,
        "email": "sustainability@example.com",
        "modality": "In-person",
        "address": "456 Updated St, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "updated",
        "facebook": "https://facebook.com/updated_project",
        "linkedin": "https://linkedin.com/company/updated_project",
        "twitter": "@updated",
        "website": "https://www.updatedproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.put_project(project_id, updated_data).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn put_project_returns_a_400_for_invalid_data() {
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let invalid_data = serde_json::json!({
        "name": "Updated Project Name",
        "description": "Updated project description",
        "picture": "https://example/images/updated-picture.jpg",
        "banner": "https://example",
        "is_recruiting": false,
        "email": "not an email",
        "modality": "In-person",
        "address": "456 Updated St, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "updated",
        "facebook": "https://facebook.com/updated_project",
        "linkedin": "https://linkedin.com/company/updated_project",
        "twitter": "@updated",
        "website": "https://www.updatedproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.put_project(project_id, invalid_data).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn put_project_returns_a_404_for_nonexistent_project() {
    let app = spawn_app().await;
    let nonexistent_project_id = Uuid::new_v4();

    let valid_data = serde_json::json!({
        "name": "Updated Project Name",
        "description": "Updated project description! Respecing the specs.",
        "picture": "https://example.com/images/updated-picture.jpg",
        "banner": "https://example.com/images/updated-banner.jpg",
        "is_recruiting": false,
        "email": "sustainability@example.com",
        "modality": "In-person",
        "address": "456 Updated St, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "updated",
        "facebook": "https://facebook.com/updated_project",
        "linkedin": "https://linkedin.com/company/updated_project",
        "twitter": "@updated",
        "website": "https://www.updatedproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.put_project(nonexistent_project_id, valid_data).await;

    assert_eq!(response.status().as_u16(), 404);
}

#[tokio::test]
async fn put_project_persists_changes_in_database() {
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    let updated_data = serde_json::json!({
        "name": "Updated Project Name",
        "description": "Updated project description! Respecing the specs.",
        "picture": "https://example.com/images/updated-picture.jpg",
        "banner": "https://example.com/images/updated-banner.jpg",
        "is_recruiting": false,
        "email": "sustainability@example.com",
        "modality": "In-person",
        "address": "456 Updated St, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "updated",
        "facebook": "https://facebook.com/updated_project",
        "linkedin": "https://linkedin.com/company/updated_project",
        "twitter": "@updated",
        "website": "https://www.updatedproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.put_project(project_id, updated_data).await;

    assert_eq!(response.status().as_u16(), 200);

    let updated_project = sqlx::query!("SELECT * FROM project WHERE id = $1", project_id)
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch updated project");

    assert_eq!(updated_project.name, "Updated Project Name");
    assert_eq!(
        updated_project.description,
        "Updated project description! Respecing the specs."
    );
    assert_eq!(
        updated_project.picture.unwrap_or("".to_string()),
        "https://example.com/images/updated-picture.jpg"
    );
    assert_eq!(
        updated_project.banner.unwrap_or("".to_string()),
        "https://example.com/images/updated-banner.jpg"
    );
    assert_eq!(updated_project.is_recruiting, false);
    assert_eq!(updated_project.email, "sustainability@example.com");
    assert_eq!(updated_project.modality, "In-person");
    assert_eq!(updated_project.address, "456 Updated St, Green City, Earth");
    assert_eq!(updated_project.professor, "Dr. Greenleaf");
    assert_eq!(
        updated_project.instagram.unwrap_or("".to_string()),
        "updated"
    );
    assert_eq!(
        updated_project.facebook.unwrap_or("".to_string()),
        "https://facebook.com/updated_project"
    );
    assert_eq!(
        updated_project.linkedin.unwrap_or("".to_string()),
        "https://linkedin.com/company/updated_project"
    );
    assert_eq!(
        updated_project.twitter.unwrap_or("".to_string()),
        "@updated"
    );
    assert_eq!(
        updated_project.website.unwrap_or("".to_string()),
        "https://www.updatedproject.com"
    );
    assert_eq!(
        updated_project.category_id,
        Uuid::parse_str("90cb0d68-9a9d-4526-ab74-9b686d50a4e2").unwrap()
    );
}

#[tokio::test]
async fn put_project_returns_a_404_for_invalid_uuid_format() {
    let app = spawn_app().await;
    let invalid_project_id = "not-a-valid-uuid";

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

    assert!(response.status().is_success());

    let updated_data = serde_json::json!({
        "name": "Updated Project Name",
        "description": "Updated project description",
        "picture": "https://example.com/images/updated-picture.jpg",
        "banner": "https://example.com/images/updated-banner.jpg",
        "is_recruiting": false,
        "email": "sustainability@example.com",
        "modality": "In-person",
        "address": "456 Updated St, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "updated",
        "facebook": "https://facebook.com/updated_project",
        "linkedin": "https://linkedin.com/company/updated_project",
        "twitter": "@updated",
        "website": "https://www.updatedproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    // using reqwest to make a PUT request, build from scratch, because the app.put_project() method expects a valid Uuid
    let response = reqwest::Client::new()
        .put(&format!("{}/projects/{}", app.address, invalid_project_id))
        .json(&updated_data)
        .send()
        .await
        .expect("Failed to execute the request");

    assert_eq!(response.status().as_u16(), 404); // IMPORTANT, TODO TO IMPLEMENT PathConfig TO DEAL WITH ERRORS IN THE DESERIALIZATION
}

#[tokio::test]
async fn put_project_fails_if_there_is_a_fatal_database_error() {
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

    assert!(response.status().is_success());

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // Sabotage the database

    sqlx::query!("ALTER TABLE project DROP COLUMN name;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let updated_data = serde_json::json!({
        "name": "Updated Project Name",
        "description": "Updated project description! Respecing the specs.",
        "picture": "https://example.com/images/updated-picture.jpg",
        "banner": "https://example.com/images/updated-banner.jpg",
        "is_recruiting": false,
        "email": "sustainability@example.com",
        "modality": "In-person",
        "address": "456 Updated St, Green City, Earth",
        "professor": "Dr. Greenleaf",
        "instagram": "updated",
        "facebook": "https://facebook.com/updated_project",
        "linkedin": "https://linkedin.com/company/updated_project",
        "twitter": "@updated",
        "website": "https://www.updatedproject.com",
        "category_id": "90cb0d68-9a9d-4526-ab74-9b686d50a4e2"
    });

    let response = app.put_project(project_id, updated_data).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn put_project_tags_returns_200_for_valid_tags() {
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // create new_tags which a array or vec of strings
    let new_tags = vec!["sustainability", "environment", "business"];

    // create a vec of uuids for the tags
    let mut tag_ids = Vec::new();

    // loop through the new_tags and create them in the database
    for tag in &new_tags {
        let new_tag = serde_json::json!({
            "name": tag
        });

        let response_tag = app.post_tag(new_tag).await;
        assert_eq!(response_tag.status().as_u16(), 201);

        let returned_uuid: Uuid = response_tag
            .json()
            .await
            .expect("Failed to parse the response body");
        tag_ids.push(returned_uuid);
    }

    // create a json with the tag_ids
    let updated_tags = serde_json::json!({
        "tags": tag_ids
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn put_project_tags_returns_400_for_invalid_tags() {
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // create new_tags which a array or vec of strings

    // try to put_project_tags with an invalid tag_id
    let updated_tags = serde_json::json!({
        "tags": ["not-a-valid-uuid"]
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 400);
}

#[tokio::test]
async fn put_project_tags_returns_404_for_nonexistent_project() {
    let app = spawn_app().await;
    let nonexistent_project_id = Uuid::new_v4();

    // create a valid tag
    let new_tag = serde_json::json!({
        "name": "sustainability"
    });

    let response_tag = app.post_tag(new_tag).await;

    assert_eq!(response_tag.status().as_u16(), 201);

    let returned_uuid: Uuid = response_tag
        .json()
        .await
        .expect("Failed to parse the response body");

    // create a json with the tag_ids

    let updated_tags = serde_json::json!({
        "tags": [returned_uuid]
    });

    let response = app
        .put_project_tags(nonexistent_project_id, updated_tags)
        .await;

    assert_eq!(response.status().as_u16(), 404);
}

#[tokio::test]
async fn put_project_tags_persists_changes_in_database() {
    let app = spawn_app().await;

    // create a valid project
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // create a many tags
    let new_tags = vec!["sustainability", "environment", "business"];

    // create a vec of uuids for the tags

    let mut tag_ids = Vec::new();

    // loop through the new_tags and create them in the database
    for tag in &new_tags {
        let new_tag = serde_json::json!({
            "name": tag
        });

        let response_tag = app.post_tag(new_tag).await;
        assert_eq!(response_tag.status().as_u16(), 201);

        let returned_uuid: Uuid = response_tag
            .json()
            .await
            .expect("Failed to parse the response body");
        tag_ids.push(returned_uuid);
    }

    // create a json with the tag_ids
    let updated_tags = serde_json::json!({
        "tags": tag_ids
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 200);

    // check if the tags were added to the project
    let project_tags = app.get_project_tags(project_id).await;

    let tags: Vec<serde_json::Value> = project_tags
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(tags.len(), 3);

    // // compare the uuids of the tags by transforming the two vector into hashsets, the output is a json that has only one array inside

    let tag_ids_from_response: HashSet<Uuid> = tags
        .iter()
        .map(|t| Uuid::parse_str(t.as_str().unwrap()).unwrap())
        .collect();

    let tag_ids_expected: HashSet<Uuid> = tag_ids.iter().cloned().collect();

    assert_eq!(tag_ids_from_response, tag_ids_expected);
}

#[tokio::test]
async fn put_project_deletes_and_adds_tags() {
    let app = spawn_app().await;

    // create a valid project
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // create a many tags
    let new_tags = vec!["sustainability", "environment", "business"];

    // create a vec of uuids for the tags

    let mut tag_ids = Vec::new();

    // loop through the new_tags and create them in the database
    for tag in &new_tags {
        let new_tag = serde_json::json!({
            "name": tag
        });

        let response_tag = app.post_tag(new_tag).await;
        assert_eq!(response_tag.status().as_u16(), 201);

        let returned_uuid: Uuid = response_tag
            .json()
            .await
            .expect("Failed to parse the response body");
        tag_ids.push(returned_uuid);
    }

    // create a json with the tag_ids

    let updated_tags = serde_json::json!({
        "tags": tag_ids
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 200);

    // check if the tags were added to the project

    let project_tags = app.get_project_tags(project_id).await;

    let tags: Vec<serde_json::Value> = project_tags
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(tags.len(), 3);

    // create a new set given the current tags, remove the first tag and add two new tags
    let mut new_tag_ids = tag_ids.clone();
    new_tag_ids.remove(0);

    let new_tags = vec!["sustainable", "new"];

    for tag in &new_tags {
        let new_tag = serde_json::json!({
            "name": tag
        });

        let response_tag = app.post_tag(new_tag).await;
        assert_eq!(response_tag.status().as_u16(), 201);

        let returned_uuid: Uuid = response_tag
            .json()
            .await
            .expect("Failed to parse the response body");
        new_tag_ids.push(returned_uuid);
    }

    // create a json with the new_tag_ids
    let updated_tags = serde_json::json!({
        "tags": new_tag_ids
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 200);

    // check if the tags were added to the project

    let project_tags = app.get_project_tags(project_id).await;

    let tags: Vec<serde_json::Value> = project_tags
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(tags.len(), 4);

    // compare the uuids of the tags by transforming the two vector into hashsets, the output is a json that has only one array inside

    let tag_ids_from_response: HashSet<Uuid> = tags
        .iter()
        .map(|t| Uuid::parse_str(t.as_str().unwrap()).unwrap())
        .collect();

    let tag_ids_expected: HashSet<Uuid> = new_tag_ids.iter().cloned().collect();

    assert_eq!(tag_ids_from_response, tag_ids_expected);
}

#[tokio::test]
async fn put_project_tags_fails_if_there_is_a_fatal_database_error() {
    let app = spawn_app().await;

    // create a valid project
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // create a many tags
    let new_tags = vec!["sustainability", "environment", "business"];

    // create a vec of uuids for the tags

    let mut tag_ids = Vec::new();

    // loop through the new_tags and create them in the database

    for tag in &new_tags {
        let new_tag = serde_json::json!({
            "name": tag
        });

        let response_tag = app.post_tag(new_tag).await;
        assert_eq!(response_tag.status().as_u16(), 201);

        let returned_uuid: Uuid = response_tag
            .json()
            .await
            .expect("Failed to parse the response body");
        tag_ids.push(returned_uuid);
    }

    // create a json with the tag_ids

    let updated_tags = serde_json::json!({
        "tags": tag_ids
    });

    // sabotage the database
    sqlx::query!("ALTER TABLE project_tag DROP COLUMN project_id;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn put_project_tags_delete_all_tags() {
    let app = spawn_app().await;

    // create a valid project
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // create a many tags

    let new_tags = vec!["sustainability", "environment", "business"];

    // create a vec of uuids for the tags

    let mut tag_ids = Vec::new();

    // loop through the new_tags and create them in the database

    for tag in &new_tags {
        let new_tag = serde_json::json!({
            "name": tag
        });

        let response_tag = app.post_tag(new_tag).await;
        assert_eq!(response_tag.status().as_u16(), 201);

        let returned_uuid: Uuid = response_tag
            .json()
            .await
            .expect("Failed to parse the response body");
        tag_ids.push(returned_uuid);
    }

    // create a json with the tag_ids

    let updated_tags = serde_json::json!({
        "tags": tag_ids
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 200);

    // check if the tags were added to the project

    let project_tags = app.get_project_tags(project_id).await;

    let tags: Vec<serde_json::Value> = project_tags
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(tags.len(), 3);

    // create a json with an empty array of tags

    let updated_tags = serde_json::json!({
        "tags": []
    });

    let response = app.put_project_tags(project_id, updated_tags).await;

    assert_eq!(response.status().as_u16(), 200);

    // check if the tags were deleted to the project

    let project_tags = app.get_project_tags(project_id).await;

    let tags: Vec<serde_json::Value> = project_tags
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(tags.len(), 0);
}

#[tokio::test]
async fn get_project_tags_returns_200_for_valid_project() {
    let app = spawn_app().await;

    // create a valid project
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

    assert_eq!(response.status().as_u16(), 201);

    let project_id: Uuid = response
        .json()
        .await
        .expect("Failed to parse the response body");

    // query the project tags to find zero tags
    let project_tags = app.get_project_tags(project_id).await;

    assert_eq!(project_tags.status().as_u16(), 200);
    // assert the response is an empty array
    let tags: Vec<serde_json::Value> = project_tags
        .json()
        .await
        .expect("Failed to parse the response body");

    assert_eq!(tags.len(), 0);
}

#[tokio::test]
async fn get_project_tags_returns_404_for_nonexistent_project() {
    let app = spawn_app().await;
    let nonexistent_project_id = Uuid::new_v4();

    let project_tags = app.get_project_tags(nonexistent_project_id).await;

    assert_eq!(project_tags.status().as_u16(), 404);
}

#[tokio::test]
async fn get_project_tags_fails_if_there_is_a_fatal_database_error() {
    let app = spawn_app().await;

    // sabotage the database
    sqlx::query!("ALTER TABLE project_tag DROP COLUMN project_id;")
        .execute(&app.db_pool)
        .await
        .unwrap();

    // get the project tags
    let project_tags = app.get_project_tags(Uuid::new_v4()).await;

    assert_eq!(project_tags.status().as_u16(), 500);
}
