import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For handling error messages

  const navigate = useNavigate(); // Hook for navigation

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Simple check: if both username and password are filled in, navigate to next screen
    if (username && password) {
      setErrorMessage(null); // Clear any previous error messages
      navigate('/enter-age'); // Navigate to EnterAgeScreen Page
    } else {
      setErrorMessage('Please enter both username and password.');
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="p-4 bg-white shadow rounded">
          <h2 className="text-center mb-4">Login</h2>

          {/* Error message alert */}
          {errorMessage && (
            <Alert variant="danger" onClose={() => setErrorMessage(null)} dismissible>
              {errorMessage}
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button variant="primary" className="w-100 mb-3" onClick={handleLogin}>
              Login
            </Button>
          </Form>
          <div className="text-center">
            <a href="#" className="d-block mb-3">Forgot Password?</a>
            <hr className="my-3" />
            <Button variant="outline-dark" className="w-100">
              <i className="fab fa-google me-2"></i> Login with Google
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
