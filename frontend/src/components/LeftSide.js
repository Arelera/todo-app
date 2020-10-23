import React from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';

const Div = styled.div`
  padding: 0.5rem 0;
  min-width: 180px;
`;
const LeftSide = () => {
  return (
    <Div>
      <UserForm />
      <p>Projects</p>
    </Div>
  );
};

export default LeftSide;
