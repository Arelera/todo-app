import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { updateTodo } from '../reducers/todosReducer';
import Button from './Button';

const Li = styled.li`
  padding: 0.2rem 0 0.2rem 0.5rem;
  margin: 0.25rem 0;
  background: #fff;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.isActive() ? '#63d2ff' : 'transparent')};
  font-family: 'Open Sans';

  display: grid;
  grid-row-gap: 0.1rem;
  grid-template-columns: repeat(5, 1fr) minmax(60px, 80px);
  grid-template-areas: 'text text text text text buttons';

  box-shadow: 0px 1px 5px #ccc;

  transition: border ease 200ms;
  &:hover {
    border: 2px solid #63d2ff;
  }

  & > p {
    display: flex;
    align-items: center;
    & > input {
      margin-right: 0.5rem;
    }
    color: ${(props) => (props.completed ? '#aaa' : '#222')};
    font-style: ${(props) => (props.completed ? 'italic' : '')};
    text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
  }
`;
const Todo = ({ todo, handleDelete, setActive, isActive }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    console.log('clicked CHECK');
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleImporantClick = () => {
    dispatch(updateTodo({ ...todo, important: !todo.important }));
  };

  return (
    <Li isActive={isActive} completed={todo.completed} onClick={setActive}>
      <p style={{ gridArea: 'text' }}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={todo.completed ? true : false}
        />
        {todo.title}
      </p>{' '}
      <div style={{ gridArea: 'buttons' }}>
        <Button onClick={() => handleDelete(todo.id)}>del</Button>{' '}
        {/* <Button onClick={setActive}>
          {todo.id === useSelector((state) => state.activeTodo).id ? 'O' : 'o'}{' '}
        </Button>{' '} */}
        <Button important={todo.important} onClick={handleImporantClick}>
          {todo.important ? '!!!' : '!'}
        </Button>
      </div>
    </Li>
  );
};

export default Todo;
