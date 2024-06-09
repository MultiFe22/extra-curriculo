use crate::helpers::spawn_app;

#[tokio::test]
async fn post_signup_returns_a_201_for_valid_json_data() {
    let app = spawn_app().await;

    let new_signup = serde_json::json!({
        "username": "John Doe",
        "email": "valid@test.com",
        "password": "testingpassword"
    });

    let response = app.post_signup(new_signup).await;

    assert_eq!(response.status().as_u16(), 201);

}

#[tokio::test]
async fn post_signup_persists_user_in_database() {
    let app = spawn_app().await;

    let new_signup = serde_json::json!({
        "username": "John Doe",
        "email": "valid@test.com",
        "password": "testingpassword"
    });

    app.post_signup(new_signup).await;

    let saved = sqlx::query!("SELECT username FROM users where email = 'valid@test.com'")
        .fetch_one(&app.db_pool)
        .await
        .expect("Failed to fetch saved user");

    assert_eq!(saved.username, "John Doe");

}

#[tokio::test]
async fn post_signup_returns_a_400_for_invalid_json_data() {
    let app = spawn_app().await;

    let new_signup = serde_json::json!({
        "username": "John Doe",
        "email": "invalidtest.com",
        "password": "testingpassword"
    });

    let response = app.post_signup(new_signup).await;

    assert_eq!(response.status().as_u16(), 400);

}

#[tokio::test]
async fn post_signup_returns_a_409_for_duplicate_email() {
    let app = spawn_app().await;

    let new_signup = serde_json::json!({
        "username": "John Doe",
        "email": "valid@test.com",
        "password": "testingpassword"
    });

    app.post_signup(new_signup).await;

    let duplicate_signup = serde_json::json!({
        "username": "Duplicated",
        "email": "valid@test.com",
        "password": "testingpasswordagain"
    });

    let response = app.post_signup(duplicate_signup).await;

    assert_eq!(response.status().as_u16(), 409);
    
}