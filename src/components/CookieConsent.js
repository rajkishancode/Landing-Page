import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Add logic to save the user's consent (e.g., in localStorage)
  };

  if (!isVisible) return null;

  return (
    <Card
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        maxWidth: '300px',
        zIndex: 1000,
      }}
    >
      <Card.Body>
        <Card.Text>
          This website uses cookies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleAccept}>
            Accept All Cookies
          </Button>
          <Button variant="link">More Info</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CookieConsent;