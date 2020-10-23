import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateTodo } from '../reducers/todosReducer';

const DivDescription = styled.div`
  width: 60%;
  padding: 0.5rem 1.5rem;

  & > h2 {
    margin: 0.75rem 0;
  }
`;

const Textarea = styled.textarea`
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.5rem;
  width: 100%;
  min-height: 150px;
  max-height: 400px;
  border-radius: 4px;
  border: 1px solid #dedede;
  color: #333;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 2px 6px #ddd;

  resize: vertical;
  outline: none;
`;

const RightSide = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const activeTodo = useSelector((state) => state.activeTodo);
  useEffect(() => {
    setDescription(activeTodo.description);
  }, [activeTodo]);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(updateTodo({ ...activeTodo, description }));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [description, dispatch]);

  const handleTextarea = (e) => {
    setDescription(e.target.value);
  };

  return (
    <DivDescription>
      {activeTodo.title ? (
        <>
          <h2>
            {activeTodo.title} {activeTodo.important ? '!!!' : '!'}
          </h2>
          <Textarea value={description} onChange={handleTextarea}></Textarea>
        </>
      ) : (
        <p>Click a task to view it's details</p>
      )}
    </DivDescription>
  );
};

export default RightSide;
