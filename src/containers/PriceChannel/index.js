/*eslint-disable*/
import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import _isEmpty from 'lodash/isEmpty';
import { history } from '../../routes';
import Card from '../../components/Card';
import logo2trad from '../../../assets/static/images/logo2trad.png';

const PriceChannel = () => {
  const onLogin = () => {
    history.push({
      pathname: '/dashboard',
    });
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/forgot-password',
    });
  };

  return (
    <div className="wrapper wrapper-full-page">
            Price Channel Content
    </div>
  )
};

export default PriceChannel;

