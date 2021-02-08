/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import _isEmpty from 'lodash/isEmpty';
import { history } from '../../routes';
import Card from '../../components/Card';
import Axios from 'axios'
import logo2trad from '../../../assets/static/images/logo2trad.png';
// import bankhaus from '../../../assets/static/images/bankhaus.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../actionCreators/Login';

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailMsg, setEmailMsg] = useState(false);
  const [passMsg, setPassMsg] = useState(false);

  const dispatch = useDispatch();

  const handleUserName = (username) => {
    setUserName(username);
  }
  const handlePassword = (password) => {
    setPassword(password);
  }
  const onLogin = () => {
    if(username === "") {
      setEmailMsg(true) 
    } else if(username !== "") {
      setEmailMsg(false) 
    } if(password === "") {
      setPassMsg(true)
    } else if(password !== "") {
      setPassMsg(false)
    }
    if(username !== "" && password !== "") {
      const loginDetails = {
        "username": username,
        "password": password
      }
      // dispatch(loginUserAction(loginDetails));
      Axios.post('http://106.51.154.173:8181/websocket/userlogin', loginDetails).then((response) => {
          if (response.data.statusMessage === "SIGN_IN_SUCCESS") {
              sessionStorage.setItem("authToken", JSON.stringify(response.data.token));
              history.push('/dashboard')
              alert("Logged in successfully")
          } else if (response.data.statusMessage === "INVALID_USERNAME_OR_PASSWORD") {
              alert("Invalid username or password")
          }
      }).catch(error => {
          alert("Network failed")
      });
   }
  };

  // const forgotPassword = (e) => {
  //   e.preventDefault();
  //   history.push({
  //     pathname: '/forgot-password',
  //   });
  // };

  return (
    <div className="wrapper wrapper-full-page">
      <div className="full-page login-page">
        <div className="content">
          <div className="container">
            <Row className="login-body">
              <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                 <form className="login-container">
                  <div className='text-center login-header-logo'>
                    <img src={logo2trad} className='mb-5' className="login-img" />                   
                  </div>
                  <Card
                    hidden={false}
                    textCenter
                    title="Login"
                    content={
                      <div>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control placeholder="Enter email" type="email" value={username} onChange={e => handleUserName(e.target.value)} />
                          {emailMsg ? <span className="error">{'*Please enter a valid email'}</span> : null}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control placeholder="Password" type="password" autoComplete="off" value={password} onChange={e => handlePassword(e.target.value)} />
                          {passMsg ? <span className="error">{'*Please enter a valid password'}</span> : null}
                        </Form.Group>
                        <Col md={12} sm={12} className="rember-me-container">
                          <div className='text-left cursor rember-me'><input type="checkbox" />Remember me</div>
                        </Col>
                        <Col md={12} sm={12}>
                          {/* <div className='text-right cursor' onClick={forgotPassword}>Forgot Password?</div> */}
                          <div className='text-right cursor'>Forgot Password?</div>
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

