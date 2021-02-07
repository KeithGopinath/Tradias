/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Container, Button, Table, Modal, Form} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

const ExchangeCurrency = () => {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {
          setShow(true);
      };
  
      return (
            <div className="wrapper wrapper-full-page">
                  <Row className="col-12 no-pad no-mar">
                  <Col className="no-pad">
                        <div className="content-title-wrapper">
                              <Container>
                              <Row>
                                    <Col>                                          
                                          <Form.Group>
                                                <Form.Label><h6 className="mast-title">Exchange </h6></Form.Label>
                                                <Col xs lg="4" className="no-pad"> 
                                                      <Form.Control size="sm" as="select">
                                                            <option>BINANCE</option>
                                                            <option>Bitit</option>
                                                            <option>Crypto.com</option>                                                    
                                                      </Form.Control>
                                                </Col>
                                          </Form.Group>
                                    </Col>
                                    <Col md="auto">
                                          <Button variant="primary" className="btn-fill"><FaIcons.FaCloudUploadAlt /><span className="curren-action-label">Export</span></Button>
                                    </Col>
                                    <Col xs lg="2">
                                          <Button className="btn-add" onClick={handleShow} ><FaIcons.FaPlusCircle /><span className="curren-action-label">Add New</span></Button>
                                    </Col>
                              </Row>
                              </Container>
                        </div>
                        <Table striped bordered hover>
                              <thead>
                                    <tr>
                                    <th>S no</th>
                                    <th>Currency 1</th>
                                    <th>Currency 2</th>
                                    <th>CurrencyPair</th>
                                    <th>Exchange Currency Pair</th>
                                    <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>BTC</td>
                                    <td>EUR</td>
                                    <td>BTCEUR</td>
                                    <td>btc-eur</td>
                                    <td className="exchg-action-con"><FaIcons.FaEdit />
                                          <span className="trash-container">
                                          <FaIcons.FaTrashAlt />
                                          </span></td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>ETH</td>
                                    <td>USD</td>
                                    <td>ETHUSD</td>
                                    <td>eth-usd</td>
                                    <td className="exchg-action-con"><FaIcons.FaEdit />
                                    <span className="trash-container">
                                          <FaIcons.FaTrashAlt />
                                          </span></td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>LITE</td>
                                    <td>JPY</td>
                                    <td>LITEJPY</td>
                                    <td>lite-jpy</td>
                                    <td className="exchg-action-con">
                                          <FaIcons.FaEdit />
                                          <span className="trash-container">
                                                <FaIcons.FaTrashAlt />
                                          </span>
                                    </td>
                                    </tr>
                              </tbody>
                              </Table>

                              <Modal show={show} onHide={handleClose} >
                              <Modal.Header closeButton>
                                    <Modal.Title>Create New Exchange Currency</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                                <Form>
                                                      <Row>
                                                      <Col md={{ span: 1, offset: 2 }}> 
                                                            <Form.Group>
                                                                  <Form.Label>Currency 1</Form.Label>                                                            
                                                            </Form.Group>
                                                      </Col>                                    
                                                      <Col md={{ span: 4, offset: 3 }}>
                                                            <Form.Group>                                                               
                                                                  <Col xs lg="8" className="no-pad"> 
                                                                        <Form.Control size="sm" as="select">
                                                                              <option>BTC</option>
                                                                              <option>ETH</option>
                                                                              <option>LITE</option>
                                                                              <option>RIPPLE</option> 
                                                                              <option>BTC-CASH</option>                                                     
                                                                        </Form.Control>
                                                                  </Col>
                                                            </Form.Group>
                                                      </Col> 
                                                      <Col md={{ span: 1, offset: 2 }}> 
                                                            <Form.Label>Currency 2</Form.Label>    
                                                      </Col>                                    
                                                      <Col md={{ span: 4, offset: 3 }}>
                                                            <Form.Group>                                                               
                                                                  <Col xs lg="8" className="no-pad"> 
                                                                        <Form.Control size="sm" as="select">
                                                                              <option>USD</option>
                                                                              <option>JPY</option>
                                                                              <option>EUR</option>
                                                                              <option>GBP</option>  
                                                                              <option>CHF</option>                                                        
                                                                        </Form.Control>
                                                                  </Col>
                                                            </Form.Group>
                                                      </Col>                                                         
                                                      <Col md={{ span: 5, offset: 6 }} className="add-new-submit"> 
                                                            <Button  variant="primary" onClick={handleClose}>Submit</Button>
                                                      </Col>                                                                                                                                                                      
                                                      </Row>
                                                </Form>
                                          </Modal.Body>                                      
                              </Modal>

                        </Col>
                  </Row>
        </div>
      )
};

export default ExchangeCurrency;