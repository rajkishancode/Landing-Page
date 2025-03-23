import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SlackAppMockup from '../img/Slack_App_Mockup.svg';

const MainSection = () => {
  return (
    <Container className="py-5" style={{ backgroundColor: '#f8f4f0' }}>
      <Row className="align-items-center">
        {/* Left Side */}
        <Col md={6} className="text-dark px-5">
          <h1 className="display-4 fw-bold">Slack is where the future works</h1>
          <p className="lead">
            Transform the way you work with one place for everyone and everything you need to get stuff done.
          </p>
          <div className="mb-4">
            <Button variant="primary" className="me-2" style={{ backgroundColor: '#4a154b', borderColor: '#4a154b' }}>
              Try for Free
            </Button>
            <Button variant="outline-primary">Sign up with Google</Button>
          </div>
        </Col>

        {/* Right Side */}
        <Col md={6}>
          <img src={SlackAppMockup} alt="Slack App Mockup" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;