/*eslint-disable*/
import React, {Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

// const PriceChannel = () => {
  class PriceChannel extends Component {
    render() {
      return (
        <div className="wrapper wrapper-full-page">
                    <div className="container">
                        <form className="">
                            

                            <Row className="second-row-container">
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad">                                              
                                    <div>
                                        <label for="cars">PAIR</label>
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
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="no-pad liq-con">                                              
                                    <div>
                                        <label for="cars">SOURCE</label>
                                        <div className="dropdown-container">
                                            <select name="cars" id="cars">
                                              <option value="volvo">B2C2</option>
                                                <option value="saab">Value2</option>
                                                <option value="opel">Value3</option>
                                                <option value="audi">Value4</option>
                                            </select>
                                        </div>
                                    </div>                                                                                                         
                                </Col>                               
                                <Col md={1} sm={6} mdOffset={1} smOffset={3} className="price-size-con">                                              
                                     <FormGroup>
                                        <ControlLabel>SIZE</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={2} sm={6} mdOffset={2} smOffset={3} className="price-size-con">                                              
                                     <FormGroup>
                                        <ControlLabel>BIT SOURCE</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                <Col md={2} sm={6} mdOffset={2} smOffset={3} className="price-size-con">                                              
                                     <FormGroup>
                                        <ControlLabel>ASK SOURCE</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>                      
                                <Col md={2} sm={6} mdOffset={2} smOffset={3} className="price-size-con no-pad">                                              
                                     <FormGroup>
                                        <ControlLabel>PRICE CHANNELNAME</ControlLabel>
                                        <FormControl placeholder="" type="text" />
                                    </FormGroup>                                                                                                  
                                </Col>
                                {/* <Col md={1} sm={6} mdOffset={1} smOffset={3} className="last-con">                                              
                                     <Button block variant='primary' className='btn-fill add-new-admin'>
                                      -
                                    </Button>                                                                                              
                                </Col> */}
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

export default PriceChannel;

