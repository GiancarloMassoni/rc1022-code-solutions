/* exported isLowerCased */
// Go through each index of the string and check to see if it is uppercase, if it is return false else return true.
function isLowerCased(word) {

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
