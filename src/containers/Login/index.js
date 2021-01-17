/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import _isEmpty from 'lodash/isEmpty';
import { history } from '../../routes';
import Card from '../../components/Card';

const Login = () => {

  const onLogin = () => {
    history.push({
      pathname: '/forgot-password',
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
      <div
        className="full-page login-page"
        data-color="black"
      >
        <div className="content">
          <div className="container">
            <Row>
              <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                <form>
                  <div className='text-center'>
                    <img src='static/images/lg_logo_white.png' className='mb-5' style={{ 'width': '100%', 'maxWidth': '230px', 'margin-bottom': '20px' }} />
                  </div>
                  <Card
                    hidden={false}
                    textCenter
                    title="Login"
                    content={
                      <div>
                        <FormGroup>
                          <ControlLabel>Username</ControlLabel>
                          <FormControl placeholder="Enter email" type="email" onChange={e => setUsername(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                          <ControlLabel>Password</ControlLabel>
                          <FormControl placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} autoComplete="off" />
                        </FormGroup>
                        <div className='text-right cursor' onClick={forgotPassword}>Forgot Password?</div>
                      </div>
                    }
                    legend={
                      <Button block variant='primary' className='btn-fill' onClick={onLogin}>
                        Login
                    </Button>
                    }
                    ftTextCenter
                  />
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;

