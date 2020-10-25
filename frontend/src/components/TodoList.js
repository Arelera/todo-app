import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Todo from './Todo';
import { initTodos, deleteTodo } from '../reducers/todosReducer';
import { resetActiveTodo, setActiveTodo } from '../reducers/activeTodoReducer';

const Ul = styled.ul`
  border-top: 2px solid #78d5d7;

  & > li:first-child {
    margin-top: 0.5rem;
  }

  .todo-enter {
    opacity: 0;
    transform: translate(0, -20px);
  }

  .todo-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 200ms ease-out;
  }

  .todo-exit {
    opacity: 1;
  }

  .todo-exit-active {
    opacity: 0;
    transform: translate(-20px, 0px);
    transition: all 150ms ease-out;
  }
`;

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initTodos());
  }, [dispatch]);

  const selectedProject = useSelector((state) => state.selectedProject);
  let todos = useSelector((state) => state.todos);

  todos =
    selectedProject === 0
      ? todos
      : todos.filter((todo) => todo.project === selectedProject);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(resetActiveTodo());
  };

  const activeTodo = useSelector((state) => state.activeTodo);
  const isActive = (id) => {
    return activeTodo.id === id;
  };

  return (
    <TransitionGroup component={Ul}>
      {todos.map((todo) => (
        <CSSTransition key={todo.id} timeout={200} classNames="todo">
          <Todo
            setActive={() => dispatch(setActiveTodo(todo))}
            handleDelete={handleDelete}
            todo={todo}
            isActive={() => isActive(todo.id)}
          >
            {todo.title}
          </Todo>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
export default TodoList;
