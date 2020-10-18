import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initTodos } from '../reducers/todosReducer';
import Todo from './Todo';

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initTodos());
  }, [dispatch]);

  let todos = useSelector((state) => state.todos);

  return (
    <>
      <h2>List</h2>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}>
            {todo.title}
          </Todo>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
