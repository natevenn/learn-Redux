import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/app';
import single from './components/single';
import photoGrid from './components/photoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={photoGrid}></IndexRoute>
        <Route path="/view/:postId" component={single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById("root"));
