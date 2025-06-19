import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Home/ProductInventory.css';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import "../ProductCreation/AddProduct.css"; // Reusing AddProduct styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUpload, faCancel } from '@fortawesome/free-solid-svg-icons';
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import { handleFileUpload } from '../Components/FileUpload';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Form state
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    industry: '',
    dataType: '',
    mlApplicationType: '',
    productDocumentation: null,
    productPhase: '',
    productOwner: '',
    businessLineLawyer: '',
  });

  const [originalData, setOriginalData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

  // Fetch product details
  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Product details:", data);
        setProductData(data);
        setOriginalData(data); // Store original values for comparison
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setProductData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage("File size exceeds 5MB limit.");
        e.target.value = "";
      } else {
        setErrorMessage("");
        setProductData((prev) => ({
          ...prev,
          productDocumentation: file,
        }));
      }
    }
  };

  // Function to check if a field was changed
  const hasChanged = (field) => productData[field] !== originalData[field];

  const goBack = () => {
    navigate(`/product/${id}`);
};

  // Save changes
  const saveChanges = async () => {
    const updates = [];
    Object.keys(productData).forEach((key) => {
      if (hasChanged(key) && productData[key] !== '') {
        updates.push({ attribute: key, value: productData[key] });
      }
    });

    if (Object.keys(updates).length === 0) {
      setErrorMessage("No changes detected.");
      return;
    }

    try {
      await fetch(`http://localhost:9000/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"updates": updates}), // Specify the attribute to update
    });

      if (productData.productDocumentation && hasChanged("productDocumentation")) {
        handleFileUpload(id, productData.productDocumentation, "product_documentation");
      }

      navigate(`/product/${id}`); // Redirect after saving
    } catch (error) {
      console.error("Error updating product:", error);
      setErrorMessage("Failed to save changes.");
    }
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
          description="Edit Product"
        />
        <div className="add-product-page">
          <div className="layout-container-creation">
            <div className="left-section-creation">
              <div className="section-container">
                <h2>Product Metadata</h2>

                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    value={productData.productName}
                    onChange={(e) => handleInputChange("productName", e.target.value)}
                    placeholder="Product Name"
                  />
                </div>

                <div className="form-group">
                  <label>Product Description</label>
                  <textarea
                    value={productData.productDescription}
                    onChange={(e) => handleInputChange("productDescription", e.target.value)}
                    placeholder="Describe the product..."
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Industry</label>
                    <select value={productData.industry} onChange={(e) => handleInputChange("industry", e.target.value)}>
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
                    <select value={productData.dataType} onChange={(e) => handleInputChange("dataType", e.target.value)}>
                      <option value="">Select Type</option>
                      <option value="Text">Text</option>
                      <option value="Image">Image</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>ML Application Type</label>
                    <select value={productData.mlApplicationType} onChange={(e) => handleInputChange("mlApplicationType", e.target.value)}>
                      <option value="">Select Type</option>
                      <option value="LLM">LLM</option>
                      <option value="Image Classifier">Image Classifier</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>(Optional) Product Documentation</label>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      <FontAwesomeIcon icon={faUpload} /> Upload File
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileChange} />
                    {productData.productDocumentation && (
                      <span className="file-name">{productData.productDocumentation.name}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="right-section-creation">
              <div className="section-container">
                <h2>Project Details</h2>

                <div className="form-group">
                  <label>Product Owner</label>
                  <input
                    type="text"
                    value={productData.productOwner}
                    onChange={(e) => handleInputChange("productOwner", e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <label>Business Line Lawyer</label>
                  <input
                    type="text"
                    value={productData.businessLineLawyer}
                    onChange={(e) => handleInputChange("businessLineLawyer", e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <label>Product Phase</label>
                  <select value={productData.productPhase} onChange={(e) => handleInputChange("productPhase", e.target.value)}>
                    <option value="">Select Phase</option>
                    <option value="In Development">In Development</option>
                    <option value="Testing">Testing</option>
                    <option value="Deployed">Deployed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-container-edit'>
            <button className="cancel-edit-button" onClick={goBack}>
            <FontAwesomeIcon icon={faCancel} /> Cancel
            </button>
            <button className="save-changes-button" onClick={saveChanges}>
                <FontAwesomeIcon icon={faSave} /> Save Changes
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;