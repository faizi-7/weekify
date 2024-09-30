// src/screens/LoginScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here
    navigate('/enter-age');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center">Login</h1>
          <div className="d-grid">
            <Button variant="primary" size="lg" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
