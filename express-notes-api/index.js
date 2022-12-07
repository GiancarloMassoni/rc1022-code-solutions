const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const notes = data.notes;
let id = data.nextId;
const json = express.json();
app.use(json);

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const keys in notes) {
    notesArr.push(notes[keys]);
  }
  res.json(notesArr);
  res.status(200);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(404).json({ error: 'id must be postive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.json(notes[id]);
  }

});

app.post('/api/notes', (req, res) => {
  const postReq = req.body;
  if (postReq.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (postReq.content !== undefined) {
    req.body.id = id;
    notes[id] = req.body;
    id++;
    const dataObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataObj, err => {
      if (err) {
        res.sendStatus(500);
        console.error(err);
      } else {
        res.status(201);
        const notesArr = [];
        for (const keys in notes) {
          notesArr.push(notes[keys]);
        }
        res.send(notesArr);
      }
    });
  }

});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(404).json({ error: 'id must be postive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete notes[id];
    const dataObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataObj, err => {
      if (err) {
        res.sendStatus(500);
        console.error(err);
      } else {
        res.sendStatus(204);
      }

    });
  }
}
);

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'invalid id' });

  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (req.body === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = id;
    notes[id] = req.body;
    const dataObj = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataObj, err => {
      if (err) {
        res.sendStatus(500);
        console.error(err);
      } else {
        res.sendStatus(204);
      }

    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
