import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNotifications } from '../Notifications/NotificationContext';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import DisclaimerModal from '../Components/DisclaimerModal';
import './StartAssessment.css'; // Assuming styles are in a separate file
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import EuAiAct from '../assets/eu-ai-act.png';
import CertifAiLogo from '../assets/certifai.ico';
import IsoLogo from '../assets/iso.webp';

const assessments =
    [
      { 
        id: 1,
        name: "EU AI Act (Regulation EU) 2024/1689",
        description: "Obligations of the EU AI Act supported by relevant industry standards",
        logo: EuAiAct,
        backgroundColor: '#2B479D',
      },

      {
        id: 2,
        name: "ISO/IEC TR 24029-1 - AI Assessment of the Robustness of Neural Networks",
        description: "Assess the Robustness of your Neural Network based AI System.",
        logo: IsoLogo,
        backgroundColor: '#105BAF',
      },

      {
        id: 3,
        name: "ISO/IEC TR 24027 - Bias in AI systems and AI aided decision making",
        description: "Assess and mitigate Bias in your AI System.",
        logo: IsoLogo,
        backgroundColor: '#105BAF',
      },

      {
        id: 4,
        name: "CAI Trustworthy AI Risk Assessment",
        description: "Assess the Seven Dimensions of Trustworthiness of your AI System.",
        logo: CertifAiLogo,       
        backgroundColor: '#172A3E',
      },

      {
        id: 5,
        name: "CAI LLM Quality Assessment",
        description: "Focus on the quality of your LLM-based product.",
        logo: CertifAiLogo,
        backgroundColor: '#172A3E',
      },
    ];

const StartAssessment = () => {
  const [selectedAssessment, setSelectedAssessment] = useState(null); // Track selected card
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, productName, currentAssessments, risk } = location.state || {}; // Get the product ID if passed
  const [showModal, setShowModal] = useState(false);
  const { addNotification } = useNotifications();

  // Filter out already selected assessments
  const availableAssessments = assessments.filter(assessment => !currentAssessments.some(a => a.name === assessment.name));
  // Handle card selection
  const handleSelectAssessment = (id) => {
    setSelectedAssessment(id);
  };

  const cancel = () => {
    navigate(`/product/${productId}`);
  }

  // Confirm button handler
  const handleConfirm = () => {
    if (selectedAssessment) {
      // You can do something with the selected assessment, e.g., save to the backend
      const selectedAssessmentData = availableAssessments.find(a => a.id === selectedAssessment);
      console.log(`Selected Assessment: ${selectedAssessment}`);

      if (risk === "Risk not classified" && selectedAssessmentData.name.includes("EU AI Act")) {
        setShowModal(true);
        return;
      }

      // Add a notification
      addNotification({
        id: Date.now(), // Unique ID for the notification
        message: `New Assessment started: ${selectedAssessmentData.name}`,
        read: false,
        link: `/product/${productId}`,
      });

      // Navigate back or proceed with product update based on the selected assessment
      navigate(`/product/${productId}`, {
        state: { assessment: selectedAssessmentData.name}, // Pass back the selected risk
      });
    } else {
      alert('Please select an assessment before confirming.');
    }
  };

  const handleStartRiskClassification = () => {
    navigate(`/product/${productId}/risk-method-selection`, { state: { productId: productId, productName: productName } });
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

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
            description="Start Assessment"
          />
          {showModal && (
              <DisclaimerModal
              onClose={handleStartRiskClassification}
              onCloseText={"Start Risk Classification"}
              onBack={handleCloseModal}
              title={"Unclassified Risk"}
              body={<>
                <p>Please <b>classify the Risk of your AI System under the EU AI Act first</b> before starting the EU AI Act Assessment or select another assessment.</p>
              </>}
              />
            )}
            <div className="assessment-library">
                <h2>Assessment Wizard</h2>
                <h3>Select an assessment to start</h3>
                <div className='assessment-wrapper'>
                    <div className="assessment-cards-container">
                    {availableAssessments.map((assessment) => {
                      const isDisabled = risk === "Prohibited" && assessment.name.includes("EU AI Act");
                      
                      return (
                        <div
                          key={assessment.id}
                          className={`assessment-card-start ${selectedAssessment === assessment.id ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                          onClick={() => !isDisabled && handleSelectAssessment(assessment.id)} // Prevent selection if disabled
                        >   
                          <div className='assessment-card-image' style={{ backgroundColor: isDisabled ? '#e0e0e0' : assessment.backgroundColor }}>
                            <img src={assessment.logo} alt={assessment.name} style={{ filter: isDisabled ? 'grayscale(100%)' : 'none' }} />
                          </div>
                          <div className='assessment-card-text'>
                            <h3>{assessment.name}</h3>
                            <p>{assessment.description}</p>
                          </div>
                          {isDisabled && (
                            <div className="tooltip-prohibited">
                            <p>The EU AI Act Assessment is currently disabled due to your product being classified as a <b>prohibited system</b> under the EU AI Act.</p> 
                            <p>Please take corrective measures and re-classify the risk-level to ensure compliance first.</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    </div>
                    <div className="button-container">
                        <button className="confirm-button" onClick={cancel}>Back</button>
                        <button className="confirm-button" onClick={handleConfirm}>Next</button>
                    </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default StartAssessment;