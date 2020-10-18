import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanList, initTodos } from '../reducers/todosReducer';
import { loginUser, logoutUser } from '../reducers/userReducer';

const UserForm = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedTodoAppUser');
    if (loggedUserJson) {
      const { name, username } = JSON.parse(loggedUserJson);
      dispatch(loginUser({ name, username }));
      setLoggedIn(true);
    }
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const result = dispatch(loginUser({ username, password }));
    // this block down here took me a long ass time to get right
    result.then((res) => {
      // if length is 0, no error was sent
      if (Object.keys(res).length === 0) {
        dispatch(initTodos());
        setExpanded(false);
        setLoggedIn(true);
        setNotification(`${username} logged in`);
        return setTimeout(() => {
          setNotification(null);
        }, 5000);
      }
      setNotification(res.error);
    });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(cleanList());

    setLoggedIn(false);
  };

  if (loggedIn) {
    return <button onClick={handleLogout}>logout</button>;
  } else {
    return expanded ? (
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">login</button>
        <button type="button" onClick={() => setExpanded(!expanded)}>
          cancel
        </button>
      </form>
    ) : (
      <button type="button" onClick={() => setExpanded(!expanded)}>
        login
      </button>
    );
  }
};

export default UserForm;
