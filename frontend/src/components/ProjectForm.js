import React from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../reducers/projectsReducer';
import InputText from './InputText';

const ProjectForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(e.target.project.value));
    e.target.project.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="project"></label>
      <InputText
        id="project"
        name="project"
        placeholder="Add project (enter)"
      />
    </form>
  );
};

export default ProjectForm;
