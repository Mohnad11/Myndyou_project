import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from "./AppRouter";
import {ThemeContext} from "./context/ThemeContext"
import AppRouter from "./AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={'light'}>
        <AppRouter />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
