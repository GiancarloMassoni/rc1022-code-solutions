const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(product);

function getBalance(accumulator, currentValue) {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    return accumulator - currentValue.amount;
  }
}
const balance = account.reduce(getBalance, initialValue);
console.log(balance);

const composite = traits.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
console.log(composite);
