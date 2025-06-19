import {React, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Breadcrumb from '../Navigation/Breadcrumb';
import TaskSteps from './TaskSteps';
import './TaskOverview.css';
import Task_10_2_f_g from './Tasks/Task_10_2_f_g.json';
import Task_15_1 from './Tasks/Task_15_1.json';
import ReactMarkdown from 'react-markdown';
import TabSystem from '../Components/TabSystem';

const tasks = {
    "Art. 10(2)(f+g)": Task_10_2_f_g[0],
    "Art. 15(1)": Task_15_1[0],
};




const TaskOverview = () => {
    const [taskType, setTaskType] = useState('ISO Standard');
    const [reload, setReload] = useState(false);
    const location = useLocation();
    const { productId, productName, applicationType, assessmentName, assessmentId, taskId } = location.state || {}; 
    
    const breadcrumbItems = [
      { name: "Home", path: "/home", state:{} },
      { name: productName, path: `/product/${productId}`, state:{}},
      { name: assessmentName, path: `/assessment/${assessmentId}`, state: { productId: productId, productName: productName, applicationType: applicationType, assessmentName: assessmentName, assessmentId: assessmentId } },
      { name: taskId, path: ``, state:{} },
    ];

    const task = tasks[taskId]; 
    console.log('Task:', task);
    console.log('Task Id:', taskId);
    const tabs = task.tabs;
    const startTab = task.startTab || 0;


    const descriptions = {
        "ISO Standard":  task.taskDescription,
        "Upload Document":  "Upload the required documents for the task. Placeholder for the description of this task type."
    }
    const [description, setDescription] = useState(descriptions[taskType]);


    function renderTabContent(tab) {
        return (
            <div className='bias-task-details'>
            {/* Task Details Section */}
            <div>
                <h3>Task Details</h3>
                <label>Task Type</label>
                <select className='task-details-select' onChange={(e) => handleTaskTypeChange(e)}>
                    <option value="ISO Standard">{tab.standardName}</option>
                    <option value="Upload Document">Upload Document</option>
                </select>
            </div>
            <div>
                <h4>{tab.taskStepsHeading}</h4>
                <TaskSteps tasks={tab.taskSteps} assessmentId={assessmentId} taskId={taskId} state={{productId: productId, productName: productName, assessmentName: assessmentName, applicationType: applicationType, assessmentId: assessmentId, taskId: taskId}} />
            </div>
        </div>
        )
    }

    const tabContent = tabs.reduce((acc, tab) => {
        acc[tab.id] = renderTabContent(tab);
        return acc;
    }, {});

    console.log('Tab Content:', tabContent);



    useEffect(() => {
        // reload the page
        if (reload) {
            setReload(false);
            setDescription(descriptions[taskType]);
            // navigate(0);
        }
    }, [reload]);

    function handleTaskTypeChange(e) {
        console.log(`Selected task: ${e.target.value}`);
        setTaskType(e.target.value);
        setReload(true);
    }

    return (
        <div className="task-page-container">
        {/* Sidebar */}
        <Sidebar />
        <div className='main-content'>
            <Header title="CERTIF.AI Compliance Cockpit" description="Task view"/>
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
            {/* Main Content */}
            <div className="task-content">
                <div className="task-main-content">
                    <div className="bias-task-header">
                        <h3>{assessmentName}</h3>
                        <h3>{task.taskName}</h3>
                        <p>Product: {productName}</p>
                        <p>Product Application Type: {applicationType}</p>
                        <div className="task-header-task">
                            <FontAwesomeIcon icon={faPlay} />
                            <div><ReactMarkdown>{description}</ReactMarkdown></div>
                        </div>
                    </div>
                    {tabs.length > 1 ? (
                        <TabSystem tabs={tabs} tabContent={tabContent} startTab={startTab} />
                    ) : (
                        renderTabContent(tabs[0])     
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default TaskOverview;