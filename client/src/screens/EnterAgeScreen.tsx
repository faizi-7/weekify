import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EnterAgeScreen() {
  const [age, setAge] = useState<string | number>(''); // Initialize age as an empty string
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For handling error messages
  const navigate = useNavigate();

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value); // Update age on input change
  };

  const handleSubmit = () => {
    const numericAge = Number(age);
    if (numericAge >= 18) {
      setErrorMessage(null); // Clear any previous error messages
      navigate('/main'); // Navigate to MainScreen
    } else {
      setErrorMessage('You must be at least 18 years old.');
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="p-4 bg-white shadow rounded">
          <h2 className="text-center mb-4">Enter Your Age</h2>

          {/* Error message alert */}
          {errorMessage && (
            <Alert variant="danger" onClose={() => setErrorMessage(null)} dismissible>
              {errorMessage}
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={handleAgeChange}
              />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" className="w-100 mb-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EnterAgeScreen;
