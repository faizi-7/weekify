import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterAgeScreen: React.FC = () => {
  const [age, setAge] = useState<number | ''>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (age >= 18) {
      navigate('/main');
    } else {
      alert('You must be at least 18 years old.');
    }
  };

  return (
    <div>
      <h1>Enter Your Age</h1>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        placeholder="Enter age"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EnterAgeScreen;
