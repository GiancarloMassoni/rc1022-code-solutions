var big = 10;
var medium = 5;
var small = 1;
var maximumValue = Math.max(big, small, medium);

console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Cirque Du Freak',
    author: 'Darren Shan'
  },
  {
    title: 'Game of Thrones',
    author: 'George RR Martin'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Giancarlo Massoni';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
