function graduate(credential) {
  function student(fullName) {
    return fullName + ', ' + credential;
  }
  return student;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
console.log(medicalSchool('Giancarlo Massoni'));
console.log(lawSchool('Giancarlo Massoni'));
