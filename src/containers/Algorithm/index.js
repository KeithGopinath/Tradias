/*eslint-disable*/
import React, { useState } from 'react';
import { Row, Col, Container, Button, Table, Modal, Form} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

const Algorithm = () => {

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
                                    <h6 className="mast-title">Algorithm Master</h6>
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
                              <th>Exchange</th>
                              <th>Description</th>
                              <th></th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                              <td>1</td>
                              <td>TripleDES</td>
                              <td>The Triple Data Encryption Algorithm, is a symmetric-key block cipher </td>
                              <td className="exchg-action-con"><FaIcons.FaEdit />
                                    <span className="trash-container">
                                    <FaIcons.FaTrashAlt />
                                    </span></td>
                              </tr>
                              <tr>
                              <td>2</td>
                              <td>Twofish</td>
                              <td>Twofish is a symmetric key block cipher with a block size of 128 bits </td>
                              <td className="exchg-action-con"><FaIcons.FaEdit />
                              <span className="trash-container">
                                    <FaIcons.FaTrashAlt />
                                    </span></td>
                              </tr>
                              <tr>
                              <td>3</td>
                              <td>MD5</td>
                              <td>Widely used hash function producing a 128-bit hash value. </td>
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
                              <Modal.Title>Create New Algorithm</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                          <Form>
                                                <Row>
                                                <Col md={{ span: 1, offset: 2 }}> 
                                                      <Form.Group>
                                                            <Form.Label>Algorithm</Form.Label>                                                            
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

export default Algorithm;