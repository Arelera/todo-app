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

// couldn't extend Button here for some reason
const ProjectsButton = styled.button`
  display: none;
  font-family: 'Roboto Condensed';
  font-size: 0.8rem;
  font-weight: 600;
  background: hsl(0, 0%, 98%);
  border: 1px solid #dedede;
  border-radius: 2px;
  box-shadow: 1px 2px 10px #ddd;
  vertical-align: top;
  padding: 0.4rem 0.6rem;
  margin: 0 0.5rem 0.5rem 0;

  :hover {
    background: hsl(0, 0%, 96%);
  }
  @media screen and (max-width: 1024px) {
    display: inline-block;
  }
`;

const Todos = ({ setIsProjectsVisible, setDescriptionVisible }) => {
  return (
    <Div>
      <H2>
        <ProjectsButton onClick={setIsProjectsVisible}>Projects</ProjectsButton>
        Todos
      </H2>
      <Notification />
      <TodoForm />
      <TodoList setDescriptionVisible={setDescriptionVisible} />
    </Div>
  );
};

export default Todos;
