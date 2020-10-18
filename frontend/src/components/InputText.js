import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #aaa;
  padding: 0.25rem 0.5rem;
`;

const InputText = ({ type, id, name }) => {
  return <Input type={type} id={id} name={name} />;
};

export default InputText;
