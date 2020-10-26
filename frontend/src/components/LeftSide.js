import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import UserForm from './UserForm';
import ProjectForm from './ProjectForm';
import Project from './Project';
import { deleteProject, getProjects } from '../reducers/projectsReducer';
import projectService from '../services/projects';
import { selectProject } from '../reducers/selectedProjectReducer';

const Div = styled.div`
  padding: 0.5rem;
  min-width: 180px;
`;

const H2 = styled.h2`
  margin: 0.75rem 0 0 0;
`;

const Ul = styled.ul`
  border-top: 2px solid #78d5d7;

  & > li:first-child {
    margin-top: 0.5rem;
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
      return dispatch(getProjects());
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

  return (
    <Div>
      <H2>Projects</H2>
      <ProjectForm />
      <Ul>
        <Project id={0} handleSelect={() => handleSelect(0)}>
          All
        </Project>
        {projects.map((p) => (
          <Project
            handleSelect={() => handleSelect(p.id)}
            handleDelete={() => handleDelete(p.id)}
            key={p.id}
            isActive={isActive(p.id)} // this kinda makes no sense but it works if its not a callback
          >
            {p.title}
          </Project>
        ))}
      </Ul>
      <UserForm />
    </Div>
  );
};

export default LeftSide;
