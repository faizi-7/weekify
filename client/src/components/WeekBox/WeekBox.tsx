import React from 'react';
import { useDispatch } from 'react-redux';
import { highlightWeek, resetWeek } from '../../redux/slices/weekSlice';
import './WeekBox.css'

interface WeekBoxProps {
  weekNumber: number;
  status: 'highlighted' | 'neutral' | 'target';
}

const WeekBox: React.FC<WeekBoxProps> = ({ weekNumber, status }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (status === 'neutral') {
      dispatch(highlightWeek(weekNumber));
    } else {
      dispatch(resetWeek(weekNumber));
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'highlighted':
        return 'week-highlighted';
      case 'target':
        return 'week-target';
      default:
        return 'week-neutral';
    }
  };

  return (
    <div
      className={`week-box ${getStatusClass()}`}
      onClick={handleClick}
    >
      {weekNumber}
    </div>
  );
};

export default WeekBox;
