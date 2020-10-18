import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    todos: todosReducer,
    user: userReducer,
    notification: notificationReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
