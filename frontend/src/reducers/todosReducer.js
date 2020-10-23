import todoService from '../services/todos';

// action creators
export const initTodos = () => {
  return async (dispatch) => {
    const todos = await todoService.getAllMine();
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

export const cleanList = () => {
  return {
    type: 'CLEAN_LIST',
  };
};

// export const initToken = () => {
//   return async (dispatch) => {
//     const userJson = window.localStorage.getItem('loggedTodoAppUser');
//     if (userJson) {
//       const token = JSON.parse(userJson).token;

//       dispatch({
//         type: 'INIT_TOKEN',
//         token,
//       });
//     }
//   };
// };

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
    case 'CLEAN_LIST':
      return [];
    case 'INIT_TODOS':
      return action.todos;
    case 'INIT_TOKEN':
      todoService.setToken(action.token);
      return state;
    default:
      return state;
  }
};

export default reducer;
