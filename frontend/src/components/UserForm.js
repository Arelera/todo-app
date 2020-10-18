import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { giveNotification } from '../reducers/notificationReducer';
import { cleanList, initTodos } from '../reducers/todosReducer';
import { loginUser, logoutUser } from '../reducers/userReducer';
import InputText from './InputText';

// currently accounts can be only created through requests
const UserForm = () => {
  const dispatch = useDispatch();
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
        return dispatch(giveNotification(`${username} logged in`));
      }
      dispatch(giveNotification(res.error));
    });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(cleanList());

    setLoggedIn(false);
  };

  if (loggedIn) {
    return <Button onClick={handleLogout}>logout</Button>;
  } else {
    return expanded ? (
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <InputText type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <InputText type="password" id="password" name="password" />
        <br />
        {/* <button type="submit">login</button> */}
        <Button type="submit">login</Button>
        <Button type="button" onClick={() => setExpanded(!expanded)}>
          cancel
        </Button>
      </form>
    ) : (
      <Button type="button" onClick={() => setExpanded(!expanded)}>
        login
      </Button>
    );
  }
};

export default UserForm;
