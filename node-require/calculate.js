const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);
const symbol = process.argv[3];

if (symbol === 'plus') {
  console.log('Result: ', add(x, y));

} else if (symbol === 'minus') {
  console.log('Result: ', subtract(x, y));
} else if (symbol === 'over') {
  console.log('Result: ', divide(x, y));
} else if (symbol === 'times') {
  console.log('Result: ', multiply(x, y));
}
