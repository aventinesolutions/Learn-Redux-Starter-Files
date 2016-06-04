import React from 'react';
import { render } from 'react-dom';

// import styles
import css from './styles/style.styl';

// import components
import App from './components/app';
import Single from './components/single';
import PhotoGrid from './components/photo_grid';

// import React Router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'frimmel',
    userLevel: 'editor'
  }
}).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postid" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));