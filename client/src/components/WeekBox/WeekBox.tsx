import React from 'react';
import './WeekBox.css';

interface WeekBoxProps {
  weekNumber: number;
  isPassed: boolean;
}

const WeekBox: React.FC<WeekBoxProps> = ({ weekNumber, isPassed }) => {
  return (
    <div className={`week-box ${isPassed ? 'green' : ''}`}>
      <span className="week-label">{`Week ${weekNumber}`}</span>
    </div>
  );
};

export default WeekBox;
