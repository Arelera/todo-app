import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../reducers/todosReducer';

const TodoForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(e.target.title.value));
    e.target.title.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" /> <button type="submit"> +++ </button>
    </form>
  );
};

export default TodoForm;
