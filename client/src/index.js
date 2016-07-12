import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import storeConfig from './store';
import './styles/main.scss';

const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
