/* exported includes */
// create a for loop iterating through array length
// if the array at i is equal to value then return true, if not return false
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
