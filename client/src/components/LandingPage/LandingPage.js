import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

class LandingPage extends Component {
    render = () => {
        return (
            <Container>
                <Row>
                    <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                        <div>
                            <h1>Welcome to My Landing Page</h1>
                            <Button variant="primary">Learn more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default LandingPage;