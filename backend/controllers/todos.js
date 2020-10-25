const jwt = require('jsonwebtoken');
const router = require('express').Router();
const Todo = require('../models/todo');
const User = require('../models/user');
const config = require('../utils/config');

const getTokenFrom = (request) => {
  const auth = request.get('authorization');
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7);
  }
  return null;
};

router.get('/', async (req, res) => {
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, config.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'Please login to view your notes' });
  }

  // todos user has to match requesting users id (we get that id from token)
  const todos = await Todo.find({ user: decodedToken.id });

  res.json(todos);
});

router.post('/', async (req, res) => {
  const token = getTokenFrom(req);

  const decodedToken = jwt.verify(token, config.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).send({ error: 'Token missing or invalid' });
  }

  const body = req.body;

  if (!body.title) {
    console.log('missing title');
    res.status(400).send();
  }

  const user = await User.findById(decodedToken.id);

  const todo = new Todo({
    ...body,
    user: user.id,
  });

  const savedTodo = await todo.save();
  user.todos = user.todos.concat(savedTodo);
  await user.save();

  res.status(201).json(savedTodo);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).send();
  }

  try {
    await todo.remove();
    res.status(204).send();
  } catch (error) {
    console.log(error);
  }
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, body);
    res.json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

module.exports = router;
