'use strict';

const express = require('express');
const app = express();
const data = require('./public/data.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/api/data', (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log('Listening on Port');
});
