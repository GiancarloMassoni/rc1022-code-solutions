/* exported difference */
// create an empty array
// loop through the first array length
// if the second array does not include first array at i, then push first at i into the new array
// create another loop that loops through second array length
// if first array does not include second array at i then push it in the new array and then return the array
function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
