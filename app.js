import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';

const appWrapper = document.getElementById("app-mount-point");
appWrapper ? ReactDOM.render(
  <App />,
  appWrapper) : null;