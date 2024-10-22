import React from 'react';
import './SingleWeekPopup.css';
import { CloseButtonIcon, happy, smiling, sad, crying } from '../../assets';


interface SingleWeekPopupProps {
  weekNumber: number;
  onClose: () => void;
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the current day of the week (0-6) and map it to the day name
const currentDay = daysOfWeek[new Date().getDay()];

const SingleWeekPopup: React.FC<SingleWeekPopupProps> = ({ weekNumber, onClose }) => {

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose} aria-label="Close popup">
          <img src={CloseButtonIcon} alt="Close" />
        </button>
        <h2 className="week-title text-center">
          Week - {weekNumber} / {currentDay}
        </h2>

        <div className="progress-section">
          {/* 7 progress Bars represents 7 days of a week */}
          {[...Array(7)].map((_, index) => (
            <div key={index} className="day-progress"></div>
          ))}
        </div>

        <div className="container">
          <div className='row'>
            <div className="col-md-6">
              <div className="emoji-section">
                <img src={happy} alt="" /><img src={smiling} alt="" /><img src={sad} alt="" /><img src={crying} alt="" />
              </div>
            </div>
            <div className="col-md-6 align-content-center text-md-end">
              <button>Add a Key Event</button>
            </div>
          </div>
        </div>


        <section className="story-section">
          <h3>Story of the Week</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section>

        <section className="targets-section">
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
    </div >
  );
};

export default SingleWeekPopup;

