import React from 'react';
import styled from 'styled-components';
import Notification from './Notification';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const H2 = styled.h2`
  margin: 0.75rem 0 0 0;
`;

const Div = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-right: 1px solid #aaa;
  border-left: 1px solid #aaa;
  overflow-y: scroll;
`;

const Todos = () => {
  return (
    <Div>
      <H2>Todos</H2>
      <Notification />
      <TodoForm />
      <TodoList />
    </Div>
  );
};

export default Todos;
