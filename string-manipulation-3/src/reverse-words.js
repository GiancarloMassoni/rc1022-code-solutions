/* exported reverseWords */
// split the string argument at each space and assign it to a variable
// create an empty string and assign it to a variable
// loop the split string and inside the loop create another empty string
// with the new empty string loop through each character starting at last one and ending at the first position
// concat inside the created empty string
// return the new string
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
