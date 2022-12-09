const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const overFive = numbers.filter(num => num > 5);
console.log(overFive);

const startwithE = names.filter(name => name.startsWith('E'));
console.log(startwithE);

const haveDfilter = name => {
  if (name.includes('d')) {
    return true;
  } else if (name.includes('D')) {
    return true;
  }
};

const haveD = names.filter(haveDfilter);
console.log(haveD);
