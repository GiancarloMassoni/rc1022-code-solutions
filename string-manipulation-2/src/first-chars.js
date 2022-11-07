/* exported firstChars */
// make a new variable that slices the string at the length argument
// make a new variable for a new string that concats sliced string and return it ----this step is not necesarry
function firstChars(length, string) {
  var slicedString = string.slice(null, length);
  return slicedString;
}
