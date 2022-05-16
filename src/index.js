import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgZgzM8mPn3KUGwHmgVC3cxFAxSNoXBcI",
  authDomain: "corralon-e756f.firebaseapp.com",
  projectId: "corralon-e756f",
  storageBucket: "corralon-e756f.appspot.com",
  messagingSenderId: "359090585379",
  appId: "1:359090585379:web:4df8e220f6c90d27c19696"
};

const app = initializeApp(firebaseConfig);

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
