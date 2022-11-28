/* exported isAnagram */
// create a variable for each argument that splits the string at space and the sort the string and then join
// create two empty strings
// loop through each character of each string to check if the character is either space or comma, if its not then concat the char into the empty string
// compare the two strings and if they are equal then return true else return false
function isAnagram(firstString, secondString) {
  var splitFirst = firstString.split('').sort().join();
  var splitSecond = secondString.split('').sort().join();
  var newFirst = '';
  var newSecond = '';

  for (var i = 0; i < splitFirst.length; i++) {
    if (splitFirst.charAt(i) !== ' ' && splitFirst.charAt(i) !== ',') {
      newFirst += splitFirst.charAt(i);
    }
  }

  for (i = 0; i < splitSecond.length; i++) {
    if (splitSecond.charAt(i) !== ' ' && splitSecond.charAt(i) !== ',') {
      newSecond += splitSecond.charAt(i);
    }
  }

  if (newFirst === newSecond) {
    return true;
  }
  return false;

}
