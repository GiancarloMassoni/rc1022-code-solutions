const fs = require('fs');
const x = Math.random();
fs.writeFile('random.txt', `${x.toString()} \n`, 'utf8', err => { if (err) throw err; });
