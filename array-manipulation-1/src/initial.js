/* exported initial */
// Make a copy of the array
// Take every element except the last one and place it into the new array
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;

}
