import React from "react";
import "./ProgressContainer.css"; // Import CSS for styling

const ProgressContainer = ({ title, percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-header">
        <span className="progress-title">{title}</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressContainer;