import projectService from '../services/projects';

// actions
export const getProjects = () => {
  return async (dispatch) => {
    const projects = await projectService.getAllMine();
    dispatch({
      type: 'GET',
      projects,
    });
  };
};

export const addProject = (title) => {
  return async (dispatch) => {
    const project = await projectService.createOne(title);
    dispatch({
      type: 'ADD',
      project,
    });
  };
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    await projectService.deleteOne(id);
    dispatch({
      type: 'DELETE',
      id,
    });
  };
};

export const clearProjects = () => {
  return {
    type: 'CLEAR',
  };
};

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET':
      return action.projects;
    case 'ADD':
      return [...state, action.project];
    case 'DELETE':
      return state.filter((p) => p.id !== action.id);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export default reducer;
