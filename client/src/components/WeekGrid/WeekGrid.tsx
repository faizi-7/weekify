import React from 'react';
import WeekBox from '../WeekBox/WeekBox';
import WeekTitleBar from '../WeekTitleBar/WeekTitleBar';
import WeekFooterBar from '../WeekFooterBar/WeekFooterBar';

const getCurrentWeekNumber = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
};

const WeekGrid: React.FC = () => {
  const totalWeeks = 52; // Or 51 depending on the year
  const currentWeekNumber = getCurrentWeekNumber();

  // Create an array of week numbers
  const weeks = Array.from({ length: totalWeeks }, (_, index) => {
    const weekNumber = index + 1;
    const isPassed = weekNumber < currentWeekNumber;
    const isCurrentWeek = weekNumber === currentWeekNumber;


    return (
      <WeekBox
        key={weekNumber}
        weekNumber={weekNumber}
        isPassed={isPassed}
        isCurrentWeek={isCurrentWeek}
      />
    );
  });

  return (
    <>
      <WeekTitleBar />
      <div className="week-grid-container">
        <div className="week-grid">
          {weeks}
        </div>
      </div>
      <WeekFooterBar />
    </>
  );
};

export default WeekGrid;
