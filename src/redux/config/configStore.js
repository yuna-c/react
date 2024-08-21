// import { combineReducers, createStore } from 'redux';
// import counter from '../modules/counter';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';

// const rootReducer = combineReducers({ counter });
// const store = createStore(rootReducer);

// 객체 {key, value}
const store = configureStore({
  reducer: { counter: counterSlice }
});

export default store;
