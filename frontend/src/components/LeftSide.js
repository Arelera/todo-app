import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ProjectForm from './ProjectForm';
import Project from './Project';
import {
  clearProjects,
  deleteProject,
  getProjects,
} from '../reducers/projectsReducer';
import projectService from '../services/projects';
import { selectProject } from '../reducers/selectedProjectReducer';
import Button from './Button';
import { logoutUser } from '../reducers/userReducer';
import { cleanList } from '../reducers/todosReducer';
import { resetActiveTodo } from '../reducers/activeTodoReducer';
import { useHistory } from 'react-router-dom';

const Div = styled.div`
  padding: 0.5rem;
  min-width: 180px;
  overflow-y: scroll;

  position: relative;
  & > button {
    position: absolute;
    top: 15px;
    right: 10px;
  }
`;

const H2 = styled.h2`
  margin: 0.75rem 0 0 0;
`;

const Ul = styled.ul`
  border-top: 2px solid #78d5d7;

  & > li:first-child {
    margin-top: 0.5rem;
  }

  .fade-enter {
    opacity: 0;
    transform: translate(0, -20px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 200ms ease-out;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transform: translate(-20px, 0px);
    transition: all 150ms ease-out;
  }
`;

const LeftSide = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userJson = window.localStorage.getItem('loggedTodoAppUser');
    if (userJson) {
      const token = JSON.parse(userJson).token;
      projectService.setToken(token);

      dispatch(getProjects());
    }
  }, [dispatch]);

  const projects = useSelector((state) => state.projects);

  const handleSelect = (id) => {
    dispatch(selectProject(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };

  const selectedProject = useSelector((state) => state.selectedProject);
  const isActive = (id) => selectedProject === id;

  const history = useHistory(); // *******

  const handleLogout = () => {
    history.push('/'); // idk about this, doesn't help
    dispatch(logoutUser());
    dispatch(cleanList());
    dispatch(resetActiveTodo());
    dispatch(clearProjects());
  };

  return (
    <Div>
      <H2>Projects</H2>
      <ProjectForm />
      <TransitionGroup component={Ul}>
        <Project id={0} handleSelect={() => handleSelect(0)}>
          All
        </Project>

        {projects.map((p) => (
          <CSSTransition classNames="fade" timeout={150}>
            <Project
              handleSelect={() => handleSelect(p.id)}
              handleDelete={() => handleDelete(p.id)}
              key={p.id}
              isActive={isActive(p.id)} // this kinda makes no sense but it works if its not a callback
            >
              {p.title}
            </Project>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Button onClick={handleLogout}>logout</Button>
    </Div>
  );
};

export default LeftSide;
