import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Breadcrumb from '../Navigation/Breadcrumb';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { handleFileUpload } from '../Components/FileUpload';

import './ExternalRiskClassification.css';

const ExternalRiskClassification = () => {
  const [selectedRisk, setSelectedRisk] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null); // State to store uploaded file
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, productName } = location.state || {};

  const [errorMessage, setErrorMessage] = useState("");
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes


  const breadcrumbItems = [
    { name: "Home", path: "/home", state:{} },
    { name: productName, path: `/product/${productId}`, state:{}},
    { name: "Risk Classification", path: `` },
];

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage("File size exceeds 5MB limit.");
        e.target.value = ""; // Clear the file input
      } else {
        setErrorMessage("");
        console.log("File selected:", file.name);
        setUploadedFile(file);
        // Proceed with file handling logic
      }
    }
  };


  // Handle confirmation and navigation back to the Product Details page
  const handleConfirm = () => {
    if (selectedRisk && uploadedFile) {
      handleFileUpload(productId, uploadedFile, "risk_classification"); // Upload the file
      navigate(`/product/${productId}`, {
        state: { risk: selectedRisk, riskClassificationMethod: "External Classification" }, // Pass back the selected risk and file
      });
    } else {
      alert('Please select a risk classification and upload a file before confirming.');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header title="CERTIF.AI Compliance Cockpit" description="Risk Classification" />
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <div className="risk-classification-page">
          <div className="risk-classification-header">
            <h1>External Risk Classification</h1>
            <p>Set the risk level according to your external classification and upload proof.</p>
          </div>

          {/* Form Group */}
          <div className = "risk-classification-form" >
            <div className="form-group-container">
              <div className="form-group-tag">
                <IoMdInformationCircleOutline size={120} color="white" />
              </div>
                <div className="form-group-content">
                  <div className="form-group">
                      <label htmlFor="riskLevel">Risk Classification:</label>
                      <select
                        id="riskLevel"
                        value={selectedRisk}
                        onChange={(e) => setSelectedRisk(e.target.value)}
                      >
                        <option value="">Select Risk Level</option>
                        <option value="Prohibited">Prohibited</option>
                        <option value="High Risk">High Risk</option>
                        <option value="Limited Risk">Limited Risk</option>
                        <option value="Low Risk">Low Risk</option>
                        <option value="Risk not classified">Unclassified Risk</option>
                      </select>
                    </div>
                  </div>
              </div>
              <div className="form-group-container">
                {/* File Upload Section */}
                <div className="form-group-tag">
                  <IoDocumentAttachOutline size={120} color="white" />
                </div>
                
                <div className="form-group-content">
                  <div className="form-group">
                    <label htmlFor="proofUpload">Upload Proof:</label>
                    <input
                      type="file"
                      id="proofUpload"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" // Allowed file types
                      onChange={handleFileChange}
                    />
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    {uploadedFile && <p>Uploaded File: {uploadedFile.name}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className='risk-classification-footer'>
              {/* Confirm Button */}
              <button onClick={handleGoBack} className="button">
                Back
              </button>
              <button onClick={handleConfirm} className="button">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ExternalRiskClassification;