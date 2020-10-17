import React from 'react';
import { useDispatch } from 'react-redux';
import loginService from '../services/login';
import todoService from '../services/todos';

const UserForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const loggedUser = loginService.loginUser({ username, password });

    // idk why logged user is still pending but whatever
    // i'll just use .then
    loggedUser.then((user) => {
      window.localStorage.setItem('loggedTodoAppUser', JSON.stringify(user));
      todoService.setToken(user.token); // idk if this is necessary
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">sign-in</button>
    </form>
  );
};

export default UserForm;
