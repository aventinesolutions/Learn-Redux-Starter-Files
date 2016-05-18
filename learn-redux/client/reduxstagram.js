import React from 'react';
import { render } from 'react-dom';

// import styles
import css from './styles/style.styl';

// import components
import Main from './components/main';
import Single from './components/single';
import PhotoGrid from './components/photo_grid';

// import React Router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postid" component={Single}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));