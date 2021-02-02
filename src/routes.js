import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import Admin from './containers/AdminOrders';

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

