/* exported getKeys */
// Make an array
// Get the object keys and put them in the array then return
function getKeys(object) {
  var keys = [];
  var key;

  for (key in object) {
    keys.push(key);
  }
  return keys;
}
