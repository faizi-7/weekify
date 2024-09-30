import { Button, Container, Row, Col } from 'react-bootstrap';
import '../custom.css';

function MainScreen() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-custom">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="screen-container">
          <h2 className="screen-header text-primary-custom">Welcome to the Main Screen</h2>

          <p className="text-center">This is where the main content goes.</p>

          <Button variant="primary-custom" className="w-100 btn-custom-spacing">
            Explore More
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MainScreen;
