import { Button, Container, Row, Col } from 'react-bootstrap';

function MainScreen() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="p-4 bg-white shadow rounded">
          <h2 className="text-center mb-4">Welcome to the Main Screen</h2>
          
          <p className="text-center mb-4">This is the main screen. You have successfully logged in!</p>
          
          <Button variant="primary" className="w-100 mb-3">
            Proceed
          </Button>

          <Button variant="secondary" className="w-100">
            Log Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainScreen;
