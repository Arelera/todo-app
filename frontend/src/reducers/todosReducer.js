import todoService from '../services/todos';

// action creators
export const initTodos = () => {
  return async (dispatch) => {
    const todos = await todoService.getAll();
    dispatch({
      type: 'INIT_TODOS',
      todos,
    });
  };
};

export const createTodo = (title) => {
  return async (dispatch) => {
    const todo = await todoService.createOne(title);
    console.log('we here?');
    dispatch({
      type: 'CREATE_TODO',
      todo,
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    todoService.deleteOne(id);
    dispatch({
      type: 'DELETE_TODO',
      id,
    });
  };
};

export const updateTodo = (todo) => {
  return async (dispatch) => {
    todoService.updateOne(todo);
    dispatch({
      type: 'UPDATE_TODO',
      todo,
    });
  };
};

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return [...state, action.todo];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id !== action.todo.id ? todo : action.todo
      );
    case 'INIT_TODOS':
      return action.todos;
    default:
      return state;
  }
};

export default reducer;
