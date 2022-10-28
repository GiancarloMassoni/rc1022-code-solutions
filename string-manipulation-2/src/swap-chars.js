/* exported swapChars */
// Create a empty string
// make a loop that iterates through string.length
// if i matches first index then add string at second index to the empty string
// else if i matches second index then add string at first index to empty string
// else just add string at i to the new string and then return new string
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;

}
