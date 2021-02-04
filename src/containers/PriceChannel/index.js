/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Container, Button, Table, Modal, Form} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

const PriceChannel = () => {
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
                                                      <Row>
                                                            <Col xs lg="3" className="price-channel-exchg"> 
                                                                  <Form.Control size="sm" as="select">
                                                                        <option>BINANCE</option>
                                                                        <option>Bitit</option>
                                                                        <option>Crypto.com</option>                                                    
                                                                  </Form.Control>
                                                            </Col>
                                                            <Col xs lg="3" className=""> 
                                                                  <Form.Control size="sm" as="select">
                                                                        <option>BTCEUR</option>
                                                                        <option>ETHUSD</option>
                                                                        <option>LITEJPY</option>                                                    
                                                                  </Form.Control>
                                                            </Col>
                                                      </Row>
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
                                    <th>Qty</th>
                                    <th>Spread</th>
                                    <th>Price Channel Name</th>
                                    <th>Algorithm</th>
                                    <th>Auto Hedge</th>
                                    <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>0.02</td>
                                    <td>0.11</td>
                                    <td>Exchange1-BTCEUR-0.02</td>
                                    <td>BIT</td>
                                    <td> <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" className="text-center" label="" />
                                    </Form.Group></td>
                                    <td className="exchg-action-con"><FaIcons.FaEdit />
                                          <span className="trash-container">
                                          <FaIcons.FaTrashAlt />
                                          </span></td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>0.04</td>
                                    <td>0.13</td>
                                    <td>Exchange1-BTCEUR-0.04</td>
                                    <td>ASK</td>
                                    <td> <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" className="text-center" label="" />
                                    </Form.Group>
                                    </td>
                                    <td className="exchg-action-con"><FaIcons.FaEdit />
                                    <span className="trash-container">
                                          <FaIcons.FaTrashAlt />
                                          </span></td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>0.07</td>
                                    <td>0.19</td>
                                    <td>Exchange1-BTCEUR-0.07</td>
                                    <td>BIT</td>
                                    <td> <Form.Group controlId="formBasicCheckbox">
                                          <Form.Check type="checkbox" className="text-center" label="" />
                                          </Form.Group>
                                    </td>
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
                                                                  <Form.Label>Qty</Form.Label>                                                            
                                                            </Form.Group>
                                                      </Col>                                    
                                                      <Col md={{ span: 4, offset: 3 }}>
                                                            <Form.Group>                                                               
                                                                  <Col xs lg="8" className="no-pad"> 
                                                                  <Form.Control size="sm" />   
                                                                  </Col>
                                                            </Form.Group>
                                                      </Col> 
                                                      <Col md={{ span: 1, offset: 2 }}> 
                                                            <Form.Label>Spread</Form.Label>    
                                                      </Col>                                    
                                                      <Col md={{ span: 4, offset: 3 }}>
                                                            <Form.Group>                                                               
                                                                  <Col xs lg="8" className="no-pad"> 
                                                                  <Form.Control size="sm" /> 
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

export default PriceChannel;