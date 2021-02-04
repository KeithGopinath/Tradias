/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Container, Button, Table, Modal, Form} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

const Exchange = () => {
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
                                          <h6 className="mast-title">Exchange Master</h6>
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
                                    <th>Algorithm</th>
                                    <th>Description</th>
                                    <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Crypto.com</td>
                                    <td>The platform is designed to deliver traders and investors with a wide range of cryptos.  </td>
                                    <td className="exchg-action-con"><FaIcons.FaEdit />
                                          <span className="trash-container">
                                          <FaIcons.FaTrashAlt />
                                          </span></td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>BINANCE</td>
                                    <td>Binance is the world’s largest and fastest platforms in the crypto market. </td>
                                    <td className="exchg-action-con"><FaIcons.FaEdit />
                                    <span className="trash-container">
                                          <FaIcons.FaTrashAlt />
                                          </span></td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>Bitit</td>
                                    <td>Experienced crypto investors with access to the crypto market from all corners of the globe. </td>
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
                                    <Modal.Title>Create New Exchange</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
                                                <Form>
                                                      <Row>
                                                      <Col md={{ span: 1, offset: 2 }}> 
                                                            <Form.Group>
                                                                  <Form.Label>Exchange</Form.Label>                                                            
                                                            </Form.Group>
                                                      </Col>                                    
                                                      <Col md={{ span: 4, offset: 3 }}>
                                                            <Form.Control size="sm" />
                                                      </Col> 
                                                      <Col md={{ span: 1, offset: 2 }}> 
                                                            <Form.Group>
                                                                  <Form.Label>Description</Form.Label>                                                            
                                                            </Form.Group>
                                                      </Col>                                    
                                                      <Col md={{ span: 0, offset: 3 }}>
                                                            <Form.Control size="md" as="textarea" rows={3} />
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

export default Exchange;