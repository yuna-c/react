// import { combineReducers, createStore } from 'redux';
// import todos from '../modules/todos';
// import store from './configStore';
// const store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit';
import todosSilce from '../slices/todosSilce';

const store = configureStore({
  reducer: {
    todos: todosSilce
  }
});

export default store;
