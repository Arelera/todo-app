import React, { useEffect } from 'react';
import Notification from './components/Notification';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UserForm from './components/UserForm';
import todoService from './services/todos';

function App() {
  useEffect(() => {
    const userJson = window.localStorage.getItem('loggedTodoAppUser');
    if (userJson) {
      const token = JSON.parse(userJson).token;
      todoService.setToken(token);
    }
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      <Notification />
      <UserForm />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
