import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../custom.css';

function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username && password) {
      setErrorMessage(null);
      navigate('/enter-age');
    } else {
      setErrorMessage('Please enter both username and password.');
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-custom">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="p-4 shadow rounded bg-white">
          <h2 className="text-center mb-4 text-primary-custom">Login</h2>

          {errorMessage && (
            <Alert variant="danger" onClose={() => setErrorMessage(null)} dismissible>
              {errorMessage}
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                className="form-control-custom py-3"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control-custom py-3"
              />
            </Form.Group>

            <Button variant="primary-custom" className="w-100 mb-3" onClick={handleLogin}>
              Login
            </Button>
          </Form>

          <div className="text-center">
            <a href="#" className="d-block mb-3">Forgot Password?</a>
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
