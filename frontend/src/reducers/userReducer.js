import loginService from '../services/login';
import todoService from '../services/todos';

// action creators
// login user, state will only hold "name" and "username"
export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      // loginService.loginUser may throw an error, so we in try/catch
      const loggedUser = await loginService.loginUser(user);
      window.localStorage.setItem(
        'loggedTodoAppUser',
        JSON.stringify(loggedUser)
      );
      todoService.setToken(loggedUser.token);
      dispatch({
        type: 'LOGIN',
        user: loggedUser,
      });
      return {}; // for when we check lenght to see if there are errors
    } catch (err) {
      console.log('Error in userreducer: ', err);
      return { error: 'Wrong credentials' };
    }
  };
};
// logout user
export const logoutUser = () => {
  window.localStorage.removeItem('loggedTodoAppUser');
  todoService.setToken(null);
  return {
    type: 'LOGOUT',
  };
};
// verify user, this for checking if the user is in localstate
// if it's an actual user in a database. will be run on refreshes and such
export const verifyUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'VERIFY',
      user,
    });
  };
};

//reducer
const initialState = { name: '', username: '' };
const reducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
export default reducer;
