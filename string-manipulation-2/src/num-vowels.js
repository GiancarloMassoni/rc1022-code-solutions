/* exported numVowels */
// Make a var with the string argument to lower case
// make a number variable
// make an array with strings that has vowels
// make a for loop cycling through each string character
// make if statement seeing if any vowels are in any character and increment number and return number
function numVowels(string) {
  var lowerString = string.toLowerCase();
  var number = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < lowerString.length; i++) {
    if (vowels.includes(lowerString[i])) {
      number++;
    }
  }
  return number;
}
