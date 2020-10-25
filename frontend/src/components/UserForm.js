import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { giveNotification } from '../reducers/notificationReducer';
import { cleanList, initTodos } from '../reducers/todosReducer';
import {
  createUser,
  initUser,
  loginUser,
  logoutUser,
} from '../reducers/userReducer';
import InputText from './InputText';
import { resetActiveTodo } from '../reducers/activeTodoReducer';
import { clearProjects } from '../reducers/projectsReducer';

// currently accounts can be only created through requests
const UserForm = () => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [loggedIn, setLoggedIn] = useState();
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    dispatch(initUser()).then((res) => {
      setLoggedIn(res);
    });
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const result = dispatch(loginUser({ username, password }));

    result.then((res) => {
      // if length is 0, no error was sent
      if (Object.keys(res).length === 0) {
        dispatch(initTodos());
        setExpanded(false);
        setLoggedIn(true);
        return dispatch(giveNotification(`${username} logged in`));
      }
      dispatch(giveNotification(res.error));
    });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(cleanList());
    dispatch(resetActiveTodo());
    dispatch(clearProjects());
    setLoggedIn(false);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    if (password !== password2) {
      return dispatch(giveNotification("Passwords don't match!"));
    }
    dispatch(createUser({ name, username, password }));
    dispatch(giveNotification(`User "${username}" created!`));
    setCreating(false);
    e.target.name.value = '';
    e.target.username.value = '';
    e.target.password.value = '';
    e.target.password2.value = '';
  };

  if (loggedIn) {
    return <Button onClick={handleLogout}>logout</Button>;
  } else {
    return expanded ? (
      creating ? (
        // create user form
        <form onSubmit={handleCreate}>
          <label htmlFor="name">Name:</label>
          <InputText type="text" id="name" name="name" />
          <br />
          <label htmlFor="username">Username:</label>
          <InputText type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <InputText type="password" id="password" name="password" />
          <br />
          <label htmlFor="password2">Repeat password:</label>
          <InputText type="password" id="password2" name="password2" />
          <br />
          <Button type="submit">create</Button>{' '}
          <Button type="button" onClick={() => setCreating(false)}>
            cancel
          </Button>
        </form>
      ) : (
        // sign up form
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <InputText type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password</label>
          <InputText type="password" id="password" name="password" />
          <br />
          <Button type="submit">login</Button>{' '}
          <Button type="button" onClick={() => setExpanded(!expanded)}>
            cancel
          </Button>{' '}
          <Button type="button" onClick={() => setCreating(true)}>
            Create
          </Button>
        </form>
      )
    ) : (
      <Button type="button" onClick={() => setExpanded(!expanded)}>
        login
      </Button>
    );
  }
};

export default UserForm;
