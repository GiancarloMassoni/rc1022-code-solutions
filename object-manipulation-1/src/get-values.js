/* exported getValues */
// Make an array
// Get the object values then return the array
function getValues(object) {
  var values = [];
  var key;
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
