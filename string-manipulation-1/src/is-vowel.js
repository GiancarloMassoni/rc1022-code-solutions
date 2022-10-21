/* exported isVowel */
// If the character at 0 index is not a vowel then return false. If it is return true.
function isVowel(char) {
  var newChar = char[0].toLowerCase();

  if (newChar === 'a' || newChar === 'e' || newChar === 'i' || newChar === 'o' || newChar === 'u') {
    return true;
  } else {
    return false;
  }
}
