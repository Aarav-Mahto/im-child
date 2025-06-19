import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import './TestView.css';
import TestItems from './TestItems';
import DocumentUploadSection from './DocumentUpload';



const TestView = ({items}) => {

    const [taskType, setTaskType] = useState('Technical Test');
    const [reload, setReload] = useState(false);


    function handleTaskTypeChange(e) {
        console.log(`Selected task: ${e.target.value}`);
        setTaskType(e.target.value);
        setReload(true);
    }

    return (
            <div className="task-content">
                <div className="task-main-content">
                    <div className="status-info">
                        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                            <FontAwesomeIcon icon={faDotCircle} size="2x" color='orange' />
                            <h3>In Progress</h3>
                        {taskType === 'Technical Test' ? (
                            <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                                <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                                    <FontAwesomeIcon icon={faCheckCircle} size="2x" color='green' />
                                    <h3 className="passed" color='green'>Tests passed: 2/3</h3>
                                </div>
                                <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                                    <FontAwesomeIcon icon={faCheckCircle} size="2x" color='red' />
                                    <h3 className="failed" color='green'>Tests failed: 1/3</h3>
                                </div>
                            </div>
                        ) : (
                            <div/>
                        )}
                        </div>
                        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>   
                            <p>Version 230906</p>
                            <p>Updated by: user_handle</p>
                        </div>
                    </div>

                    {/* Task Details Section */}
                    <div className="task-details-section">
                        <h3>Task Details</h3>
                        <label>Task Type</label>
                        <select className='task-details-select' onChange={(e) => handleTaskTypeChange(e)}>
                            <option value="Technical Test">Technical Test</option>
                            <option value="Upload Document">Upload Document</option>
                        </select>
                    </div>

                    {/* Task Action Section */}
                    {taskType === 'Technical Test' ? (
                        <div className="task-tests-section">
                            <div className="task-tests-header">
                                <h3>Task Tests</h3>
                                <button className="add-test-btn">
                                <FontAwesomeIcon icon={faPlus} /> Add Test
                                </button>
                            </div>
                            <TestItems items={items} />
                        </div>
                    ) : (
                        <div className="task-document-section">
                            <DocumentUploadSection />
                        </div>
                    )}
                </div>
            </div>
    );
};

export default TestView;