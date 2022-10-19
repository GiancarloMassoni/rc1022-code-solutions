/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}

function isEven(number) {

  if ((number % 2) === 0) {
    return true;
  }
  return false;
}

function startsWithJ(string) {

  if (string[0] === 'J') {
    return true;
  }
  return false;
}

function isOldEnoughToDrink(person) {

  if (person.age <= 21) {
    return false;
  }
  return true;
}

function isOldEnoughToDrive(person) {

  if (person.age <= 16) {
    return false;
  }
  return true;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  }
  if (pH < 7 && pH >= 0) {
    return 'base';
  }
  if (pH > 7 && pH <= 14) {
    return 'acid';
  }
  return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  }
  if (name === 'dot') {
    return 'I\'m cute~';
  }
  return 'Goodnight everybody!';
}
