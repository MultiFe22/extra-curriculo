use actix_web::HttpResponse;

pub async fn login_check() -> HttpResponse {
    HttpResponse::Ok().finish()
}
