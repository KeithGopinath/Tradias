/*eslint-disable*/
import React, {Component } from 'react';
// import { Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { history } from '../../routes';
import Home from '../Home';

const PriceChannel = () => {

      return (
            <div>
            <Home history={history} />
            <div >
                 Price Channel Layout
            </div>
            </div>
      )
};

export default PriceChannel;