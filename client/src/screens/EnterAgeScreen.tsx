import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../custom.css';
import logo from './../assets/weekify.png'

function EnterAgeScreen() {
  const [age, setAge] = useState<string | number>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleSubmit = () => {
    const numericAge = Number(age);
    if (numericAge >= 18) {
      setErrorMessage(null);
      navigate('/main');
    } else {
      setErrorMessage('You must be at least 18 years old.');
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-custom">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="screen-container">

        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <h2 className="screen-header text-primary-custom">Enter Your Age</h2>

          {errorMessage && (
            <Alert variant="danger" className="alert-custom">
              {errorMessage}
            </Alert>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={handleAgeChange}
                className="form-control-custom p-3"
              />
            </Form.Group>

            <Button
              onClick={handleSubmit}
              variant="primary-custom"
              className="w-100 btn-custom-spacing"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EnterAgeScreen;
