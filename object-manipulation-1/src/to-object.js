/* exported toObject */
// create an object
// insert  properties and values into an object
// return the object
function toObject(keyValuePair) {
  var object = {
    [keyValuePair[0]]: keyValuePair[1]

  };
  return object;
}
