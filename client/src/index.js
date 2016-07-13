import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import storeConfig from './store';
import './styles/main.scss';

import App from './containers';

const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
