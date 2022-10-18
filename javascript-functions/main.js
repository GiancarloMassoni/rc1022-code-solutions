function convertsMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log(convertsMinutesToSeconds(5));

function greet(name) {
  var hey = 'Hey, ';
  return hey + name;
}

console.log(greet('Giancarlo'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log(getArea(17, 42));

function getFirstName(person = { firstName: '', lastName: '' }) {
  return person.firstName;
}

console.log(getFirstName({ firstName: 'Giancarlo', lastName: 'Massoni' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
