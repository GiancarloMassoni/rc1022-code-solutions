/* exported unique */
// create an empty array
// loop through the argument array length
// if the created array does not include the array at i value then push it into the array
// return the created array
function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
