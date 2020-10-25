// actions
export const setActiveTodo = (todo) => {
  return {
    type: 'SET',
    todo,
  };
};

export const resetActiveTodo = () => {
  return {
    type: 'RESET',
  };
};

// reducer
const clearState = { title: '', important: '', description: '', id: 0 };
const reducer = (state = clearState, action) => {
  switch (action.type) {
    case 'SET':
      return action.todo;
    case 'RESET':
      return clearState;
    default:
      return state;
  }
};

export default reducer;
