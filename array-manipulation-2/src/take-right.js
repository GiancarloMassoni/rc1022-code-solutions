/* exported takeRight */
// create a new array
// create a for loop  looping thorugh array length
// if i is greater than or equals to array length minus the count return that index and push it into the new array
// return the new array
function takeRight(array, count) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i >= array.length - count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
