/* exported isPalindromic */
// first step is to split the string at spaces and then join so there are no spaces in the string
// create a new variable for an empty string
// loop through the string and concatenate the splitstring into the newstring at each index
// if the newstring is equal to the split string then return true if not return false
function isPalindromic(string) {

  var splitString = string.split(' ').join('');
  var newString = '';

  for (var i = string.length; i >= 0; i--) {
    newString += splitString.charAt(i);

    if (newString === splitString) {
      return true;
    }
  }
  return false;
}
