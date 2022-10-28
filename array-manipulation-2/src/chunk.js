/* exported chunk */
// create a new array
// make a for loop iterating through the array length
// increment it by i plus the size
// slice the array at i and i + the size and push that into the new array
// return the new array
function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));

  }
  return newArray;
}
