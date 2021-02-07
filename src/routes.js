import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
// import Dashboard from './containers/Dashboard';
import Admin from './containers/AdminOrders';
import Currency from './containers/Currency';
import Exchange from './containers/Exchange';
import Algorithm from './containers/Algorithm';
import ExchangeCurrency from './containers/ExchangeCurrency';
import PriceChannel from './containers/PriceChannel';


export const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/currency" component={Currency} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/algorithm" component={Algorithm} />
        <Route path="/exchange currency" component={ExchangeCurrency} />
        <Route path="/price channel" component={PriceChannel} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </React.Fragment>
  </Router >
);

export default Routes;

