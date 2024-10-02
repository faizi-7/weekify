import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import WeekBox from '../../components/WeekBox/WeekBox';
import './WeekGrid.css'

const WeekGrid: React.FC = () => {
  const weeks = useSelector((state: RootState) => state.weeks.weeks);

  return (
    <div className="week-grid">
      {weeks.map((week) => (
        <WeekBox key={week.weekNumber} weekNumber={week.weekNumber} status={week.status} />
      ))}
    </div>
  );
};

export default WeekGrid;
