/*eslint-disable*/
import React, {Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

// const AdminOrder = () => {
    class AdminOrder extends Component {

        render() {
           
            return (
                <div className="wrapper wrapper-full-page">
                    <div className="container">
                        <form className="">
                            <Row className="">
                                <Col md={2} sm={6} mdOffset={2} smOffset={3}>                                              
                                    <div>
                                        <label for="cars">Target Exchange</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">Bitfnix</option>
                                                <option value="saab">Exchange2</option>
                                                <option value="opel">Exchange3</option>
                                                <option value="audi">Exchange4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                         
                                </Col>
                                <Col md={2} sm={6} mdOffset={2} smOffset={3}>                                              
                                    <div>
                                        <label for="cars">Pair Source</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">BTCEUR</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                         
                                </Col>
                                <Col md={3} sm={6} mdOffset={3} smOffset={3}>                                              
                                    <div className="save-config-btn">
                                        <Button block variant='primary' className='btn-fill' size="sm">
											SAVE CONFIGURATION
									    </Button>										
                                    </div>                                                                                                         
                                </Col>
                                <Col md={3} sm={6} mdOffset={3} smOffset={3}>                                              
                                    <div className="admin-order">
                                        <Button block variant='primary' className='btn-fill' size="sm">
											PLACE ADMIN ORDER
									    </Button>										
                                    </div>                                                                                                         
                                </Col>
                                <Col md={2} sm={6} mdOffset={3} smOffset={3}>                                              
                                    <div  className="start">
                                        <Button variant="success">START</Button>{' '}									
                                    </div>                                                                                                         
                                </Col>
                            </Row>


                            <Row className="second-row-container">
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad">                                              
                                    <div>
                                        <label for="cars">PAIR SOURCE</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">Bitfnix</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                         
                                </Col>
                                <Col md={1} sm={6} mdOffset={3} smOffset={3} className="no-pad liq-con">                                              
                                    <div>
                                        <label for="cars">LIQUIDITY PROVIDER</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">Value1</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                         
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad price-chan-con">                                              
                                    <div>
                                        <label for="cars">PRICE CAHNNEL</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">Value1</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                           
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="bit-con">                                              
                                     <FormGroup>
                                        <ControlLabel>BID</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="ask-con">                                              
                                     <FormGroup>
                                        <ControlLabel>ASK</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="last-con">                                              
                                     <FormGroup>
                                        <ControlLabel>LAST</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad automode-con">                                              
                                    <div>
                                        <label for="cars">AUTOMODE</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">Value1</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                           
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="last-con">                                              
                                     <FormGroup>
                                        <ControlLabel>SPREAD</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad last-con">                                              
                                    <FormGroup>
                                        <ControlLabel>DIFFBID</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                   
                                </Col>
                            </Row>

                            <Row className="second-row-container">
                               
                                <Col md={1} sm={6} mdOffset={3} smOffset={3} className="no-pad">                                              
                                <FormGroup>
                                        <ControlLabel>DIFFASK</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                 
                                </Col>
                                <Col md={2} sm={6} mdOffset={2} smOffset={3} className="no-pad liq-con">                                              
                                <FormGroup>
                                        <ControlLabel>DIFFBID CENT</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                    
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad liq-con">                                              
                                     <FormGroup>
                                        <ControlLabel>SIZE BID</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad liq-con">                                              
                                     <FormGroup>
                                        <ControlLabel>SIZE ASK</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={2} sm={6} mdOffset={2} smOffset={3} className="no-pad liq-con">                                              
                                     <FormGroup>
                                        <ControlLabel>TIME DELAY(SEC)</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad autohedge-con">                                              
                                    <div>
                                        <label for="cars">AUTOHEDGE</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                                <option value="volvo">Value1</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                           
                                </Col>
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="last-con">                                              
                                     <Button block variant='primary' className='btn-fill add-new-admin'>
											+
									  </Button>                                                                                              
                                </Col>
                            </Row>
                        </form>
                    </div>  
                </div>
              )

        }
};

export default AdminOrder;

