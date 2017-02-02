import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from 'react-router/BrowserRouter';
import store from './store'

ReactDOM.render(
  <Router><App store={store} {...this} /></Router>,
  document.getElementById('root')
);
