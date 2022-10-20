/* exported getStudentNames */
function getStudentNames(students) {
  var allNames = [];

  for (var i = 0; i < students.length; i++) {
    allNames.push(students[i].name);
  }
  return allNames;
}
