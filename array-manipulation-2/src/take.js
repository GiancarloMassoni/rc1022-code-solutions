/* exported take */
// create a new array
// loop through the argument array
// if i is less than or equal to the count minus one then push that into the new array
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i <= count - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
