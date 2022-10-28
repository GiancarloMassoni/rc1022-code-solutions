/* exported drop */

function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i > count - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
