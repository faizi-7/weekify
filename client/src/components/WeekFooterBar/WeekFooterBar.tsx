import React from "react";
import './WeekFooterBar.css'

const WeekFooterBar: React.FC = () => {
    return (
        <div className="week-footer-bar my-2">
            <div className="next-target-week rounded">Highlight Next Target Week</div>
            <div className="week-footer-right-side">
                <div className="yearly-view rounded">Yearly View</div>
                <div className="life-view rounded">Yearly View</div>
            </div>
        </div>
    )
}

export default WeekFooterBar