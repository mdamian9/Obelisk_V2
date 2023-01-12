import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LandingPage.css';

class LandingPage extends Component {

    onClickSignUp = () => {
        alert('signup!');
    };

    render = () => {
        return (
            <Container id="main-container">
                <Row>
                    <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
                        <div>
                            <h1>Welcome to My Landing Page</h1>
                            <Button onClick={this.onClickSignUp} variant="primary">Learn more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default LandingPage;