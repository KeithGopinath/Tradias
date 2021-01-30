/*eslint-disable*/
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import _isEmpty from 'lodash/isEmpty';
import { history } from '../../routes';
import Card from '../../components/Card';
import logo2trad from '../../../assets/static/images/logo2trad.png';

const Login = () => {
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
      <div
        className="full-page login-page"
      >
        <div className="content">
          <div className="container">
            <Row className="login-body">
              <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                 <form className="login-container">
                  <div className='text-center login-header-logo'>
                    <img src={logo2trad} className='mb-5' style={{ 'width': '100%', 'maxWidth': '230px', 'margin-bottom': '20px' }} />
                  </div>
                  <Card
                    hidden={false}
                    textCenter
                    title="Login"
                    content={
                      <div>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control placeholder="Enter email" type="email" onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} autoComplete="off" />
                        </Form.Group>
                        <Col md={12} sm={12} className="rember-me-container">
                          <div className='text-left cursor rember-me'><input type="checkbox" />Remember me</div>
                        </Col>
                        <Col md={12} sm={12}>
                          <div className='text-right cursor' onClick={forgotPassword}>Forgot Password?</div>
                        </Col>
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

