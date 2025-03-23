import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PegboardScreenshot from '../img/Pegboard_Screenshot.png';

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* First Part: Pegboard Screenshot */}
          <Col md={4} className="text-center">
            <img
              src={PegboardScreenshot}
              alt="Pegboard Background"
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
            />
          </Col>

          {/* Second Part: Text and Button */}
          <Col md={8} className="text-center text-md-start">
            <h4 className="display-5 fw-bold text-dark">Now is your moment to build a better tomorrow</h4>
            <p className="lead text-dark">
              We’ve seen what the future can be. Now it’s time to decide what it will be.
            </p>
            <Button variant="outline-dark">Watch Demo</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;