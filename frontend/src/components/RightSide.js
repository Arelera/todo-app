import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateTodo } from '../reducers/todosReducer';
import Button from './Button';

const Div = styled.div`
  width: 60%;
  padding: 0.5rem 1.5rem;

  & > h2 {
    margin: 0.75rem 0;
  }

  /* this is for "click a todo to view it's details" */
  & > h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 50%;
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.descriptionVisible ? 'block' : 'none')};
    position: ${(props) => (props.descriptionVisible ? 'absolute' : '')};
    background: hsla(0, 0%, 96%, 0.9);
    top: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (max-width: 425px) {
    width: ${(props) => (props.descriptionVisible ? '80%' : '')};
  }
`;

const Textarea = styled.textarea`
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.5rem;
  width: 100%;
  min-height: 400px;
  max-height: 80%;
  border-radius: 4px;
  border: 1px solid #dedede;
  color: #333;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 2px 6px #ddd;

  resize: vertical;
  outline: none;
`;

const RightSide = ({ descriptionVisible, setDescriptionVisible }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const activeTodo = useSelector((state) => state.activeTodo);
  useEffect(() => {
    setDescription(activeTodo.description);
  }, [activeTodo]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (description) {
        dispatch(updateTodo({ ...activeTodo, description }));
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [description, dispatch, activeTodo]);

  const handleTextarea = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Div descriptionVisible={descriptionVisible}>
      <Button onClick={() => setDescriptionVisible(false)}>hide</Button>
      {activeTodo.title ? (
        <>
          <h2>
            {activeTodo.title} {activeTodo.important ? '!!!' : '!'}
          </h2>
          <Textarea
            value={description}
            onChange={handleTextarea}
            placeholder="Description..."
          ></Textarea>
        </>
      ) : (
        <h3>Click a task to view it's details</h3>
      )}
    </Div>
  );
};

export default RightSide;
