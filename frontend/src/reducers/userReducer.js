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
      return { error: 'Invalid credentials' };
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
// HAVEN'T USED YET, so i dont't think it's gonna be here for much longer...
export const verifyUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'VERIFY',
      user,
    });
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    const createdUser = await loginService.createUser(user);
    console.log('WTF2, createdUser: ', createdUser);
    dispatch({
      type: 'CREATE',
      user: { name: createdUser.name, username: createdUser.username },
    });
  };
};

export const initUser = () => {
  return async (dispatch) => {
    const userJson = window.localStorage.getItem('loggedTodoAppUser');
    if (userJson) {
      const { name, username, token } = JSON.parse(userJson);
      dispatch({
        type: 'INIT',
        user: { name, username },
        token,
      });
      // if user is logged in or not, we return true/false for setLoggedIn in userForm
      return true;
    }
    return false;
  };
};

//reducer
const initialState = { name: '', username: '' };
// state not being null "maaaaybee" could break some stuff,
// i forgot if it needed to be null
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return initialState;
    case 'INIT':
      todoService.setToken(action.token);
      return action.user;
    case 'CREATE':
      return state; // we need user to login for token
    default:
      return state;
  }
};
export default reducer;
