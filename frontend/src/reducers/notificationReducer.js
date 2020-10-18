// action creators
export const giveNotification = (msg) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'RESET' });
    }, 5000);
    dispatch({
      type: 'GIVE',
      msg,
    });
  };
};

//reducer
const reducer = (state = null, action) => {
  switch (action.type) {
    case 'GIVE':
      return action.msg;
    case 'RESET':
      return null;
    default:
      return state;
  }
};

export default reducer;
