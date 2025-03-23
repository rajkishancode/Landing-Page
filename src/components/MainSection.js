import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SlackAppMockup from '../img/Slack_App_Mockup.svg'; 
import PegboardBackground from '../img/Pegboard_Background.svg'; 
import FoxLogo from '../img/Fox_Logo.svg'; 
import LonelyPlanetLogo from '../img/LonelyPlanet_Logo.svg';
import IntuitLogo from '../img/Intuit_Logo.svg';
import CarvanaLogo from '../img/Carvana_Logo.svg';
import KivaLogo from '../img/Kiva_Logo.svg';
import TargetLogo from '../img/Target_Logo.svg';
import DgvaLogo from '../img/Dgva_Logo.svg';

const MainSection = () => {
  return (
    <>
      {/* Main Content Section */}
      <Container fluid className="py-5" style={{ backgroundColor: '#f8f4f0' }}>
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
            <div className="d-flex flex-wrap gap-3">
              <img src={FoxLogo} alt="Fox Logo" width="50" height="50" />
              <img src={LonelyPlanetLogo} alt="Lonely Planet Logo" width="50" height="50" />
              <img src={IntuitLogo} alt="Intuit Logo" width="50" height="50" />
              <img src={CarvanaLogo} alt="Carvana Logo" width="50" height="50" />
              <img src={KivaLogo} alt="Kiva Logo" width="50" height="50" />
              <img src={TargetLogo} alt="Target Logo" width="50" height="50" />
              <img src={DgvaLogo} alt="Dgva Logo" width="50" height="50" />
            </div>
          </Col>

          {/* Right Side */}
          <Col md={6}>
            <img src={SlackAppMockup} alt="Slack App Mockup" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Lower Section */}
      <Container fluid className="py-5 text-center" style={{ backgroundImage: `url(${PegboardBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="display-5 fw-bold text-dark">Now is your moment to build a better tomorrow</h2>
        <p className="lead text-dark">
          We’ve seen what the future can be. Now it’s time to decide what it will be.
        </p>
        <Button variant="outline-dark">Watch Video</Button>
      </Container>
    </>
  );
};

export default MainSection;