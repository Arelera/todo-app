import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../reducers/todosReducer';
import todoService from '../services/todos';

const TodoForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedUserJson = window.localStorage.getItem('loggedTodoAppUser');

    if (loggedUserJson) {
      const loggedUser = JSON.parse(loggedUserJson);
      todoService.setToken(loggedUser.token);
      dispatch(createTodo(e.target.title.value));
      e.target.title.value = '';
    }
  };
  return (
    <div>
      <h2>Add Todo Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" /> <button type="submit"> +++ </button>
      </form>
    </div>
  );
};

export default TodoForm;
