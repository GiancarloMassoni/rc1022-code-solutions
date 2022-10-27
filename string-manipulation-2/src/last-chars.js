/* exported lastChars */
// make a var for string slice and have an argument of minus length
// concat that string and put into a new var and return that
function lastChars(length, string) {
  var slicedString = string.slice(-length);
  var finalString = slicedString.concat('');
  return finalString;
}
