import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../Home/ProductInventory.css';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import "./AddProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import { handleFileUpload } from '../Components/FileUpload';
import { useNotifications } from '../Notifications/NotificationContext';
import ProductDetails from '../ProductView/ProductDetails';


// export default AddProduct;
const AddProduct = () => {
  // Form state
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [industry, setIndustry] = useState('');
  const [dataType, setDataType] = useState('');
  const [mlApplicationType, setMLApplicationType] = useState('');
  const [productDocumentation, setProductDocumentation] = useState(null);
  const [productPhase, setProductPhase] = useState('');
  const [productOwner, setProductOwner] = useState('');
  const [businessLineLawyer, setBusinessLineLawyer] = useState('');
  const [risk] = useState('Risk not classified');  // Default risk level
  const [errorMessage, setErrorMessage] = useState(''); // To hold error messages for validation
  const [missingFields, setMissingFields] = useState([]); // To track missing fields
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
  const { addNotification } = useNotifications();
  

  const navigate = useNavigate();  // To navigate back to the main page after adding a product

  // File upload handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage("File size exceeds 5MB limit.");
        e.target.value = ""; // Clear the file input
      } else {
        setErrorMessage("");
        console.log("File selected:", file.name);
        setProductDocumentation(file);
        // Proceed with file handling logic
      }
    }
  };

  // Handle change and remove field from missingFields if filled
  const handleInputChange = (setter, fieldName, e) => {
    setter(e.target.value);
    if (missingFields.includes(fieldName)) {
      setMissingFields(missingFields.filter((field) => field !== fieldName));  // Remove from missingFields
    }
  };

  const addItem = async () => {
    // Check for missing required fields
    const missing = [];
    if (!productName) missing.push('productName');
    if (!productDescription) missing.push('productDescription');
    if (!industry) missing.push('industry');
    if (!dataType) missing.push('dataType');
    if (!mlApplicationType) missing.push('mlApplicationType');
    if (!productPhase) missing.push('productPhase');
    if (!productOwner) missing.push('productOwner');
    if (!businessLineLawyer) missing.push('businessLineLawyer');

    // If there are missing fields, set the error message and don't proceed
    if (missing.length > 0) {
      setErrorMessage('Please fill out all required fields.');
      setMissingFields(missing);  // Highlight missing fields
      return;  // Stop here if validation fails
    }

    // If no missing fields, clear error and proceed with product creation
    setErrorMessage('');
    setMissingFields([]);  // Clear missing fields array

    // Create a new product object    
    const newItem = {
      "id": uuidv4(),  // Generate a unique ID for the product
      "productName": productName,
      "productDescription": productDescription,
      "industry": industry,
      "dataType": dataType,
      "mlApplicationType": mlApplicationType,
      "productDocumentation": productDocumentation,
      "assessments": [], // assessment will be started from the product page not from the creation page
      "assessmentStatus": "Not started", // TODO: could also start directly
      "assessmentProgress": 0, // TODO: implement assessment progress
      "risk": risk, 
      "riskClassificationMethod": "Not classified",
      "productPhase": productPhase,
      "productOwner": productOwner,
      "businessLineLawyer": businessLineLawyer,
    };

    console.log(JSON.stringify(newItem));

    // Send POST request to add product to inventory
    await fetch('http://localhost:9000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    // Add a notification
    addNotification({
      id: Date.now(), // Unique ID for the notification
      message: `New Product added: ${productName}`,
      read: false,
      link: `/product/${newItem.id}`,
    });

    if (productDocumentation) {
      handleFileUpload(newItem.id, productDocumentation, "product_documentation");  // Upload product documentation if provided
    }
  
    // Navigate back to the main inventory page
    navigate('/home');
  };

  // Function to check if a field is missing and return the appropriate CSS class
  const getInputClass = (fieldName) => {
    return missingFields.includes(fieldName) ? 'input-error' : '';
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
              description="Add Product"
            />
                <div className="add-product-page">
                  {/* Flex container for the entire layout */}
                  <div className="layout-container-creation">

                    {/* Left Side: Product Metadata */}
                    <div className="left-section-creation">
                      <div className="section-container">
                        <h2>Product Metadata</h2>

                        <div className="form-group">
                          <label>Product Name</label>
                          <input
                            type="text"
                            value={productName}
                            onChange={(e) => handleInputChange(setProductName, 'productName', e)}
                            className={getInputClass('productName')} required
                            placeholder="Please enter a unique product code name"
                          />
                        </div>

                        <div className="form-group">
                          <label>Product Description</label>
                          <textarea
                            value={productDescription}
                            onChange={(e) => handleInputChange(setProductDescription, 'productDescription', e)}
                            className={getInputClass('productDescription')} required
                            placeholder="Describe your product with the following information.."
                          ></textarea>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label>Industry</label>
                            <select value={industry} onChange={(e) => handleInputChange(setIndustry, "industry", e)} className={getInputClass('industry')} required>
                              <option value="">Select Industry</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Finance">Finance</option>
                              <option value="Manufacturing">Manufacturing</option>
                              <option value="Autonomous Driving">Autonomous Driving</option>
                              <option value="Education">Education</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label>Data Type</label>
                            <select value={dataType} onChange={(e) => handleInputChange(setDataType, 'dataType', e)} className={getInputClass('dataType')} required>
                              <option value="">Select Type</option>
                              <option value="Text">Text</option>
                              <option value="Image">Image</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label>ML Application Type</label>
                            <select value={mlApplicationType} onChange={(e) => handleInputChange(setMLApplicationType, 'mlApplicationType', e)} className={getInputClass('mlApplicationType')} required>
                              <option value="">Select Type</option>
                              <option value="LLM">LLM</option>
                              <option value="Image Classifier">Image Classifier</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label>(Optional) Product Documentation</label>
                            {/* Custom File Upload Button */}
                            <label htmlFor="file-upload" className="custom-file-upload">
                              <FontAwesomeIcon icon={faUpload} /> Upload File
                            </label>
                            <input
                              id="file-upload"
                              type="file"
                              onChange={handleFileChange}
                            />
                            
                            {productDocumentation && (
                              <span className="file-name">{productDocumentation.name}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Project and Assessment Details */}
                    <div className="right-section-creation">
                      {/* Project Details */}
                      <div className="section-container">
                        <h2>Project Details</h2>

                        <div className="form-group">
                          <label>Product Owner</label>
                          <input
                            type="text"
                            value={productOwner}
                            onChange={(e) => handleInputChange(setProductOwner, 'productOwner', e)}
                            className={getInputClass('productOwner')} required
                            placeholder="Name"
                          />
                        </div>

                        <div className="form-group">
                          <label>Business Line Lawyer</label>
                          <input
                            type="text"
                            value={businessLineLawyer}
                            onChange={(e) => handleInputChange(setBusinessLineLawyer, 'businessLineLawyer', e)}
                            className={getInputClass('businessLineLawyer')} required
                            placeholder="Name"
                          />
                        </div>

                        <div className="form-group">
                          <label>Product Phase</label>
                          <select value={productPhase} onChange={(e) => handleInputChange(setProductPhase, 'productPhase', e)} className={getInputClass('productPhase')} required>
                            <option value="">Select Phase</option>
                            <option value="In Development">In Development</option>
                            <option value="Testing">Testing</option>
                            <option value="Deployed">Deployed</option>
                          </select>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                  <button className="init-product-button" onClick={addItem}>
                        <FontAwesomeIcon icon={faCheckCircle} /> Initiate Product
                  </button>
                  {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if validation fails */}
                </div>
            </div>
        </div>
  );
};

export default AddProduct;