import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';  // Import uuid to generate unique IDs
import { FaEdit, FaTrashAlt } from 'react-icons/fa';  // Import icons for edit and delete
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import ConfirmModal from '../Home/ConfirmModal';
import AssessmentProgress from './AssessmentProgress';
import CircularProgress from './CircularProgress';
import DisclaimerModal from '../Components/DisclaimerModal';
import DocumentOverview from './DocumentOverview';
import '../Home/MainContent.css';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCube, FaClipboardList } from "react-icons/fa";
import { faAdd, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { LuRefreshCw } from "react-icons/lu";
import { MdOutlineFilePresent } from "react-icons/md";
import EuAiAct from '../assets/eu-ai-act.png';
import CertifAiLogo from '../assets/certifai.ico';
import IsoLogo from '../assets/iso.webp';
import taskData from './assessmentTasks.json';
import Breadcrumb from '../Navigation/Breadcrumb';
import Members from './Members';
import certifAiLogo from '../assets/CAI_Logo_Black.png';

const ProductDetails = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [assessments, setAssessments] = useState([]);
  const [productDocumentation, setProductDocumentation] = useState([]);
  const [riskDocuments, setRiskDocuments] = useState([]);
  const [riskClassificationMethod, setRiskClassificationMethod] = useState(null);
  const [showModal, setShowModal] = useState(false);  // State to control modal visibility
  const [shouldUpdate, setShouldUpdate] = useState(false); // To track when to update product
  const [assessmentStatus, setAssessmentStatus] = useState(null);
  const [risk, setRisk] = useState(null);
  const [showProhibitedModal, setShowProhibitedModal] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard"); // "dashboard" or "documents"
  const navigate = useNavigate();
  const location = useLocation();
  const logos = {
    "EU AI Act (Regulation EU) 2024/1689": EuAiAct,
    "ISO/IEC TR 24029-1 - AI Assessment of the Robustness of Neural Networks": IsoLogo,
    "ISO/IEC TR 24027 - Bias in AI systems and AI aided decision making": IsoLogo,
    "CAI Trustworthy AI Risk Assessment": CertifAiLogo,
    "CAI LLM Quality Assessment": CertifAiLogo,
  };
  const [assessmentTasks, setAssessmentTasks] = useState([]);

  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { name: "Home", path: "/home" },
  ]);


  useEffect(() => {
    setAssessmentTasks(taskData);
  }, []);

  // Fetch the product details from the backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:9000/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          setBreadcrumbItems(
            [
              { name: "Home", path: "/home" },
              { name: data.productName, path: `/product/${id}` },
            ]
          );
          
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchAssessments = async () => {
      try {
        const response = await fetch(`http://localhost:9000/assessments/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAssessments(data);
        } else {
          console.error('Assessments not found or not available');
        }
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };
    const loadDocumentation = async () => {
      const fetchedFiles = await fetchFiles(id, "product_documentation");
      setProductDocumentation(fetchedFiles);
    };
    const loadRiskClassification = async () => {
      const fetchedFiles = await fetchFiles(id, "risk_classification");
      setRiskDocuments(fetchedFiles);
    };

    fetchProduct();
    fetchAssessments();
    loadDocumentation();
    loadRiskClassification();
  }, [id, shouldUpdate]);

  const fetchFiles = async (productId, folderName) => {
    try {
      const response = await fetch(`http://localhost:9000/files?productId=${productId}&folderName=${folderName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      const data = await response.json();
      console.log('Files:', data.files);
      return data.files;
    } catch (error) {
      console.error('Error fetching files:', error);
      return [];
    }
  };

  
  useEffect(() => {
    // Function to persist the updated product to the backend
    if (!shouldUpdate && location.state?.risk && product) {
      console.log("new risk", location.state.risk);
      setShouldUpdate(true); // Set the flag to update the backend
      setRisk(location.state.risk);
      if (location.state?.risk === "Prohibited") {
        setShowProhibitedModal(true);
      }
      setRiskClassificationMethod(location.state.riskClassificationMethod);
      // Clear location state and replace URL to prevent re-triggering
      navigate(`/product/${id}`, { replace: true, state: {} });
    }
  }, [location.state?.risk, location.state?.riskClassificationMethod, id, navigate, product, shouldUpdate]);


  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file); // Add file
  
    try {
      const response = await fetch(`http://localhost:9000/upload/${id}`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log('File uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  }


  useEffect(() => {
    // Function to persist the updated product to the backend
    if (!location.state?.proof) {
      return;
    }
    uploadFile(location.state?.proof);
  }, [location.state?.proof]);

  useEffect(() => {

    const createAssessment = async (newAssessment) => {
      console.log('Updating assessment backend:', newAssessment);
        try {
          const response = await fetch(`http://localhost:9000/assessments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAssessment), // Send the updated product object
          });
          if (!response.ok) {
            throw new Error('Failed to update assessment');
          }
          console.log(response.text());
        } catch (err) {
          console.error(err.message);
        }
      }
    // Function to persist the updated product to the backend
    if (!shouldUpdate && location.state?.assessment && product) {
      const newAssessment = {
        "id": uuidv4(),
        "productId": product.id,
        "name": location.state.assessment,
        "startDate": new Date().toLocaleDateString(),
        "createdBy": "user_handle",
        "progress": 0,
      }
      console.log('newAssessment', newAssessment);
      setAssessments((prevAssessments) => [...prevAssessments, newAssessment]);
      createAssessment(newAssessment);
      if (product.assessmentStatus === "Not started") {
        setAssessmentStatus("In Assessment");
      }
      setShouldUpdate(true); // Set the flag to update the backend
      // Clear location state and replace URL to prevent re-triggering
      navigate(`/product/${id}`, { replace: true, state: {} });
    }
  }, [location.state?.assessment, navigate, id, product, shouldUpdate, assessmentTasks]);

   // Persist the updated product to the backend only when the flag is set
   useEffect(() => {
    const updateRisk = async (key, value) => {
      if (shouldUpdate && risk) {
        console.log('Updating risk:', risk);
        try {
          const response = await fetch(`http://localhost:9000/products/${id}`, {
            method: 'PUT', // Use 'PATCH' if you're only updating a specific field
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"updates": [{ attribute: key, value: value}]} ), // Send the updated product object
          });
          if (!response.ok) {
            throw new Error('Failed to update product');
          }
          console.log(response.text());
        } catch (err) {
          console.error(err.message);
        }
        setShouldUpdate(false); // Reset the flag
        setRisk(null);
      }
    };
    updateRisk("risk", risk);
    updateRisk("riskClassificationMethod", riskClassificationMethod);
  }, [shouldUpdate, risk, riskClassificationMethod, product, id]);


  useEffect(() => {
    const updateStatus = async () => {
      if (shouldUpdate && assessmentStatus) {
        console.log('Updating status:', assessmentStatus);
        try {
            const response = await fetch(`http://localhost:9000/products/${id}`, {
            method: 'PUT', // Use 'PATCH' if you're only updating a specific field
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"updates": [{ attribute: "assessmentStatus", value: assessmentStatus }]}), // Specify the attribute to update
            });
          if (!response.ok) {
            throw new Error('Failed to update product');
          }
          console.log(response.text());
        } catch (err) {
          console.error(err.message);
        }
        setShouldUpdate(false); // Reset the flag
        setAssessmentStatus(null);
      }
    }
    updateStatus();
  }, [shouldUpdate, assessmentStatus, product, id]);


  // Handle deletion of the product
  const deleteProduct = async () => {
    await fetch(`http://localhost:9000/products/${id}`, {
    method: 'DELETE',
    });
    navigate('/home');  // Navigate back to the main inventory page after deletion
  };

  const handleStartRiskClassification = () => {
    console.log('Start Risk Classification for product: ' + id);
    navigate(`./risk-method-selection`, {
      state: { productId: product.id, productName: product.productName }, // Pass the product ID to Risk Classification page
    });
  };

  const handleStartAssessment = () => {
    navigate(`/start-assessment`, {
      state: { productId: product.id, productName: product.productName, currentAssessments: assessments, risk: product.risk }, // Pass the product ID if needed for context
    });
  };

  // Navigate to the assessment overview page
  const handleAssessmentClick = (assessmentId, assessmentName) => {
    navigate(`/assessment/${assessmentId}`, {
      state: { productId: product.id, productName: product.productName, applicationType: product.mlApplicationType, assessmentName: assessmentName }, // Pass the product ID if needed for context
    });
  };

  const handleFileClick = (fileName, dir) => {
    const fileUrl = `http://localhost:9000/files/${id}/${dir}/${fileName}`;
    window.open(fileUrl, '_blank'); // Opens the file in a new tab
  };

  // Handle editing the product (navigate to edit form)
  const editProduct = () => {
    navigate(`/edit-product/${id}`);
  };

  const calculateProgress = () => {
    if (assessments.length === 0) {
      return 0;
    }
    const total = assessments.reduce((acc, assessment) => acc + assessment.progress, 0);
    return Math.round(total / assessments.length);
  }

  const handleCloseModal = () => {
    setShowProhibitedModal(false);
  }


  if (!product) {
    return <div>Loading...</div>;
  }

  console.log('assessments', assessments);


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
            description="Product View"
          />
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
            {showProhibitedModal && (
              <DisclaimerModal
              onClose={handleCloseModal}
              title={"Warning: Prohibited Risk Classification"}
              body={
                  <>
                  <p>
                  Based on the information you provided, the classifier has determined that <b>your AI system is likely prohibited under the EU AI Act</b>. You may review with your legal representative for next steps.
                  </p>
                  <span>
                    Note: The EU AI Act Assessment will not be available for prohibited systems. It will be available once the risk classification is updated.
                  </span>
                </>}
              />
            )}
             {/* Tab System */}
        <div className="tab-container">
          <button
            key={"dashboard"}
            className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Product Dashboard
          </button>
          <button
            key={"documents"}
            className={`tab ${activeTab === "documents" ? "active" : ""}`}
            onClick={() => setActiveTab("documents")}
          >
            Document Overview
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "dashboard" ? (
            <div className='product-details-container'>
              <div className='layout-container'>
                <div className='left-section'>
                  <div className="product-card">
                      <div className="card-header">
                          <div className="card-title">
                          <h2>{product.productName}</h2>
                          </div>
                          <div className="card-actions">
                          <button onClick={editProduct} className="icon-button">
                              <FaEdit size={20} />
                          </button>
                          <button onClick={() => setShowModal(true)} className="icon-button delete">
                              <FaTrashAlt size={20} />
                          </button>
                          </div>
                      </div>
                      <div className="card-content">
                          <p><strong>Product Description:</strong> {product.productDescription}</p>
                          <p><strong>Industry:</strong> {product.industry}</p>
                          <p><strong>ML Application Type:</strong> {product.mlApplicationType}</p>
                          <p><strong>Data Type:</strong> {product.dataType}</p>
                          <div>
                            <p><strong>Product Documentation</strong></p>
                            {productDocumentation.length === 0 ? (
                              <p>No files uploaded</p>
                            ) : (
                              <>
                                {productDocumentation.map((file) => (
                                  <button
                                    className='file-button'
                                    onClick={() => handleFileClick(file, "product_documentation")}
                                    key={file}
                                  >
                                    <MdOutlineFilePresent color='gray' size={20} />
                                    {file}
                                  </button>
                                ))}
                              </>
                            )}
                          </div>
                          <p><strong>Product Owner:</strong> {product.productOwner}</p>
                          <p><strong>Business Line Lawyer:</strong> {product.businessLineLawyer}</p>
                      </div>
                  </div>
                  <Members productId={id}/>
                  {/* Assessments Section */}
                  <div className="assessments-section">
                    <h2>Assessments</h2>
                    {assessments.length > 0 ? (
                      assessments.map((assessment, index) => (
                        <div key={index} className="assessment-card-active" onClick={() => handleAssessmentClick(assessment.id, assessment.name)}>
                          <div className="assessment-logo">
                            <img src={logos[assessment.name]} alt={`${assessment.name} logo`} />
                          </div>
                          <div className="assessment-info">
                            <h3>{assessment.name}</h3>
                            <div className="assessment-meta">
                              <p>Started: {assessment.startDate}</p>
                              <p>Created by: {assessment.createdBy}</p>
                            </div>
                          </div>
                          <div className="assessment-progress-small">
                            <CircularProgress progress={assessment.progress} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No assessments available.</p>
                    )}
                  </div>
                  </div>
                <div className='right-section'>
                  <div className="risk-card">
                    <h3>Risk Classification</h3>

                    <div style={{
                      marginBottom: '40px',
                    }}>
                    </div>
                    {product.risk !== "Risk not classified" ? (
                      <div className='risk-classification-details'>
                      <div className='risk-level-container'>
                        <div className="risk-level-display">
                          <p><strong>{product.risk} Application</strong></p>
                        </div>
                        <button 
                          className='update-risk-button'
                          onClick={handleStartRiskClassification}
                        >
                          <LuRefreshCw />
                        </button>
                      </div>

                      <p><strong>Classification Method:</strong> {product.riskClassificationMethod}</p>
                      {riskDocuments.map((file, index) => (
                        <button
                          className='file-button'
                          onClick={() => handleFileClick(file, "risk_classification")}
                        >
                          <MdOutlineFilePresent color='gray' size={20} />
                          {file}
                        </button>
                      ))}
                      </div>
                    ) : (
                      <div>
                      <p>Determine the Risk Level of your Product with the help of our Risk Database. </p>
                      <button 
                        className='submit-button'
                        onClick={handleStartRiskClassification}
                      >
                        <FontAwesomeIcon icon={faExclamationCircle} /> Start Risk Classification
                      </button>
                      </div>
                    )}
                  </div>
                  <div className='status-card'>
                    <h3>Project status</h3>
                    <div style={{
                      marginBottom: '40px',
                    }}>
                    </div>
                    <div className="detail">
                      <FaCube size={20} className={`icon ${product.productPhase.toLowerCase().replace(' ', '-')}`} />
                      <span>{product.productPhase}</span>
                    </div>
                    <div className="detail">
                      <FaClipboardList size={20} className={`icon ${product.assessmentStatus.toLowerCase().replace(' ', '-')}`} />
                      <span>{product.assessmentStatus}</span>
                    </div>
                  </div>
                  <div className="assessment-progress">
                    <AssessmentProgress progress={calculateProgress()} /> {/* Pass the progress */}
                    <button className="start-assessment-button" onClick={handleStartAssessment}>
                      <FontAwesomeIcon icon={faAdd} /> Start New Assessment
                    </button>
                  </div>
                </div>
              </div>
              
              {/* ConfirmModal component */}
              <ConfirmModal
                  show={showModal}
                  onClose={() => setShowModal(false)}  // Close modal without deleting
                  onConfirm={deleteProduct}  // Confirm deletion
              />
          </div>
          ) : (
            <DocumentOverview productId={id} productName={product.productName} />
          )}
          </div>
        </div>
    </div>
  );
};

export default ProductDetails;