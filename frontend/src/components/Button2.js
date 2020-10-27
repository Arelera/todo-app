import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  font-family: 'Roboto Condensed';
  padding: 0.4rem 0.6rem;
  /* box-shadow: 1px 2px 10px #ddd;
  border-radius: 4px; */
  background: hsla(0, 0%, 98%, 0);
  font-weight: 400;
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}rem` : '0.88rem'};
  border: none;

  color: ${(props) => (props.important ? '#FF007F' : '#555')};
  text-shadow: ${(props) => (props.important ? '0px 0px 1px  #FF007F' : '')};
  cursor: pointer;

  &:hover {
    color: #2081c3;
  }
`;

const Button2 = ({ type, onClick, children, important, fontSize }) => {
  return (
    <ButtonElement
      fontSize={fontSize}
      important={important}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonElement>
  );
};

export default Button2;
