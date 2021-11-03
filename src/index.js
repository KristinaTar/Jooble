import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import AppContainer from "./AppContainer";
import store from "./reduxStore";

ReactDOM.render(
  <React.StrictMode>
    <AppContainer store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

