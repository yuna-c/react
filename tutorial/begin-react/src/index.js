import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import ClassCounter from './ClassCounter';

import reportWebVitals from './reportWebVitals';
import ContextSample from './ContextSample';


import ScrollBox from './ScrollBox';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello name="react" color="red" isSpecial/> */}
    {/* <ClassCounter /> */}
    {/* <ContextSample /> */}
    <App />
    <ScrollBox />
  </React.StrictMode>,
  document.getElementById('root')
);
// document에서 #root인 요소를 찾아, react App를 그 안에다가 넣겠다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
