/* exported pick */
// create an object
// create a loop that goes throught the keys argument
// if the source object at keys at i is not defined then add that to the new created object
function pick(source, keys) {
  var output = {};

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
