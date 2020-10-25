import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import todosReducer from './reducers/todosReducer';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';
import activeTodoReducer from './reducers/activeTodoReducer';
import projectsReducer from './reducers/projectsReducer';
import selectedProjectReducer from './reducers/selectedProjectReducer';

const store = createStore(
  combineReducers({
    todos: todosReducer,
    user: userReducer,
    notification: notificationReducer,
    activeTodo: activeTodoReducer,
    projects: projectsReducer,
    selectedProject: selectedProjectReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
