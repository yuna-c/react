import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from "@sentry/react";
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://bef3384d1b734bdf96a35a9650683a33@o1065634.ingest.sentry.io/6059286",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
