import React, { useState, useEffect } from "react";
import "./TaskExpander.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TaskExpander = ({ title, isActive, content, completed }) => {
  const [isExpanded, setIsExpanded] = useState((isActive || completed) ? true : false);

  // Expand the task when completed changes to true
  useEffect(() => {
    if (completed) {
      setIsExpanded(true);
    }
  }, [completed]);

  return (
    <div className="task-expander">
      {/* Header Section */}
      <div className="task-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="task-title">
            {isActive ? (
                <div className="spinner"></div> /* Customized spinner */
            ) : 
            completed ? (
                <FontAwesomeIcon icon={faCheckCircle} className="completed-task" />
            ) :
            (
                <div className="inactive-spinner"></div> /* Inactive spinner style */
            )}
          <span>{title}</span>
        </div>
        {/* Expand/Collapse Arrow */}
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </div>

      {/* Content Section */}
      {isExpanded && <div className="task-content">
        <div
          dangerouslySetInnerHTML={{ __html: content }} // Render the HTML
    /></div>}
    </div>
  );
};

export default TaskExpander;