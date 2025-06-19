import React from 'react';
import { useState } from 'react';
import './TestingRequirements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSearch, faPlus, faHandSparkles } from '@fortawesome/free-solid-svg-icons';

const TestingRequirements = ({metrics, robustnessRequirements}) => {
  const [requirements, setRequirements] = useState([]);

  function fillRequiremnts() {
    setRequirements(robustnessRequirements);
}

  return (
    <div className="testing-requirements-container">
      <div className="testing-content">
        <div className="metrics">
          <div className='requirement-header'>
            <h3>Metrics</h3>
          </div>
          <div className='requirement-card'>
          {metrics.map((metric, index) => (
            <div className="metric-item" key={index}>
              <FontAwesomeIcon icon={faBolt} className="metric-icon" />
              <span className="metric-name">{metric.name}</span>
              <div className="metric-tags">
                {metric.tags.map((tag, idx) => (
                  <span className={`tag ${tag.toLowerCase()}`} key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="robustness-requirements">
        <div className="requirement-header">
            <h3>Robustness Requirements</h3>
            <div className='requirement-buttons'>
                <button className="add-button">
                    <FontAwesomeIcon icon={faPlus} /> Add
                </button>
                <button className="add-button" onClick={fillRequiremnts}>
                    <FontAwesomeIcon icon={faHandSparkles} /> Autofill form SDK
                </button>
            </div>
        </div>
        <div className='requirement-card'>            
          {requirements.length === 0 ? (
            <div className="empty-requirements">No requirements added</div>
          ) : (
            requirements.map((requirement, index) => (
              <div className="requirement-item" key={index}>
                <FontAwesomeIcon icon={faSearch} className="requirement-icon" />
                <span className="requirement-text">{requirement}</span>
              </div>
            ))
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TestingRequirements;