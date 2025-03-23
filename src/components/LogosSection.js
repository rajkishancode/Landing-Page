import React from 'react';
import { Container } from 'react-bootstrap';
import FoxLogo from '../img/Fox_Logo.png';
import LonelyPlanetLogo from '../img/LonelyPlanet_Logo.png';
import IntuitLogo from '../img/Intuit_Logo.png';
import CarvanaLogo from '../img/Carvana_Logo.png';
import KivaLogo from '../img/Kiva_Logo.png';
import TargetLogo from '../img/Target_Logo.png';
import DgvaLogo from '../img/Dgva_Logo.svg';

const LogosSection = () => {
  return (
    <div className="logos-section">
      <Container>
        <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '3rem' }}>
        <img src={FoxLogo} alt="Fox Logo" width="100" height="60" />
          <img src={LonelyPlanetLogo} alt="Lonely Planet Logo" width="120" height="40" />
          <img src={IntuitLogo} alt="Intuit Logo" width="100" height="40" />
          <img src={CarvanaLogo} alt="Carvana Logo" width="120" height="40" />
          <img src={KivaLogo} alt="Kiva Logo" width="80" height="40" />
          <img src={TargetLogo} alt="Target Logo" width="80" height="80" />
          <img src={DgvaLogo} alt="Dgva Logo" width="80" height="40" />
          
        </div>
      </Container>
    </div>
  );
};

export default LogosSection;