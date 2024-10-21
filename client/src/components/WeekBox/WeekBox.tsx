import React, { useEffect, useRef, useState } from 'react';
import './WeekBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { showTooltip, hideTooltip } from '../../redux/slices/weekSlice';
import { RootState } from '../../redux/store/store';
import SingleWeekPopup from '../SingleWeekPopup/SingleWeekPopup'; // Import the popup component

interface WeekBoxProps {
  weekNumber: number;
  isPassed: boolean;
  isCurrentWeek: boolean;
}

const WeekBox: React.FC<WeekBoxProps> = ({ weekNumber, isPassed, isCurrentWeek }) => {
  const dispatch = useDispatch();
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const visibleTooltipWeek = useSelector((state: RootState) => state.weeks.visibleTooltipWeek);

  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage pop-up visibility

  const handleMouseEnter = () => {
    dispatch(showTooltip(weekNumber)); // Show tooltip on hover
  };

  const handleMouseLeave = () => {
    dispatch(hideTooltip()); // Hide tooltip when mouse leaves
  };

  const handleClick = () => {
    dispatch(showTooltip(weekNumber)); // Show tooltip on click for mobile
    setPopupOpen(true); // Open the popup on click
  };

  const handleClosePopup = () => {
    setPopupOpen(false); // Close the popup when necessary
  };

  useEffect(() => {
    if (tooltipRef.current && (window as any).bootstrap?.Tooltip) {
      // Initialize Bootstrap tooltip
      const tooltip = new (window as any).bootstrap.Tooltip(tooltipRef.current, {
        trigger: 'manual',
        title: `Week - ${weekNumber}<br/>String 1<br/>String 2`, // Custom tooltip content with HTML
        html: true,
        placement: 'top',
      });

      // Show or hide tooltip based on Redux state
      if (visibleTooltipWeek === weekNumber) {
        tooltip.show();
      } else {
        tooltip.hide();
      }

      return () => {
        tooltip.dispose(); // Cleanup tooltip instance
      };
    }
  }, [visibleTooltipWeek, weekNumber]);

  return (
    <>
      <div
        className={`week-box ${isPassed ? 'green' : ''} ${isCurrentWeek ? 'current-week' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="week-label">
          {`Week ${weekNumber}`}
        </div>
        <div
          ref={tooltipRef}
          className="week-label tooltip"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-html="true"
        >
          {`Week ${weekNumber}`}
        </div>
      </div>

      {isPopupOpen && (
        <SingleWeekPopup
          weekNumber={weekNumber}
          day="Monday" // You can change this dynamically based on the week clicked
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default WeekBox;
