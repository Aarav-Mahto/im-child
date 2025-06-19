import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  // Import the CSS for the progress bar
import './AssessmentProgress.css';

const AssessmentProgress = ({ progress }) => {
  return (
    <div className="assessment-progress-card">
      <h3>Overall Assessment Progress</h3>
      <div className="progress-circle">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: '20px',
            pathColor: progress === 100 ? '#6c43b4' : '#6c43b4',  // Green if 100%, else blue
            textColor: '#333',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
    </div>
  );
};

export default AssessmentProgress;