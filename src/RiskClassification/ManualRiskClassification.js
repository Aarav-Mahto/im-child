import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExpanderGroup from "../Components/ExpanderGroup";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Breadcrumb from "../Navigation/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./ManualRiskClassification.css";
import RiskAssessmentQuestionnaire from "./RiskAssessmentQuestionnaire";

const expanderItems = RiskAssessmentQuestionnaire;

const ManualRiskClassification = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { productId, productName } = location.state || {};

    const breadcrumbItems = [
        { name: "Home", path: "/home", state:{} },
        { name: productName, path: `/product/${productId}`, state:{}},
        { name: "Manual Risk Classification", path: `` },
    ];

    const handleSubmit = () => {
        navigate(-1);
        // setIsLocked(true);
    };


    return (
        <div className="task-page-container">
        {/* Sidebar */}
        <Sidebar />
        <div className='main-content'>
            <Header title="CERTIF.AI Compliance Cockpit" description="ISO/IEC TR 12791 - Treatment of unwanted bias in classification and regression machine learning tasks"/>
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
            <div className="manual-risk-header">
                <h1>Manual Risk Classification</h1>
                <p>
                    Perform a manual risk classification of your AI system by completing the following questionnaire.
                </p>
            </div>
            <ExpanderGroup expanderItems={expanderItems}/>
            <button className="submit-button" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faCheckCircle} size="1x"/>
                Submit
            </button>
        </div>
    </div>
    );
}

export default ManualRiskClassification;