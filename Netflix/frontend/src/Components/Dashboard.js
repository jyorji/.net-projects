import React from 'react';
import {
    Card, CardGroup, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Dashboard = (props) => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardImg top width="100%" src="../img/nx1.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Dashboard;
