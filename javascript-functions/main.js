function convertsMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertsMinutesToSecondsResult = convertsMinutesToSeconds(5);

console.log(convertsMinutesToSecondsResult);

function greet(name) {
  var hey = 'Hey, ';
  return hey + name;
}

var greetResult = greet('Giancarlo');

console.log(greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log(getAreaResult);

function getFirstName(person = {}) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Giancarlo', lastName: 'Massoni' });

console.log(getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log(getLastElementResult);
