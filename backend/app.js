const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGODB_URI } = require('./utils/config');

const notesRouter = require('./controllers/todos');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const projectsRouter = require('./controllers/projects');

const { unkownEndpointHandler } = require('./middleware');

mongoose
  .connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Connection error: ', error);
  });

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.use('/api/todos', notesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/projects', projectsRouter);

// need this to fix react-router cannot get/ on refresh bug
app.use('/*', unkownEndpointHandler);

module.exports = app;
