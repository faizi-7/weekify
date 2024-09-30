import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EnterAgeScreen() {
  const [age, setAge] = useState<string | number>(''); // Initialize age as an empty string
  const navigate = useNavigate();

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value); // Update age on input change
  };

  const handleSubmit = () => {
    const numericAge = Number(age); // Convert age to a number
    if (numericAge >= 18) {
      navigate('/main'); // Navigate to '/main' app-page
    } else {
      console.log("Age must be at least 18");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">Enter Your Age</h1>
      <Form className="w-50">
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={handleAgeChange}
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EnterAgeScreen;
