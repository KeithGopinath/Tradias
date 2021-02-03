/*eslint-disable*/
import React, {Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const Dashboard = () => {
      return (
            <div className="wrapper wrapper-full-page">
                <Row className="col-12 no-pad no-mar">
                  <Col className="no-pad">
                    <div className="welcome-msg">
                      <div class="jumbotron">
                        <div class="container text-center">
                          <h1>Welcome to OTC dashboard</h1>      
                          <h4>Lorem ipsum dolo</h4>
                          <div> 
                              Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do eiusmod                          
                          </div>
                          <div>
                              stempor incididunt ut labore et dolore magna aligua. Ut enim ad minimde
                          </div>
                          <div>
                              veniam, quis nostrud exercitation ullamco laboris.  
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
            </div>
      )
};

export default Dashboard;