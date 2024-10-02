import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Button variant="primary">Highlight Next Target Week</Button>
      <div className="view-buttons">
        <Button variant="info">Yearly View</Button>
        <Button variant="secondary">Life View</Button>
      </div>
    </footer>
  );
};

export default Footer;
