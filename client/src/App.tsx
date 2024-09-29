import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import EnterAgeScreen from './screens/EnterAgeScreen';
import MainScreen from './screens/MainScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/enter-age" element={<EnterAgeScreen />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
