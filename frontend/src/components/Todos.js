import React from 'react';
import styled from 'styled-components';
import Notification from './Notification';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Div = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-right: 1px solid #aaa;
  border-left: 1px solid #aaa;
`;

const Todos = () => {
  return (
    <Div>
      <Notification />
      <TodoForm />
      <TodoList />
    </Div>
  );
};

export default Todos;
