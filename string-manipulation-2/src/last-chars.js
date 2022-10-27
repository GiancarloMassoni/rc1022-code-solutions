/* exported lastChars */

function lastChars(length, string) {
  var slicedString = string.slice(-length);
  var finalString = slicedString.concat('');
  return finalString;
}
