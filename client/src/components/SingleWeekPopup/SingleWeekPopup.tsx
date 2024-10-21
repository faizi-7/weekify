import React from 'react';
import './SingleWeekPopup.css';
import CloseButtonIcon from '../../assets/Icon.png'; // Renamed for clarity

interface SingleWeekPopupProps {
  weekNumber: number;
  day: string;
  onClose: () => void;
}

const SingleWeekPopup: React.FC<SingleWeekPopupProps> = ({ weekNumber, day, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose} aria-label="Close popup">
          <img src={CloseButtonIcon} alt="Close" />
        </button>
        <h2 className="week-title text-center">
          Week - {weekNumber} / {day}
        </h2>

        <div className="progress-section">
          {/* 7 progress Bars represents 7 days of a week */}
          {[...Array(7)].map((_, index) => (
            <div key={index} className="day-progress"></div>
          ))}
        </div>

        <div className="emoji-section">
          {/* Insert Emoji buttons or icons */}
        </div>

        <section className="story-section">
          <h3>Story of the Week</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>

        <section className="targets-section">
          <h3>Targets</h3>
          <ul>
            {['Lorem Ipsum Target 1', 'Lorem Ipsum Target 2', 'Lorem Ipsum Target 3'].map((target, idx) => (
              <li key={idx}>
                <input type="checkbox" defaultChecked={idx === 1} /> {target}
              </li>
            ))}
          </ul>
        </section>

        <section className="notes-section">
          <h3>Add a Note</h3>
          <textarea placeholder="Write your note here..." />
        </section>
      </div>
    </div>
  );
};

export default SingleWeekPopup;
