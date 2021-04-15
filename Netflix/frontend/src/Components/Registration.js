import React, { Component } from 'react';
import './Registration.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Regisration extends Component {
    constructor() {
        super();
        this.state = {
            FirstName: '',
            LastName: '',
            UserName: '',
            PhoneNumber: '',
            Password: '',
        }
        // this.UserName = this.UserName.bind(this);
        // this.PhoneNumber = this.PhoneNumber.bind(this);
        // this.Password = this.Password.bind(this);
    }
    render() {
        return (
            <div>
                <Container>
                    <Row className='cbody'>
                        <Col md="9" lg="7" xl="5">
                            <Card className='form'>
                                <CardBody>
                                    <Form>
                                        <div>
                                            <div>
                                                <h1 className='heading'>Register</h1>
                                            </div>
                                        </div>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="text" onChange={this.FirstName} placeholder="Enter First Name" />
                                        </InputGroup>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="text" onChange={this.LastName} placeholder="Enter Last Name" />
                                        </InputGroup>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="text" onChange={this.UserName} placeholder="Enter Username" />
                                        </InputGroup>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="number" onChange={this.PhoneNumber} placeholder="Enter Phone Number" />
                                        </InputGroup>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="password" onChange={this.Password} placeholder="Enter Password" />
                                        </InputGroup>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="password" placeholder="Re-Enter Password" />
                                        </InputGroup>
                                        <Button className='rbutton' onClick={this.register} color="danger" block>Create Account</Button>
                                        <p className='linktxt'>
                                            Already a user?<Link to={'/Login'}> Sign in now.</Link>
                                        </p>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}
export default Regisration;