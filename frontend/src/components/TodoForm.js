import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../reducers/todosReducer';
import todoService from '../services/todos';
import InputText from './InputText';

const TodoForm = () => {
  const dispatch = useDispatch();
  const selectedProject = useSelector((state) => state.selectedProject);
  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedUserJson = window.localStorage.getItem('loggedTodoAppUser');

    if (loggedUserJson) {
      const loggedUser = JSON.parse(loggedUserJson);
      todoService.setToken(loggedUser.token);
      dispatch(
        createTodo({ title: e.target.title.value, project: selectedProject })
      );
      e.target.title.value = '';
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputText
          name="title"
          placeholder='Add a todo item, press "Enter" to save'
        />
        {/* <Button type="submit">add</Button> */}
      </form>
    </div>
  );
};

export default TodoForm;
