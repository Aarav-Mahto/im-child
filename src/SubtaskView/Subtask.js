import {React, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExpanderGroup from "../Components/ExpanderGroup";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Breadcrumb from "../Navigation/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Subtask.css";
import { uploadMultipleFiles } from "../Components/FileUpload";
import BiasContinuousDevelopment from "./SubtaskItems/BiasContinuousDevelopment.json"
import BiasDocumentation from "./SubtaskItems/BiasDocumentation.json"
import BiasRiskAssessment from "./SubtaskItems/BiasRiskAssessment.json";
import BiasMitigation from "./SubtaskItems/BiasMitigation.json";
import BiasTesting from "./SubtaskItems/BiasTesting.json";
import RobustnessGoals from "./SubtaskItems/RobustnessGoals.json";
import PlanTesting from "./SubtaskItems/PlanTesting.json";
import RobustnessTesting from "./SubtaskItems/RobustnessTesting.json";


const Subtask = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { subtaskName, productId, productName, applicationType, assessmentName, assessmentId, taskId } = location.state || {};
    const [allUploadedFiles, setAllUploadedFiles] = useState({});

    const taskMap = {
        "Documentation": BiasDocumentation[0],
        "Risk Assessment": BiasRiskAssessment[0],
        "Testing": BiasTesting[0],
        "Bias Mitigation": BiasMitigation[0],
        "Continuous Development": BiasContinuousDevelopment[0],
        "State Robustness Goals": RobustnessGoals[0],
        "Plan Testing": PlanTesting[0],
        "Conduct Testing": RobustnessTesting[0],
    };

    const taskData = taskMap[subtaskName];


    const breadcrumbItems = [
        { name: "Home", path: "/home", state:{} },
        { name: productName, path: `/product/${productId}`, state:{}},
        { name: assessmentName, path: `/assessment/${assessmentId}`, state: { productId: productId, productName: productName, applicationType: applicationType, assessmentName: assessmentName, assessmentId: assessmentId } },
        { name: taskId, path: `/assessment/${assessmentId}/task/${taskId}`, state: { productId: productId, productName: productName, applicationType: applicationType, assessmentName: assessmentName, assessmentId: assessmentId, taskId: taskId } },
        { name: subtaskName, path: ``, state:{} },
    ];

    const handleSubmit = () => {
            navigate(breadcrumbItems[3].path, {state: breadcrumbItems[3].state});
            const files = Object.values(allUploadedFiles).flat();
            console.log("Uploading Files:", files);
            uploadMultipleFiles(productId, files, "assessments/EU_AI_act_assessment/Task_10(2)(f+g)_bias_documentation");
            // setIsLocked(true);
        };


    return (
        <div className="task-page-container">
        {/* Sidebar */}
        <Sidebar />
        <div className='main-content'>
            <Header title="CERTIF.AI Compliance Cockpit" description={taskData.parentTaskName}/>
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
            <div className="subtask-header">
                <h1>{taskData.taskName}</h1>
                <p>{taskData.taskDescription}</p>
            </div>
            <ExpanderGroup expanderItems={taskData.taskItems} onFilesUpload={setAllUploadedFiles}/>
            <button className="submit-button" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faCheckCircle} size="1x"/>
                Submit
            </button>
        </div>
    </div>
    );
}

export default Subtask;