import React,{Component} from 'react';
import {Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from 'reactstrap';

class Regisration extends Component
{
    constructor()
    {
        super();
        this.state = {
            UserName: '',
            PhoneNumber: '',
            Password: '',
        }
        // this.UserName = this.UserName.bind(this);
        // this.PhoneNumber = this.PhoneNumber.bind(this);
        // this.Password = this.Password.bind(this);
    }
    render(){
        return(
            <div className ="app flex-row align-items-center">
                <h1 className = "mt-5 d-flex justify-content-center">Netflix</h1>
                <Container>
                    <Row className= "justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className = "mx-4">
                                <CardBody className = "p-4">
                                    <Form>
                                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.UserName} placeholder="Enter Username" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="number"  onChange={this.PhoneNumber} placeholder="Enter Phone Number" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>
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