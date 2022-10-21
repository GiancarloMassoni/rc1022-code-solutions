/* exported reverseWord */
// Create a new variable for a string.
// Find the input string length and take that number and place into a variable
// countdown from that number and place those indexes into a new string
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;

}
