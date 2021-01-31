import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import PriceChannel from './containers/PriceChannel'

export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/price-channel" component={PriceChannel} /> */}
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

