import React, { Component } from 'react';
import './Registration.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

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
        var FirstName, LastName, UserName, PhoneNumber, Password, ConfirmPassword;
        FirstName = this.state.FirstName;
        LastName = this.state.LastName;
        UserName = this.state.UserName;
        PhoneNumber = this.state.PhoneNumber;
        Password = this.state.Password;
        ConfirmPassword = this.state.ConfirmPassword;
        if (this.Validation(FirstName, LastName, UserName, PhoneNumber, Password, ConfirmPassword)) {
            // console.log(process.env.REACT_APP_API)
            fetch(process.env.REACT_APP_API + 'signup', {
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

                    if (Result.length > 0) {
                        var alertString = ""
                        Result.forEach(element => {
                            alertString += element.error;
                            alertString += "(" + element.expected + ")\n";
                        });
                        alert(alertString);
                    }
                    else if (Result.status === 200) {
                        alert('Registration Done...')
                    }

                    this.props.history.push("/Home");
                    //<Link to={'/Login'}></Link>
                })
        }
    }
    Validation(FirstName, LastName, UserName, PhoneNumber, Password, ConfirmPassword) {
        if (FirstName === '' || LastName === '' || UserName === '' || PhoneNumber === '' || Password === '' || ConfirmPassword === '') {
            alert('Form should not be empty')
            return false
        }
        return true
    }

    render() {
        return (
            <Main>
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
            </Main>

        );
    }
}
export default Regisration;

const Main = styled.main`
    min-height: calc(100vh - 80px);
    position: relative;

    &:before{
        background: url("/images/login-background1.jpg") center center / cover
        no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`