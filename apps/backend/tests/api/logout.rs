use crate::helpers::spawn_app;

#[tokio::test]
async fn logout_returns_200_for_valid_credentials() {
    let app = spawn_app().await;

    let login_body = serde_json::json!({
        "email": &app.test_user.email,
        "password": &app.test_user.password
    });

    let login_response = app.post_login(&login_body).await;
    // get the "Set-Cookie" header
    let cookie = login_response.headers().get("Set-Cookie").expect("no cookie found");
    // get the cookie value
    let cookie_value = cookie
        .to_str()
        .expect("invalid cookie value")
        .split(';')
        .next()
        .expect("cookie value is empty");

    let logout_response = app.post_logout(cookie_value).await;
    // assert 200
    assert_eq!(logout_response.status().as_u16(), 200);

}

#[tokio::test]
async fn logout_return_401_for_invalid_credentials() {
    let app = spawn_app().await;

    let invalid_cookie = "invalid_cookie";

    let logout_response = app.post_logout(invalid_cookie).await;
    // assert 401
    assert_eq!(logout_response.status().as_u16(), 401);
}