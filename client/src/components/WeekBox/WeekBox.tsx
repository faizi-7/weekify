import React from 'react';
import './WeekBox.css';

interface WeekBoxProps {
  weekNumber: number;
  isPassed: boolean;
  isCurrentWeek: boolean;
}


const WeekBox: React.FC<WeekBoxProps> = ({ weekNumber, isPassed, isCurrentWeek }) => {
  return (
    <div className={`week-box ${isPassed ? 'green' : ''} ${isCurrentWeek ? 'current-week' : ''}`}>
      <span className="week-label">{`Week ${weekNumber}`}</span>
    </div>
  );
};

export default WeekBox;
