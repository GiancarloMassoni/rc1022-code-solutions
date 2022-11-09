/* exported reverseWords */

function reverseWords(string) {
  var splitString = string.split(' ');
  var fullReverseString = '';

  for (var i = 0; i < splitString.length; i++) {
    var reverseString = '';
    for (var x = splitString[i].length; x >= 0; x--) {
      reverseString += splitString[i].charAt(x);
    }
    fullReverseString += reverseString + ' ';
  }
  return fullReverseString.trim();
}
