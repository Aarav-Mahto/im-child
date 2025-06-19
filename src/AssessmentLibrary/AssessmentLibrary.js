import React from 'react';
import './AssessmentLibrary.css';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import certifAiLogo from '../assets/CAI_Logo_Black.png';

const assessments = {
  "Legal Frameworks": [
    {
      title: "EU AI Act (Regulation EU) 2024/1689",
      description: "Obligations of the EU AI Act supported by relevant industry standards",
    },
  ],
  "Technical Standards": [
    {
      title: "ISO/IEC TR 24029-1 - AI Assessment of the Robustness of Neural Networks",
      description: "Assess the Seven Dimensions of Trustworthiness of your AI System.",
    },
    {
      title: "ISO/IEC TR 24027 - Bias in AI systems and AI aided decision making",
      description: "Assess the Seven Dimensions of Trustworthiness of your AI System.",
    },
  ],
  "Other Frameworks": [
    {
      title: "CAI Trustworthy AI Risk Assessment",
      description: "Assess the Seven Dimensions of Trustworthiness of your AI System.",
    },
    {
      title: "CAI LLM Quality Assessment",
      description: "Focus on the quality of your LLM-based product.",
    },
  ],
};

const AssessmentLibrary = () => {
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
          description="Assessment Library"
        />
            <div className="assessment-library">
                {Object.keys(assessments).map((category) => (
                    <div key={category} className="assessment-category">
                    <h3>{category}</h3>
                    <div className="assessment-grid">
                        {assessments[category].map((assessment, index) => (
                        <div key={index} className="assessment-card">
                            <div className="card-top-section">
                            <h4>{assessment.title}</h4>
                            <p>{assessment.description}</p>
                            </div>
                          <div className="card-bottom-section">
                          <button className="bookmark-button">
                            <i className="fas fa-bookmark"></i>
                            </button>
                          <button className="buy-button">Buy</button>
                          <button className="view-button">View</button>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default AssessmentLibrary;