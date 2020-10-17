import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Togglable from './components/Togglable';
import UserForm from './components/UserForm';
import { loginUser } from './reducers/userReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedTodoAppUser');
    if (loggedUserJson) {
      const { name, username } = JSON.parse(loggedUserJson);
      dispatch(loginUser({ name, username }));
    }
  }, []);

  const loggedUser = useSelector((state) => state.user);

  return (
    <div>
      <h2>App</h2>
      {loggedUser && (
        <Togglable buttonLabel="sign-in">
          <UserForm />
        </Togglable>
      )}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
// TODO: ADD A WAY TO LOG OUT
