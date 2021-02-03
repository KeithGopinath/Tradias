/*eslint-disable*/
import React, {Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Table} from 'react-bootstrap';

const Currency = () => {

      return (
            <div className="wrapper wrapper-full-page">
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
                            <td>Edit</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Ethereum</td>
                            <td>Second-largest cryptocurrency by market 
capitalization, after Bitcoin </td>
                            <td>Edit</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Litecoin</td>
                            <td>peer-to-peer currency and open-source
released under the MIT/X11 license</td>
                            <td>Edit</td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
      )
};

export default Currency;