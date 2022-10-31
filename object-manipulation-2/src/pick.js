/* exported pick */

function pick(source, keys) {
  // var object = Object.entries(source);
  var output = {};

  for (var i = 0; i < source.length; i++) {
    if (keys === source[keys[i]]) {
      output += source.i;
    }
  }
  return output;
}
