use super::{UserEmail, UserName, UserPassword};

pub struct NewUser {
    pub email: UserEmail,
    pub name: UserName,
    pub password: UserPassword,
}
