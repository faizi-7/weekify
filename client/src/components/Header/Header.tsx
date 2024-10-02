import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>2024 - Life in Weeks</h1>
      <Button variant="primary">View / Update Year Resolution</Button>
    </header>
  );
};

export default Header;
