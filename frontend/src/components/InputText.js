import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #dedede;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  color: #333;
  background-color: hsl(0, 0%, 94%);
  box-shadow: 1px 2px 6px #ddd;
  outline: none;
  margin-bottom: 0.5rem;
`;

const InputText = ({ type, id, name }) => {
  return <Input type={type} id={id} name={name} />;
};

export default InputText;
