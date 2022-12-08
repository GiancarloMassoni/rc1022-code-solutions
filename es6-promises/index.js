const takeAChance = require('./take-a-chance');

const myName = takeAChance('Giancarlo');

myName.then(resolve => {
  console.log(resolve);
});
myName.catch(reject => {
  console.error(reject.message);
});
