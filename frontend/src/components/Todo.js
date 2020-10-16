import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../reducers/todosReducer';

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
    <li>
      <input
        type="checkbox"
        onChange={handleCheck}
        checked={todo.completed ? true : false}
      />
      <p style={{ display: 'inline-block' }}>{todo.title}</p>{' '}
      <button onClick={handleDelClick}>del</button>{' '}
      <button onClick={handleImporantClick}>
        {todo.important ? '!!!' : '!'}
      </button>
    </li>
  );
};

export default Todo;
