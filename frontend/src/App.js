import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Notification from './components/Notification';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UserForm from './components/UserForm';
import todoService from './services/todos';

const Div = styled.div`
  margin: 1rem;
  background: #fff;
  max-width: 600px;
  padding: 0;
  border-radius: 15px;
  box-shadow: 0px 5px 10px #000;
`;

const H2 = styled.h2`
  background: #dae0f2;
  border-radius: 15px 15px 0 0;
  border-bottom: 2px solid #004fff;
  padding: 0.25rem 1rem;
  box-shadow: 0px 4px 5px -4px #004fff;
  text-shadow: 1px 2px 2px #aaa;
`;

const DivInner = styled.div`
  padding: 0.5rem 1rem;
`;

function App() {
  useEffect(() => {
    const userJson = window.localStorage.getItem('loggedTodoAppUser');
    if (userJson) {
      const token = JSON.parse(userJson).token;
      todoService.setToken(token);
    }
  }, []);

  return (
    <Div>
      <H2>Todo</H2>
      <DivInner>
        <Notification />
        <UserForm />
        <TodoForm />
        <TodoList />
      </DivInner>
    </Div>
  );
}

export default App;
