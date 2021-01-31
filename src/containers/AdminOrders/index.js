/* eslint-disable no-const-assign */
/* eslint-disable import/first */
import React, { useState } from 'react';
// import Dashboard from '../../containers/Dashboard';
// import Sidebar from '../../components/SideNav';
import { Row, Col, Form, Button } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';


// let i = 0;
// const original = document.getElementById('subParent');

// function duplicate() {
//   const admin = [];
//   cont newAdmin = [...admin]
//   console.log('hi');
// //   const clone = original.cloneNode(true); // "deep" clone
// //   clone.id = ' subParent '++i // there can only be one element with an ID
// //   original.parentNode.appendChild(clone);
// }


const AdminOrders = () => {
  // const [list, setList] = useState([]);

  const AddButton = () => (
    <Row className="showi-col-12">
      <Col>
        <div className="plus-icon">
          <button id="button" onClick={Add} ><BsIcons.BsPlusCircle className="Plus-logo" /></button>;
        </div>
      </Col>
    </Row>);


  const AdminRow = (
    <div className="subParent-col-12">
      <AddButton />
      <Row className="show col-11">
        <Col xl={6} sm={12}>
          <Row>
            <Col xl={4} sm={4}>
              <Form.Group>
                <Form.Label>PAIR SOURCE</Form.Label>
                <Form.Control size="sm" as="select" />
              </Form.Group>
            </Col>
            <Col xl={4} sm={4} >
              <Form.Group>
                <Form.Label>LIQUIDITY PROVIDER</Form.Label>
                <Form.Control size="sm" as="select">
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xl={4} sm={4} >
              <Form.Group>
                <Form.Label>PRICE CHANNEL</Form.Label>
                <Form.Control size="sm" as="select" />
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col xl={6} sm={12}>
          <div className="row content">
            <div className="col-md-12">
              <Row>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>BID</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>ASK</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>LAST</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>AUTOMODE</Form.Label>
                        <Form.Control size="sm" as="select">
                          <option>Small select</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>SPREAD</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="show col-11">
        <Col xl={6} sm={12}>
          <Row>
            <Col xl={3} sm={3}>
              <Form.Group>
                <Form.Label>DIFASK</Form.Label>
                <Form.Control size="sm" />
              </Form.Group>
            </Col>
            <Col xl={3} sm={3} >
              <Form.Group>
                <Form.Label>DIFFBID CENT</Form.Label>
                <Form.Control size="sm" />
              </Form.Group>
            </Col>
            <Col xl={3} sm={3} >
              <Form.Group>
                <Form.Label>DIFFASK CENT</Form.Label>
                <Form.Control size="sm" />
              </Form.Group>
            </Col>
            <Col xl={3} sm={3} >
              <Form.Group>
                <Form.Label>SIZEBID</Form.Label>
                <Form.Control size="sm" />
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col xl={6} sm={12}>
          <div className="row content">
            <div className="col-md-12">
              <Row>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>SIZEASK</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>TIME DELAY(SEC)</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>AUTO HEDGE</Form.Label>
                        <Form.Control size="sm" as="select">
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>DIFFBID</Form.Label>
                        <Form.Control size="sm" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>);

  const [newlist, updateNewlist] = useState([AdminRow]);
  const Add = () => {
    // const abc = list.splice(i, 1);
    // setList([...list]);
    // newlist.push(abc[0]);
    // updateNewlist(newlist);
    const abc = [];
    newlist.push(...abc);
    updateNewlist(newlist);
  };

  return (
    <div className="adminContain">
      <div className="dash-contain">
        {/* <Sidebar /> */}
      </div>
      <div className="admin-body">
        <Row className="show col-11">
          <Col xl={6} sm={12}>
            <Row>
              <Col md={6} sm={6}>
                <Form.Group>
                  <Form.Label>TARGET EXCHANGE</Form.Label>
                  <Form.Control size="sm" as="select">
                    <option>Bitfinex</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} sm={6}>
                <Form.Group>
                  <Form.Label>PAIR SOURCE</Form.Label>
                  <Form.Control size="sm" as="select">
                    <option>BTCEUR</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col xl={6} sm={12}>
            <div className="row content">
              <div className="col-md-12">
                <Row>
                  <Col className="butn-rows" md={4}>
                    <Button className="admin-butn " bsStyle="success">
                      Save Configuration
                    </Button>
                  </Col>
                  <Col className="butn-rows" md={4}>
                    <Button className="admin-butn" bsStyle="success">
                      Place Admin Order
                    </Button>
                  </Col>
                  <Col className="butn-rows" md={4}>
                    <Button className="admin-butn" bsStyle="success">
                      Start
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {newlist.map((data) =>
        <div>{data}</div>)}
      {/* { list.map(() => (
        <div className="subParent-col-12">
          <Row className="showi-col-12">
            <Col>
              <div className="plus-icon">
                <button id="button" onClick={Add} ><BsIcons.BsPlusCircle className="Plus-logo" /></button>;
              </div>
            </Col>
          </Row>
          <Row className="show col-11">
            <Col xl={6} sm={12}>
              <Row>
                <Col xl={4} sm={4}>
                  <Form.Group>
                    <Form.Label>PAIR SOURCE</Form.Label>
                    <Form.Control size="sm" as="select" />
                  </Form.Group>
                </Col>
                <Col xl={4} sm={4} >
                  <Form.Group>
                    <Form.Label>LIQUIDITY PROVIDER</Form.Label>
                    <Form.Control size="sm" as="select">
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xl={4} sm={4} >
                  <Form.Group>
                    <Form.Label>PRICE CHANNEL</Form.Label>
                    <Form.Control size="sm" as="select" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col xl={6} sm={12}>
              <div className="row content">
                <div className="col-md-12">
                  <Row>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>BID</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>ASK</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>LAST</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>AUTOMODE</Form.Label>
                            <Form.Control size="sm" as="select">
                              <option>Small select</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>SPREAD</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="show col-11">
            <Col xl={6} sm={12}>
              <Row>
                <Col xl={3} sm={3}>
                  <Form.Group>
                    <Form.Label>DIFASK</Form.Label>
                    <Form.Control size="sm" />
                  </Form.Group>
                </Col>
                <Col xl={3} sm={3} >
                  <Form.Group>
                    <Form.Label>DIFFBID CENT</Form.Label>
                    <Form.Control size="sm" />
                  </Form.Group>
                </Col>
                <Col xl={3} sm={3} >
                  <Form.Group>
                    <Form.Label>DIFFASK CENT</Form.Label>
                    <Form.Control size="sm" />
                  </Form.Group>
                </Col>
                <Col xl={3} sm={3} >
                  <Form.Group>
                    <Form.Label>SIZEBID</Form.Label>
                    <Form.Control size="sm" />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col xl={6} sm={12}>
              <div className="row content">
                <div className="col-md-12">
                  <Row>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>SIZEASK</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>TIME DELAY(SEC)</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>AUTO HEDGE</Form.Label>
                            <Form.Control size="sm" as="select">
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>DIFFBID</Form.Label>
                            <Form.Control size="sm" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>))} */}
    </div>
  );
};

export default AdminOrders;

