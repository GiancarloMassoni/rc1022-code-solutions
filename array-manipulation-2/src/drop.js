/* exported drop */
// create a new array
// make a loop, looping through the array length
// if i is less than the count minus one then push that into the new array
function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i > count - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
