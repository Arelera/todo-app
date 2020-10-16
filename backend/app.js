const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGODB_URI } = require('./utils/config');

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Connection error: ', error);
  });

app.use(cors());
app.use(express.json());

const notesRouter = require('./controllers/todos');

app.use('/api/todos', notesRouter);

module.exports = app;
