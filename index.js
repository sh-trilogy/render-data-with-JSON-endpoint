'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const data = require('./public/data.js');

app.get('/api/data', (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log('Listening on Port');
});
