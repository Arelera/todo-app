const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id.toString()),
      delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
