/* exported tail */
// Remove the first array from the input
// Return the remaining array elements.
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;

}
