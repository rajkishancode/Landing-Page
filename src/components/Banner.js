import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        backgroundColor: '#1264a3',
        color: '#fff',
        padding: '10px 0',
        fontSize: '1rem',
        position: 'relative',
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. Let’s go →
        </div>
        <Button
          variant="link"
          onClick={handleClose}
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: 0,
          }}
        >
          ✕
        </Button>
      </Container>
    </div>
  );
};

export default Banner;