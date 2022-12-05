const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const keys in grades) {
    gradesArr.push(grades[keys]);
  }
  res.json(gradesArr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

const json = express.json();
app.use(json);

app.post('/api/grades', (req, res) => {
  res.status(201);
  grades[nextId] = req.body;
  nextId++;
  res.json(grades);
});
