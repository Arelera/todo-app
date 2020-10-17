import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
  combineReducers({
    todos: todosReducer,
    user: userReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
