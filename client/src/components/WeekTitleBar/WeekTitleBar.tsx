import React from "react";
import './WeekTitleBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const WeekTitleBar: React.FC = () => {
    return (
        <div className="week-title-bar my-2">
            <span className='week-manage-resolution rounded text-white'><FontAwesomeIcon icon={faPlus} /> View/Update Year Resolution</span>
            <div className="week-title-wrapper">
                <FontAwesomeIcon className="arrow" icon={faArrowLeftLong} />
                <h2 className="week-title mb-0">{new Date().getFullYear()}</h2>
                <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </div>
            <span className='week-title-details'>
                1024/5247 Weeks | 23 YO (Jawani)
            </span>
        </div>
    )
}

export default WeekTitleBar
