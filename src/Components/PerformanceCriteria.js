import React, { useState } from 'react';
import './PerformanceCriteria.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHandSparkles } from '@fortawesome/free-solid-svg-icons';

const PerformanceCriteria = ({dummyCriteria}) => {
  const [criteria, setCriteria] = useState([]);


  const [newCriterion, setNewCriterion] = useState({
    metric: '',
    condition: '',
    threshold: '',
  });

  const handleChange = (e) => {
    setNewCriterion({ ...newCriterion, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newCriterion.metric && newCriterion.condition && newCriterion.threshold) {
      setCriteria([...criteria, newCriterion]);
      setNewCriterion({ metric: '', condition: '', threshold: '' });
    }
  };

  function fillCriteria() {
    if (!dummyCriteria) return;
    setCriteria(dummyCriteria);
  }

  return (
    <div className="performance-criteria">
        <h3>Performance Criteria</h3>
      <div className="criteria-table">
        <div className="criteria-header">
          <span>Metric</span>
          <span>Scenario / Condition</span>
          <span>Performance Threshold</span>
        </div>
        {criteria.map((item, index) => (
          <div className="criteria-row" key={index}>
            <span>{item.metric}</span>
            <span>{item.condition}</span>
            <span>{item.threshold}</span>
          </div>
        ))}
        
      </div>
      <div className="criteria-row input-row">
          <input
            type="text"
            name="metric"
            placeholder="Metric"
            value={newCriterion.metric}
            onChange={handleChange}
          />
          <input
            type="text"
            name="condition"
            placeholder="Scenario / Condition"
            value={newCriterion.condition}
            onChange={handleChange}
          />
          <input
            type="text"
            name="threshold"
            placeholder="Performance Threshold"
            value={newCriterion.threshold}
            onChange={handleChange}
          />
          <div className='requirement-buttons'>
                <button className="add-button" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus} /> Add
                </button>
                <button className="add-button" onClick={fillCriteria} >
                    <FontAwesomeIcon icon={faHandSparkles} /> Autofill form SDK
                </button>
            </div>
        </div>
      </div>
  );
};

export default PerformanceCriteria;