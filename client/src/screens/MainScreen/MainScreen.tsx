import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../custom.css';
import React from 'react';
// import Header from '../../components/Header/Header';
import WeekGrid from '../../components/WeekGrid/WeekGrid';
// import Footer from '../../components/Footer/Footer';
import './MainScreen.css'

const MainScreen: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Container className="main-screen-container">
        {/* <Row className="justify-content-center my-4">
          <Col xs={12} className="text-center">
            <h1 className="display-4">Your Life in Weeks</h1>
            <p className="lead">Track your progress and key milestones week by week.</p>
          </Col>
        </Row> */}
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <WeekGrid />
          </Col>
        </Row>

        {/* <Row className="justify-content-center my-4">
          <Col xs={6} md={4} lg={3} className="text-center">
            <Button variant="primary" className="btn-lg w-100">Yearly View</Button>
          </Col>
          <Col xs={6} md={4} lg={3} className="text-center">
            <Button variant="secondary" className="btn-lg w-100">Life View</Button>
          </Col>
        </Row> */}
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default MainScreen;
