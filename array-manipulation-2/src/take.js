/* exported take */

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i <= count - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
