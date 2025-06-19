import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Breadcrumb from '../Navigation/Breadcrumb';
import { UserContext } from '../Contexts/UserContext';
import CircularProgress from '../ProductView/CircularProgress';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faCircle, faDatabase, faFileAlt, faClipboard, faEye, faPerson, faShieldAlt, faArrowAltCircleRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFolder as faRegularFolder, faEdit} from '@fortawesome/free-regular-svg-icons';
import { RiUserAddFill } from "react-icons/ri";
import certifAiLogo from '../assets/CAI_Logo_Black.png';

import './AssessmentOverview.css';

const AssessmentOverview = () => {
  const { assessmentId } = useParams(); // Get the assessment ID from the URL
  const location = useLocation();
  const { productId, productName, applicationType, assessmentName } = location.state || {}; // Get the product ID if passed
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [error, setError] = useState(null);
  const [tabs, setTabs] = useState([]);
  const [tasks, setTasks] = useState({});
  const [activeTab, setActiveTab] = useState(null); // Default active tab
  const [openSubsections, setOpenSubsections] = useState({}); // Track open subsections
  const navigate = useNavigate();
  const [openAssignDialog, setOpenAssignDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext); // Get logged-in user
  
  // Fetch Developers & Assessors to assign
  const fetchAssignableUsers = async () => {
      try {
          const response = await fetch(`http://localhost:9000/users`);
          const data = await response.json();
          setUsers(data.filter(u => u.role !== "Product Manager")); // Only Developers & Assessors
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  };
  
  // Open Dialog to Assign User
  const handleAssignClick = (taskId) => {
      setSelectedTask(taskId);
      fetchAssignableUsers();
      setOpenAssignDialog(true);
  };
  
  // Handle Assign User to Task
  const handleAssignUser = async () => {
    try {
        const response = await fetch(`http://localhost:9000/tasks/${selectedTask}/assign-user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: selectedUser }),
        });

        if (!response.ok) {
            throw new Error("Failed to assign user");
        }

        const assignedUser = users.find((u) => u.id === selectedUser);

        // Update the UI to show username as task owner
        setTasks((prevTasks) => {
          if (!prevTasks || typeof prevTasks !== "object") {
              console.error("prevTasks is not an object", prevTasks);
              return prevTasks; // Return current state to prevent crash
          }

          if (!Array.isArray(prevTasks[activeTab])) {
              console.error(`prevTasks[${activeTab}] is not an array`, prevTasks[activeTab]);
              return prevTasks; // Return current state to prevent crash
          }

          return {
              ...prevTasks, // Keep all other tabs unchanged
              [activeTab]: prevTasks[activeTab].map((task) =>
                  task.taskId === selectedTask ? { ...task, owner: assignedUser.username } : task
              ),
          };
      });

        setOpenAssignDialog(false);
        setSelectedUser("");
    } catch (error) {
        console.error("Error assigning user:", error);
    }
  };

  const breadcrumbItems = [
    { name: "Home", path: "/home" },
    { name: productName, path: `/product/${productId}` },
    { name: assessmentName, path: `/assessment/${assessmentId}` },
  ];

  function getIcon(tab) {
    switch (tab) {
      case "Risk Management System": return faFolder;
      case "Data and Data Governance": return faDatabase;
      case "Technical Documentation": return faFileAlt;
      case "Record Keeping": return faClipboard;
      case "Transparency and Provision of Information": return faEye;
      case "Human Oversight": return faPerson;
      case "Accuracy, Robustness, Cybersecurity": return faShieldAlt;
      default: return faFolder;
    }
  }

  function viewTask(taskId) {
    console.log("View task with ID:", taskId);
    navigate(`/assessment/${assessmentId}/task/${taskId}`, {state: { productId: productId, productName: productName, applicationType: applicationType, assessmentName:assessmentName, assessmentId: assessmentId, taskId: taskId }});
  }


  useEffect(() => {
    // Fetch the assessment and tasks by ID from the backend
    const fetchAssessmentAndTasks = async () => {
      try {
        const response = await fetch(`http://localhost:9000/categories/${assessmentId}`);
        if (response.ok) {
          const data = await response.json();
          setTabs(data);
          setActiveTab(data[0].category); // Set the first tab as active
          // Fetch tasks for each tab
          const tasksData = {};
          for (const tab of data) {
            const taskResponse = await fetch(`http://localhost:9000/tasks/${assessmentId}?category=${tab.category}`);
            if (taskResponse.ok) {
              const taskData = await taskResponse.json();
              tasksData[tab.category] = taskData;
            } else {
              setError('Tasks not found for category: ' + tab);
            }
          }
          setTasks(tasksData);
        } else {
          setError('Assessment not found');
          console.error('Error fetching assessment:', error);
        }
      } catch (error) {
        setError('Error fetching assessment and tasks');
        console.error('Error fetching assessment and tasks:', error);
      }
    };

    if (assessmentId) {
      fetchAssessmentAndTasks();
    }
  }, [assessmentId, error]);


  // Calculate the total and completed tasks across all categories
  useEffect(() => {
    let total = 0;
    let completed = 0;

    Object.values(tasks).forEach((tasks) => {
      total += tasks.length;
      completed += tasks.filter((task) => task.status === 'Complete').length;
    });

    setTotalTasks(total);
    setCompletedTasks(completed);
  }, [tasks]);

  const progressPercentage = Math.round(totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0);

  const toggleSubsection = (subcategory) => {
    setOpenSubsections((prevState) => ({
      ...prevState,
      [subcategory]: !prevState[subcategory],
    }));
  };


  const renderTabContent = () => {
    if (!tasks || !tasks[activeTab]) return <div>No data available</div>;

    const subcategories = Object.entries(tasks[activeTab].reduce((acc, task) => {
        acc[task.subSection] = acc[task.subSection] || [];
        acc[task.subSection].push(task);
        return acc;
    }, {}));

    return (
        <div>
            {subcategories.map(([subcategory, subcategoryTasks]) => {
                const hasAvailableTask = user.role !== "Product Manager" &&
                    subcategoryTasks.some((task) => task.owner === user.username && task.status !== 'Complete');

                return (
                    <div key={subcategory} className="subcategory">
                        {/* Subcategory Header */}
                        <div className="subcategory-header" onClick={() => toggleSubsection(subcategory)}>
                            <h3>
                                {subcategory} ({subcategoryTasks.filter((task) => task.status === 'Complete').length}/{subcategoryTasks.length})
                                {hasAvailableTask && <span className="task-badge-subcategory">Task Available</span>}
                            </h3>
                            <FontAwesomeIcon icon={openSubsections[subcategory] ? faChevronUp : faChevronDown} />
                        </div>

                        {/* Task Table */}
                        {openSubsections[subcategory] && (
                            <table className="tab-content-table">
                                <thead>
                                    <tr>
                                        <th>Task Name</th>
                                        <th>ID</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Owner</th>
                                        <th>Lifecycle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subcategoryTasks.map((task) => {
                                        const hasAccess = user.role === "Product Manager" || task.owner === user.username;
                                        return (
                                            <tr key={task.taskId} className={!hasAccess ? "disabled-task" : ""} onClick={() => hasAccess && viewTask(task.taskId)}>
                                                <td>{task.name}</td>
                                                <td>{task.taskId}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <FontAwesomeIcon icon={faCircle} size="1x" color={task.status === 'In Progress' ? 'orange' : 'green'} />
                                                    <span>{task.status}</span>
                                                </td>
                                                <td>
                                                    {task.owner ? task.owner : "Unassigned"}
                                                    {user.role === "Product Manager" && (
                                                        <button className="edit-button" onClick={(e) => {
                                                          e.stopPropagation(); // Prevents `tr` click event
                                                          handleAssignClick(task.taskId);
                                                        }}>
                                                            <RiUserAddFill/>
                                                        </button>
                                                    )}
                                                </td>
                                                <td>{task.lifecycle}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                );
            })}
        </div>
    );
  };

  return (
    <div className='layout'>
      <Sidebar />
      <div className='main-content'>
      <Header 
        title={
          <span>
            <img src={certifAiLogo} alt="CERTIF.AI" className="certif-ai-logo" /> 
            Compliance Cockpit
          </span>
        } 
        description="Overview"
      />
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <div className="assessment-overview-container">
          <div className="assessment-header">
            <div className='heading'>
              <h1>{assessmentName}</h1>
              <h2>Product: {productName}</h2>
            </div>
            {/* Progress Bar */}
            <div className="progress-container">
              <CircularProgress progress={progressPercentage} />
              <h3>{completedTasks} of {totalTasks} tasks completed</h3>
            </div>
          </div>

          {/* Tab navigation */}
          <div className="tabs-table">
            {tabs.map((tab) => (
              <button
                key={tab.category}
                className={`tab-button ${tab.category === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.category)}
              >
                <FontAwesomeIcon icon={getIcon(tab.category)} size='2x'/> {/* Icon above the text */}
                <span>{tab.category}</span> {/* Text below the icon */}
                <span className="article">{tab.article}</span> {/* Article number */}
                {user.role !== "Product Manager" &&
                tasks[tab.category]?.some((task) => task.owner === user.username && task.status !== 'Complete') && <span className="task-badge">Task Available</span>}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="tab-content-assessment">{renderTabContent()}</div>
        </div>
      </div>
      {/* Assign User Dialog */}
      <Dialog open={openAssignDialog} onClose={() => setOpenAssignDialog(false)}sx={{
        "& .MuiDialog-paper": { // Styles the dialog's paper (container)
            width: "500px", // Adjust width
            maxWidth: "90vw", // Prevent overflow on small screens
            borderRadius: "10px", // Optional: rounded corners
        }
      }}>
          <DialogTitle>Assign User to Task</DialogTitle>
          <DialogContent>
              <Select
                  fullWidth
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
              >
                  {users
                    .filter((u) => u.role !== "Product Manager") // Exclude Product Managers
                    .map((u) => (
                        <MenuItem key={u.id} value={u.id}>
                            {u.username} ({u.role})
                        </MenuItem>
                    ))}
              </Select>
          </DialogContent>
          <DialogActions>
              <Button onClick={() => setOpenAssignDialog(false)} sx={{
                    backgroundColor: "transparent", // Default color
                    color: "#645394", // Text color
                    "&:hover": {
                        backgroundColor: "#e0d7f5", // Change background on hover
                    },
                }}
                >
                  Cancel
                </Button>
              <Button onClick={handleAssignUser} variant="contained"sx={{
                      backgroundColor: "#645394",
                      "&:hover": {
                          backgroundColor: "#4e3b80", // Darker shade on hover
                      },
                  }}
              >
                  Add
              </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

export default AssessmentOverview;