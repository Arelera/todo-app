import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteTodo, updateTodo } from '../reducers/todosReducer';
import Button from './Button';

const Li = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;

  /* this is the one grid thing i can use easily lol, other things are hard */
  display: grid;
  grid-row-gap: 0.1rem;
  grid-template-columns: repeat(5, 1fr) 80px;
  grid-template-areas: 'text text text text text buttons';
  &:last-child {
    border-bottom: none;
  }
`;
const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleImporantClick = () => {
    dispatch(updateTodo({ ...todo, important: !todo.important }));
  };

  return (
    <Li>
      <p style={{ gridArea: 'text' }}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={todo.completed ? true : false}
        />
        {todo.title}
      </p>{' '}
      <div style={{ gridArea: 'buttons' }}>
        <Button onClick={handleDelClick}>del</Button>{' '}
        <Button important={todo.important} onClick={handleImporantClick}>
          {todo.important ? '!!!' : '!'}
        </Button>
      </div>
    </Li>
  );
};

export default Todo;
