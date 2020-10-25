import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Li = styled.li`
  width: 100%;
  background: #fff;
  padding: 0.2rem 0.5rem;
  margin: 0.25rem 0;
  border-radius: 6px;
  box-shadow: 0px 1px 5px #ccc;
  text-align: left;
  border: 2px solid ${(props) => (props.isActive ? '#2081C3' : 'transparent')};

  display: flex;
  justify-content: space-between;

  transition: border 200ms ease;
  &:hover {
    border: 2px solid #2081c3;
  }
`;

const Project = ({ id, children, handleSelect, handleDelete, isActive }) => {
  return (
    <Li isActive={isActive} onClick={handleSelect}>
      <p>{children}</p>
      {id !== 0 && <Button onClick={handleDelete}>del</Button>}
    </Li>
  );
};

export default Project;
