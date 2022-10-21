/* exported getWords */
//  Create a variable and then Find each space and split the words and put that in the new variable
// Return the array.
function getWords(string) {
  if (string === '') {
    return [];
  }
  var array = string.split(' ');

  return array;

}
