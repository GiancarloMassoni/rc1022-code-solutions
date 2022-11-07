/* exported dropRight */
// create a new array
// create  a for loop iterating through array length
// if i is less then the array length minus the count then push that into the new array
// return new array
function dropRight(array, count) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i < array.length - count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
