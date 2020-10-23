import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const DivDescription = styled.div`
  width: 60%;
  padding: 0.5rem 1.5rem;

  & > h3 {
    margin-top: 1rem;
  }
`;

const RightSide = () => {
  const activeTodo = useSelector((state) => state.activeTodo);

  return (
    <DivDescription>
      <h3>{activeTodo.title}</h3>
    </DivDescription>
  );
};

export default RightSide;
