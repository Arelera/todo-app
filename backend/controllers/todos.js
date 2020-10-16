const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
  const todos = await Todo.find({});
  console.log('TODOS: ', todos);
  res.json(todos);
});

router.post('/', async (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body.title) {
    console.log('missing title');
    res.status(400).send();
  }
  const todo = new Todo({
    ...body,
  });
  const savedTodo = await todo.save();
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
