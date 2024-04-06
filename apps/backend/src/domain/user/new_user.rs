use super::{UserEmail, UserName, UserProfilePic};


pub struct NewUser {
    pub email: UserEmail,
    pub name: UserName,
    pub profile_pic: UserProfilePic,
}