// action
export const selectProject = (id) => {
  return {
    type: 'SELECT',
    id,
  };
};

// reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'SELECT':
      return action.id;
    default:
      return state;
  }
};

export default reducer;
