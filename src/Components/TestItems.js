import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './TestItems.css';


const Test = ({ item }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState(item.result);
    const [status, setStatus] = useState(item.status);

    const handleRun = () => {
        setIsRunning(true);
        setResult('--');
        setStatus('RUNNING');

        // Simulate a delay of 3 seconds
        setTimeout(() => {
            setIsRunning(false);
            setResult(item.result);
            setStatus(item.status);
        }, 3000);
    };

    return (
        <div key={item.id} className="test-item">
          <div className="test-item-header">
            <FontAwesomeIcon icon={faPlay} className="expand-icon" />
            <span className="test-standard">{item.standard}</span>
            {item.automated && <span className="test-automated">automated</span>}
            <span className="test-measure">{item.measure}</span>
          </div>
          <div className="test-item-body">
            <div className="test-name">Statistical Measures of Performance</div>
            <div className="test-details">
                <div key={"id"} className="test-meta">
                    <div className="test-meta-label">test ID:</div>
                    <div className="test-meta-value">{item.id}</div>
                </div>
                <div key={"measure"} className="test-meta">
                    <div className="test-meta-label">Measure:</div>
                    <div className="test-meta-value">{item.metric}</div>
                </div>
                <div key={"reslt"} className="test-meta">
                    <div className="test-meta-label">Result:</div>
                    {item.metric === 'ROC' && !isRunning ? (
                        <img src={item.result} alt="test-result" width={"150px"}/>) : 
                        (
                        <div className="test-meta-value test-result">{result}</div>
                        )
                    }

                </div>
                <div key={"status"} className="test-meta">
                    <div className="test-meta-label">Status:</div>
                    <div className={`teste-meta-value test-status ${status.toLowerCase()}`}>{status}</div>
                </div>
                <button className="test-action" onClick={handleRun}>
                {isRunning ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                    ) : (
                        <>
                            Update <FontAwesomeIcon icon={faPlay} />
                        </>
                    )}
                </button>
            </div>
            </div>
        </div>
    );
};


const TestItems = ({ items }) => {
  return (
    <div className="test-items-container">
      {items.map((item, index) => (
        <Test key={index} item={item} />
      ))}
    </div>
  );
};

export default TestItems;