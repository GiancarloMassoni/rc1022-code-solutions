/* exported capitalize */
// Go to the 0 index and capitilize the letter.
// Make the other indexes lowercase.
function capitalize(word) {

  var newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

  return newWord;
}
