import React from 'react';
import styled from 'styled-components';

import LeftSide from './components/LeftSide';
import Todos from './components/Todos';
import RightSide from './components/RightSide';

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f4f4f4;
  padding: 0;
`;

const DivFlex = styled.div`
  display: flex;
  height: 100%;
`;

function App() {
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
