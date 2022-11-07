/* exported truncate */
// First thing is to do is take the length value and use that number with the slice method
// Then use it on the string argument
// then splice ... and return the value
function truncate(length, string) {
  var slicedString = string.slice(null, length);
  var finalString = slicedString.concat('...');
  return finalString;
}
