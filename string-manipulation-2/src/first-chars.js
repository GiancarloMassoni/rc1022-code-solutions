/* exported firstChars */
// make a new variable that slices the string at the length argument
// make a new variable for a new string that concats sliced string and return it
function firstChars(length, string) {
  var slicedString = string.slice(null, length);
  var finalString = slicedString.concat('');
  return finalString;
}
