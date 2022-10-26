/* exported capitalizeWord */
// Make the word argument all lowercase
// Check if it includes javascript, if it does then return JavaScript
// return a new word with first letter capitilized
function capitalizeWord(word) {
  var newWord = word.toLowerCase();

  if (newWord === 'javascript') {
    var javascript = 'JavaScript';
    return javascript;
  }
  newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return newWord;
}
