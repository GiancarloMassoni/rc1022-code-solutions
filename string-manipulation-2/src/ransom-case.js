/* exported ransomCase */
// Create a new variable that is an empty string
// Make a loop for the string lenght
// Make if statement asking if the i var is divisible by 2,
// if it is then make it upper case if not make it lower case then return the string
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
