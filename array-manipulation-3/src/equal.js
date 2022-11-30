/* exported equal */
// if the first array length is not equal to second array length return false
// loop through the first arrays length, if first array at i is not equal to second array at i then return false
// else return true
function equal(first, second) {

  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
