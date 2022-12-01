const json = require('./data.json');
const notes = json.notes;
let id = json.nextId;
const fs = require('fs');
const option = process.argv[2];
const dataObj = json;
if (option === 'read') {

  for (const keys in notes) {
    console.log(`${keys}: ${notes[keys]} `);
  }

} else if (option === 'create') {
  const newNote = process.argv[3];
  dataObj.notes[id] = newNote;
  id++;
  json.nextId = id;
  const objString = JSON.stringify(dataObj, null, 2);
  fs.writeFile('data.json', objString, err => { if (err) throw err; });

} else if (option === 'update') {
  const updateId = process.argv[3];
  const updatedNote = process.argv[4];
  for (const keys in notes) {
    if (keys === updateId) {
      dataObj.notes[updateId] = updatedNote;
    }
  }
  const objString = JSON.stringify(dataObj, null, 2);
  fs.writeFile('data.json', objString, err => { if (err) throw err; });

} else if (option === 'delete') {
  const deleteId = process.argv[3];

  for (const keys in notes) {
    if (keys === deleteId) {
      delete notes[deleteId];
    }
  }
  const objString = JSON.stringify(dataObj, null, 2);
  fs.writeFile('data.json', objString, err => { if (err) throw err; });
}
