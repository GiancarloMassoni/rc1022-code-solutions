const express = require('express');
const app = express();
const path = require('path');

const directory = path.join(__dirname, '/public');
const serveFiles = express.static(directory);
app.use(serveFiles);
app.listen(3000, () =>
  console.log('Listening on port 3000'));
