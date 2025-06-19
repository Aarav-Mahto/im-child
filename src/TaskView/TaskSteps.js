// TaskSteps.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faEdit, faArrowRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './TaskSteps.css';

const TaskSteps = ({ tasks, assessmentId, taskId, state }) => {
    const navigate = useNavigate();
    console.log('TaskSteps:', tasks);

    function handleTaskClick(task) {
        const path = `/assessment/${assessmentId}/task/${taskId}/subtask/${task.urlSuffix}`;
        console.log(task.name)
        console.log('Path:', path);
        navigate(path, {state: {subtaskName: task.name, ...state}});
    }

    return (
        <div className="task-steps">
        {tasks.map((task) => (
            <div className="task-row" key={task.id}>
                <div className="task-id">{task.id}</div>
                <div className="task-description">{task.name}</div>
                <div className="task-status">
                    <span className={`status-circle ${task.status.toLowerCase().replace(' ', '-')}`} />
                    <span>{task.status}</span>
                </div>
                <div className="task-owner">
                    {task.owner} <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </div>
                <div className="task-actions">
                    <FontAwesomeIcon icon={faArrowRight} className="action-icon" onClick={() => handleTaskClick(task)} />
                    <FontAwesomeIcon icon={faEllipsisV} className="action-icon" />
                </div>
            </div>
        ))}
        </div>
    );
};

export default TaskSteps;