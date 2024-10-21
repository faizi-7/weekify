import React from 'react';
import './SingleWeekPopup.css';
import CloseButton from '../../assets/Icon.png';

interface SingleWeekPopupProps {
  weekNumber: number;
  day: string;
  onClose: () => void;
}

const SingleWeekPopup: React.FC<SingleWeekPopupProps> = ({ weekNumber, day, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <img src={CloseButton} alt="" />
        </button>
        <h2 className='week-title text-center'>Week - {weekNumber} / {day}</h2>
        <div className="progress-section">
          <div className="progress-bar">
            {/* Sample progress, replace with dynamic progress */}
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="emoji-section">
          {/* Add emoji buttons here */}
        </div>

        <div className="story-section">
          <h3>Story of the Week</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="targets-section">
          <h3>Targets</h3>
          <ul>
            <li><input type="checkbox" /> Lorem Ipsum Target 1</li>
            <li><input type="checkbox" checked /> Lorem Ipsum Target 2</li>
            <li><input type="checkbox" /> Lorem Ipsum Target 3</li>
          </ul>
        </div>

        <div className="notes-section">
          <h3>Add a Note</h3>
          <textarea placeholder="Write your note here..." />
        </div>
      </div>
    </div>
  );
};

export default SingleWeekPopup;
