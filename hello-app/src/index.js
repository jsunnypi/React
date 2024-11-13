import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Clock from './chapter02/Clock';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter03/CommentList';
import Comment from './chapter03/Comment';
import Counter from './chapter03/Count';
import Say from './chapter03/Say';
import ValidationSample from './chapter04/ValidationSample';
import IterationSample from './chapter04/IterationSample';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
