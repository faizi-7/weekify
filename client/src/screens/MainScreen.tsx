import React, { useState, useTransition } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MainScreen: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<string | null>(null);

  const handleClick = () => {
    startTransition(() => {
      setTimeout(() => {
        setData('Welcome to the Main Screen!');
      }, 2000);
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center">Main Screen</h1>
          <div className="text-center">
            <Button variant="primary" onClick={handleClick}>
              {isPending ? 'Loading...' : 'Fetch Data'}
            </Button>
            {data && <p className="mt-3">{data}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainScreen;
