import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '../ProductView/CircularProgress';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './ActiveAssessments.css';  // Add your styling here
import EuAiAct from '../assets/eu-ai-act.png';
import CertifAiLogo from '../assets/certifai.ico';
import IsoLogo from '../assets/iso.webp';
import { FaCube, FaCircle, FaClipboardList } from 'react-icons/fa';
import { LuCodesandbox } from "react-icons/lu";
import AssessmentProgress from '../ProductView/AssessmentProgress';
import certifAiLogo from '../assets/CAI_Logo_Black.png';

const ActiveAssessments = () => {
  const [products, setProducts] = useState([]);
  const [assessments, setAssessments] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const logos = {
    "EU AI Act (Regulation EU) 2024/1689": EuAiAct,
    "ISO/IEC TR 24029-1 - AI Assessment of the Robustness of Neural Networks": IsoLogo,
    "ISO/IEC TR 24027 - Bias in AI systems and AI aided decision making": IsoLogo,
    "CAI Trustworthy AI Risk Assessment": CertifAiLogo,
    "CAI LLM Quality Assessment": CertifAiLogo,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:9000/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          console.log("Fetched products:", data);
  
          // After fetching products, proceed to fetch assessments
          await fetchAssessments(data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (error) {
        setError('Error fetching products');
        console.error('Error:', error);
      }
    };
  
    const fetchAssessments = async (products) => {
      try {
        // Use Promise.all to handle parallel requests and ensure all requests are complete before updating state
        const assessmentPromises = products.map(async (product) => {
          try {
            const response = await fetch(`http://localhost:9000/assessments/${product.id}`);
            if (response.ok) {
              const data = await response.json();
              if (data.length > 0) {
                return { product, data };
              }
            } else {
              setError('Failed to fetch assessments for some products');
            }
          } catch (error) {
            setError('Error fetching assessments');
            console.error('Error:', error);
          }
          return null; // In case of failure, return null to skip
        });
  
        // Wait for all fetches to complete
        const results = await Promise.all(assessmentPromises);
  
        // Filter out unsuccessful fetches and prepare data for state updates
        const assessmentsData = {};
        const filteredProducts = [];
  
        results.forEach((result) => {
          if (result) {
            assessmentsData[result.product.id] = result.data;
            filteredProducts.push(result.product);
          }
        });
  
        // Update state with filtered products and assessments
        setAssessments(assessmentsData);
        setProducts(filteredProducts);
        console.log("Assessments:", assessmentsData);
        console.log("Filtered Products:", filteredProducts);
  
      } catch (error) {
        setError('Error processing assessments');
        console.error('Error:', error);
      }
    };
  
    fetchProducts().then(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Navigate to the assessment overview page
  const handleAssessmentClick = (assessmentId, assessmentName, product) => {
    navigate(`/assessment/${assessmentId}`, {
      state: { productName: product.productName, productId: product.id, applicationType: product.mlApplicationType, assessmentName: assessmentName }, // Pass the product ID if needed for context
    });
  };

  const calculateProgress = (product) => {
    if (assessments[product.id].length === 0) {
      return 0;
    }
    const total = assessments[product.id].reduce((acc, assessment) => acc + assessment.progress, 0);
    return Math.round(total / assessments[product.id].length);
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
      <Header 
        title={
          <span>
            <img src={certifAiLogo} alt="CERTIF.AI" className="certif-ai-logo" /> 
            Compliance Cockpit
          </span>
        } 
        description="Active Assessments"
      />
        <div className="overview-container">
          {products.map((product, index) => (
            <div className="product-card-active" key={index}>
              <div className="card-container-active">
                <div className="card-product">
                    <div className="card-content-active">
                        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                            <LuCodesandbox size={40} className='product-icon'/>
                            <h2 className='card-title'>{product.productName}</h2>
                        </div>
                        <p><strong>Product Owner:</strong> {product.productOwner}</p>
                        <p><strong>Product Description:</strong> {product.productDescription}</p>
                    </div>
                </div>
                <div className='card-status'>
                    <div className="card-content-acitve">
                        <h3>Status</h3>
                        <div className="detail">
                            <FaCube size={20} className={`icon ${product.productPhase.toLowerCase().replace(' ', '-')}`} />
                            <span>{product.productPhase}</span>
                        </div>
                        <div className="detail">
                            <FaCircle size={20} className={`icon ${product.risk.toLowerCase().replace(' ', '-')}`} />
                            <span>{product.risk}</span>
                        </div>
                        <div className="detail">
                            <FaClipboardList size={20} className={`icon ${product.assessmentStatus.toLowerCase().replace(' ', '-')}`} />
                            <span>{product.assessmentStatus}</span>
                        </div>
                    </div>
                </div>
                {/* Progress Card */}
                <AssessmentProgress progress={calculateProgress(product)} /> {/* Pass the progress */}
              </div>

              {/* Assessments Section */}
              <div className="assessment-container">
                {assessments[product.id].length > 0 ? (
                    assessments[product.id].map((assessment, index) => (
                    <div key={index} className="assessment-card-active" onClick={() => handleAssessmentClick(assessment.id, assessment.name, product)}>
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
                        <div className="assessment-progress">
                            <CircularProgress progress={assessment.progress} />
                        </div>
                    </div>
                    ))
                ) : (
                    <p>No assessments available.</p>
                )}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveAssessments;