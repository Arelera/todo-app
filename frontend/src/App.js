import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import LeftSide from './components/LeftSide';
import Todos from './components/Todos';
import RightSide from './components/RightSide';

import { initUser } from './reducers/userReducer';

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background: #efefef;
  padding: 0;
`;

const DivFlex = styled.div`
  display: flex;
  height: 100%;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initUser());
  }, []);

  return (
    <Div>
      <DivFlex>
        <LeftSide />
        <Todos />
        <RightSide />
      </DivFlex>
    </Div>
  );
}

export default App;
