// use crate::helpers::assert_is_redirect_to;
use crate::helpers::spawn_app;

#[tokio::test]
async fn login_returns_500_for_invalid_credentials() {
    let app = spawn_app().await;

    let login_body = serde_json::json!({
        "email": "random-email@test.com",
        "password": "random-password"
    });

    let response = app.post_login(&login_body).await;
    // assert 500
    assert_eq!(response.status().as_u16(), 500);
}

#[tokio::test]
async fn login_returns_200_for_valid_credentials() {
    let app = spawn_app().await;

    let login_body = serde_json::json!({
        "email": &app.test_user.email,
        "password": &app.test_user.password
    });

    let response = app.post_login(&login_body).await;
    // assert 200
    assert_eq!(response.status().as_u16(), 200);
}

#[tokio::test]
async fn login_returns_400_for_bad_request() {
    let app = spawn_app().await;

    let login_body = serde_json::json!({
        "username": "user",
        "password": "password"
    });

    let response = app.post_login(&login_body).await;
    // assert 400
    assert_eq!(response.status().as_u16(), 400);
}
