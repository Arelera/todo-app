// action creators

// login user, state will only hold "name" and "username"
export const loginUser = (user) => {
  return {
    type: 'LOGIN',
    user,
  };
};
// logout user
export const logoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};
// verify user, this for checking if the user is localstate
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
