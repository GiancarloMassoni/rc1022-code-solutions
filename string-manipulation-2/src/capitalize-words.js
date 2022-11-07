/* exported capitalizeWords */
// make a variable split string
// Split the argument string with the space as an argument to the method
// place those arrays into a string and return the statement
function capitalizeWords(string) {
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1).toLowerCase();
  }
  return splitString.join(' ');
}
