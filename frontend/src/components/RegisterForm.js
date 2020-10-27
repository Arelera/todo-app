import React from 'react';
import { useDispatch } from 'react-redux';
import { giveNotification } from '../reducers/notificationReducer';
import { createUser } from '../reducers/userReducer';
import Button from './Button';
import Button2 from './Button2';
import InputText from './InputText';

const RegisterForm = ({ setRegistering }) => {
  const dispatch = useDispatch();

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

    // setRegistering(false);

    e.target.name.value = '';
    e.target.username.value = '';
    e.target.password.value = '';
    e.target.password2.value = '';
    setRegistering(false);
  };

  return (
    <form onSubmit={handleCreate}>
      <label htmlFor="name">Name</label>
      <InputText type="text" id="name" name="name" />
      <br />
      <label htmlFor="username">Username</label>
      <InputText type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password</label>
      <InputText type="password" id="password" name="password" />
      <br />
      <label htmlFor="password2">Repeat password</label>
      <InputText type="password" id="password2" name="password2" />
      <br />
      <Button type="submit">create</Button>{' '}
      <Button2 type="button" onClick={() => setRegistering(false)}>
        Already have an account? Click here to log-in
      </Button2>
    </form>
  );
};

export default RegisterForm;
