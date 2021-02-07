/*eslint-disable*/
import React, {Component } from 'react';
import { Row, Col, Container, FormGroup, ControlLabel, FormControl, Button, Table} from 'react-bootstrap';
import * as IoIcons from 'react-icons/io';
import { history } from '../../routes';
import Home from '../Home';

const Currency = () => {

      return (
          <div>
        <Home history={history} />
            <div className="wrapper wrapper-full-page">
            <Row className="col-12 no-pad no-mar">
                  <Col className="no-pad">
                    <div className="content-title-wrapper">
                        <Container>
                            <Row>
                                <Col>
                                    <h6 className="mast-title">Currency Master</h6>
                                </Col>
                                <Col md="auto">
                                    <Button variant="primary" className="btn-fill">Export</Button>
                                </Col>
                                <Col xs lg="2">
                                    <Button className="btn-add" >Add New</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>S no</th>
                                <th>Code</th>
                                <th>Description</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Bitcoin</td>
                                <td>Invented in 2008 by an unknown person or group 
    of people using the name Satoshi Nakamoto. </td>
                                <td><IoIcons.IoIosFolderOpen /></td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Ethereum</td>
                                <td>Second-largest cryptocurrency by market 
    capitalization, after Bitcoin </td>
                                <td><IoIcons.IoIosFolderOpen /></td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Litecoin</td>
                                <td>peer-to-peer currency and open-source
    released under the MIT/X11 license</td>
                                <td><IoIcons.IoIosFolderOpen /></td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </div>
            </div>
      )
};

export default Currency;