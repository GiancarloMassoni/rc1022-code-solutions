/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var splitFirst = firstString.split('').sort().join();
  var splitSecond = secondString.split('').sort().join();
  var newFirst = '';
  var newSecond = '';

  for (var i = 0; i < splitFirst.length; i++) {
    if (splitFirst.charAt(i) !== ' ' && splitFirst.charAt(i) !== ',') {
      newFirst += splitFirst.charAt(i);
    }
  }

  for (i = 0; i < splitSecond.length; i++) {
    if (splitSecond.charAt(i) !== ' ' && splitSecond.charAt(i) !== ',') {
      newSecond += splitSecond.charAt(i);
    }
  }

  if (newFirst === newSecond) {
    return true;
  }
  return false;

}
