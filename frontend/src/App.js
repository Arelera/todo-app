import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LeftSide from './components/LeftSide';
import Todos from './components/Todos';
import RightSide from './components/RightSide';
import LandingPage from './components/LandingPage';
import { useDispatch, useSelector } from 'react-redux';
import { initUser } from './reducers/userReducer';

import useVisible from './useVisible';

const Div = styled.div`
  height: 100vh;
  background: #f7f9f9;
  padding: 0;
`;

const DivFlex = styled.div`
  display: flex;
  height: 100%;
`;

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  const [refProjects, isProjectsVisible, setIsProjectsVisible] = useVisible(
    false
  );

  // user not logged in, but trying to go to app? send em over to the landing page!
  return (
    <Router>
      <Div>
        <Switch>
          <Route path="/app">
            {!user.username ? (
              <Redirect to="/" />
            ) : (
              <DivFlex>
                <LeftSide
                  reference={refProjects}
                  isProjectsVisible={isProjectsVisible}
                />
                <Todos
                  setIsProjectsVisible={setIsProjectsVisible}
                  setDescriptionVisible={setDescriptionVisible}
                />
                <RightSide
                  descriptionVisible={descriptionVisible}
                  setDescriptionVisible={setDescriptionVisible}
                />
              </DivFlex>
            )}
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Div>
    </Router>
  );
}

export default App;
