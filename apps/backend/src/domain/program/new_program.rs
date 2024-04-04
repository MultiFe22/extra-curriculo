use super::{ProgramCampus, ProgramCollege, ProgramDepartment, ProgramInstitute, ProgramName};

#[derive(Debug)]
pub struct NewProgram {
    pub name: ProgramName,
    pub institute: ProgramInstitute,
    pub department: ProgramDepartment,
    pub campus: ProgramCampus,
    pub college: ProgramCollege,
}
