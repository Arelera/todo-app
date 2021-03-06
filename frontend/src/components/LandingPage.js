import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

// overall styling of this page is pretty bad ngl, i tried
const Div = styled.div`
  height: 100vh;
  padding: 2rem 2rem 2rem 1rem;
  background: #f7f9f9;

  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Slogan = styled.div`
  display: inline-block;
  padding-top: 10%;
  h1 {
    font-size: 5rem;
    position: relative; /** for z index */
    z-index: 100;
  }
  h2 {
    font-size: 3.5rem;
    position: relative;
    z-index: 100;
    color: #333;
    font-weight: 500;
  }

  position: relative;
  svg {
    max-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 1024px) {
    svg {
      top: 4rem;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 0 0.5rem 0;
    h1,
    h2 {
      font-size: 4.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 425px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const DivForm = styled.div`
  width: 550px;
  margin: 1rem 3rem 1rem 0;
  padding: 1rem 1.2rem 2rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  background: #bed8d4;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  button {
    box-shadow: none;
  }
  h3 {
    color: #333;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;

    width: 102%; /* right side had too much space left, this is probably a bad workaround */
  }
`;

const LandingPage = () => {
  const [registering, setRegistering] = useState(true);
  const user = useSelector((state) => state.user);

  return (
    <Div>
      <Slogan>
        <h1>Take the Todos You've Always Dreamed Of</h1>
        <svg viewBox="0 40 180 180" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#78D5D7"
            d="M139 57c11 6 19 19 18 30-1 12-11 23-19 33-8 11-14 21-25 31-11 11-27 22-42 20-14-2-26-17-27-32-1-16 8-31 12-45 5-15 4-28 11-35 6-6 20-5 33-5 14 0 28-2 39 3z"
          />
        </svg>
        <h2>Maybe Even Become the Todo</h2>
      </Slogan>
      <DivForm>
        <h3>
          {registering
            ? 'Create your Todo account'
            : 'Login to your Todo account'}
        </h3>
        {user.name === '' ? (
          registering ? (
            <RegisterForm setRegistering={setRegistering} />
          ) : (
            <LoginForm setRegistering={setRegistering} />
          )
        ) : (
          <Redirect to="/app" />
        )}
      </DivForm>
    </Div>
  );
};

export default LandingPage;
