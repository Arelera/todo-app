import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from './reducers/todosReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
