/* exported zip */
// create an empty array
// check to see if the first array length is longer than the second if it is
// then loop through the second array length and create a new empty array
// push the first array at i and second at i into the the new empty array
// then push that array into the first created empty array
// return the array
function zip(first, second) {
  var newArray = [];

  for (var i = 0; i < second.length && i < first.length; i++) {
    var subArray = [];
    subArray.push(first[i], second[i]);
    newArray.push(subArray);
  }

  return newArray;
}
