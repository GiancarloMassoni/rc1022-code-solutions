/* exported flatten */
// create a new variable that stores an empty array
// create a loop that loops through the argument array length
// if the array at i is not an array then push the array at i into the empty array created
// if it is an array then create another loop and loop through that array and push each value into the new array
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {

    if (Array.isArray(array[i]) === false) {
      newArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (var x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
      }
    }
  }

  return newArray;
}
