var student = {
  firstName: 'Giancarlo',
  lastName: 'Massoni',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'sales';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('vale of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Dodge',
  model: 'Charger',
  year: 2022
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'black';
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Sam',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
