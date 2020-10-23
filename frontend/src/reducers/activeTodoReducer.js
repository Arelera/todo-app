// actions
export const setActiveTodo = (todo) => {
  return {
    type: 'SET',
    todo,
  };
};

// reducer
const reducer = (state = { title: '', important: '' }, action) => {
  switch (action.type) {
    case 'SET':
      return action.todo;
    default:
      return state;
  }
};

export default reducer;
