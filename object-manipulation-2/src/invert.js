/* exported invert */

function invert(source) {
  var object = {};

  for (var key in source) {
    var newKey = source[key];
    var newValue = key;
    object[newKey] = newValue;
  }
  return object;
}
