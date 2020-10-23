import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.5rem;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 4px;
  color: #333;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 2px 6px #ddd;
  outline: none;
`;

const InputText = ({ type, id, name, placeholder }) => {
  return <Input type={type} id={id} name={name} placeholder={placeholder} />;
};

export default InputText;
