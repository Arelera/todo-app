import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../reducers/todosReducer';
import todoService from '../services/todos';

const TodoForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedUser = JSON.parse(
      window.localStorage.getItem('loggedTodoAppUser')
    );
    todoService.setToken(loggedUser.token);

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
