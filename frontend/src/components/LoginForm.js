import React from 'react';
import { useDispatch } from 'react-redux';
import { giveNotification } from '../reducers/notificationReducer';
import { getProjects } from '../reducers/projectsReducer';

import { initTodos } from '../reducers/todosReducer';
import { loginUser } from '../reducers/userReducer';
import projectService from '../services/projects';
import Button from './Button';
import Button2 from './Button2';
import InputText from './InputText';

const LoginForm = ({ creating, setRegistering }) => {
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const result = dispatch(loginUser({ username, password }));

    result.then((res) => {
      // if length is 0, no error was sent
      if (Object.keys(res).length === 0) {
        dispatch(initTodos());

        const token = JSON.parse(
          window.localStorage.getItem('loggedTodoAppUser')
        ).token;
        projectService.setToken(token);
        dispatch(getProjects());

        return dispatch(giveNotification(`${username} logged in`));
      }
      dispatch(giveNotification(res.error));
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <InputText type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password</label>
      <InputText type="password" id="password" name="password" />
      <br />
      <Button type="submit">login</Button>{' '}
      <Button2 type="button" onClick={() => setRegistering(true)}>
        cancel
      </Button2>
    </form>
  );
};

export default LoginForm;
