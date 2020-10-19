import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  padding: 0.4rem 0.6rem;
  box-shadow: 1px 2px 10px #ddd;
  border-radius: 4px;
  font-weight: 600;
  background: hsl(0, 0%, 90%);

  border: 1px solid ${(props) => (props.important ? '#FF007F' : '#dedede')};
  color: ${(props) => (props.important ? '#FF007F' : '#222')};
  text-shadow: ${(props) => (props.important ? '0px 0px 1px  #FF007F' : '')};
`;

const Button = ({ type, onClick, children, important }) => {
  return (
    <ButtonElement important={important} type={type} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

export default Button;
