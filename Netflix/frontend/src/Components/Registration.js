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
            ConfirmPassword: '',
        }
        this.FirstName = this.FirstName.bind(this);
        this.LastName = this.LastName.bind(this);
        this.UserName = this.UserName.bind(this);
        this.PhoneNumber = this.PhoneNumber.bind(this);
        this.Password = this.Password.bind(this);
        this.ConfirmPassword = this.ConfirmPassword.bind(this);
        this.Register = this.Register.bind(this);

    }
    FirstName(event) {
        this.setState({ FirstName: event.target.value })
    }
    LastName(event) {
        this.setState({ LastName: event.target.value })
    }
    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    PhoneNumber(event) {
        this.setState({ PhoneNumber: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    ConfirmPassword(event) {
        this.setState({ ConfirmPassword: event.target.value })
    }
    Register(event) {
        console.log(process.env.APP_API + 'signup')
        fetch(process.env.APP_API + 'signup', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                UserName: this.state.UserName,
                PhoneNumber: this.state.PhoneNumber,
                Password: this.state.Password,
                ConfirmPassword: this.state.ConfirmPassword
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result)
                    alert('Registration Done...')
                //this.props.history.push("/Dashboard");
                //<Link to={'/Login'}></Link>
                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })

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
                                            <Input className='txtbox' type="password" onChange={this.ConfirmPassword} placeholder="Re-Enter Password" />
                                        </InputGroup>
                                        <Button className='rbutton' onClick={this.Register} color="danger" block>Create Account</Button>
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