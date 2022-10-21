/* exported isUpperCased */
// Go through each index and check to see if it is lower case, if it is then return false if not return true.
function isUpperCased(word) {

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
