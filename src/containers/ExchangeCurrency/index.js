/*eslint-disable*/
import React, {Component } from 'react';
// import { Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { history } from '../../routes';
import Home from '../Home';

const ExchangeCurrency = () => {

      return (
            <div>
            <Home history={history} />
                <div className="exc"> Exchange Currency Layout
                </div>
            </div>
      )
};

export default ExchangeCurrency;