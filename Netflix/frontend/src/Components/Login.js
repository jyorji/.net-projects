import React, { Component } from 'react';
import './Registration.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Label, Alert } from 'reactstrap';

class Login extends Component {
    constructor() {

        super();
        this.state = {
            UserName: '',
            Password: '',
            isActive: false,
            errPassword: ''

        }
        this.UserName = this.UserName.bind(this);
        this.Password = this.Password.bind(this);
        this.Login = this.Login.bind(this);
        //this.errPassword = this.errPassword.bind(this);
        // this.UserName = this.UserName.bind(this);
        // this.PhoneNumber = this.PhoneNumber.bind(this);
        // this.Password = this.Password.bind(this);
    }
    UserName(event) {
        this.setState({
            UserName: event.target.value,
            isActive: false
        })
    }
    Password(event) {
        this.setState({
            Password: event.target.value,
            isActive: false
        })
    }
    Login(event) {
        if (this.state.UserName === '' || this.state.Password === '') {
            this.setState({
                isActive: true,
                errPassword: 'Username and Password should not be empty!!!'
            });
            return;
        }
        fetch(process.env.REACT_APP_API + 'login', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.title == 'Unauthorized') {
                    localStorage.setItem('isLoggedIn', false)
                    this.setState({
                        isActive: true,
                        errPassword: 'Invalid Username or Password. Please try again'
                    });
                    // alert('Invalid Username or Password. Please try again');
                }
                else {
                    localStorage.setItem('isLoggedIn', true)
                    localStorage.setItem('userToken', JSON.stringify(result.token))
                    localStorage.setItem('tokenExp', JSON.stringify(result.expiredTime))
                    this.props.history.push("/Dashboard")
                }
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
                                                <h1 className='heading'>Login</h1>
                                            </div>
                                        </div>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="text" onChange={this.UserName} placeholder="Enter Username" />
                                        </InputGroup>
                                        <InputGroup className='igroup'>
                                            <Input className='txtbox' type="password" onChange={this.Password} placeholder="Enter Password" />
                                        </InputGroup>
                                        {this.state.isActive ? <Alert name='errPassword' color='danger'>{this.state.errPassword}</Alert> : null}
                                        <Button className='rbutton' onClick={this.Login} color="danger" block>Sign In</Button>
                                        <p className='linktxt'>
                                            New to Netflix?<Link to={'/Signup'}> Sign up now.</Link>
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
export default Login;