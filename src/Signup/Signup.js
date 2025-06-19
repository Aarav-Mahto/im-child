// src/signin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { FiCodesandbox } from "react-icons/fi";
import { DiCode } from "react-icons/di";
import { TbUserSearch } from "react-icons/tb";
import { ImSpinner2 } from 'react-icons/im';
import certifAiLogo from "../assets/CAI_Logo_Black.png";

import "./Signup.css";
import { TiTick } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: 'product_manager', name: 'Product Manager', icon: <FiCodesandbox color="ivory" /> },
    { id: 'ai_developer', name: 'AI Developer', icon: <DiCode color="ivory"/> },
    { id: 'ai_assessor', name: 'AI Assessor', icon: <TbUserSearch color="ivory"/> },
  ];

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role }); // Update role in formData
    setSelectedRole(role); // Highlight selected role
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    // Validate fields
    const { name, email, password, role } = formData;
    if (!name || !email || !password || !role) {
      setErrorMessage("All fields are required, including selecting your role.");
      setIsLoading(false);
      return;
    }

    try {
      // Check if email already exists
      const emailCheckResponse = await fetch('http://localhost:9000/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!emailCheckResponse.ok) {
        const errorData = await emailCheckResponse.json();
        throw new Error(errorData.error || 'Failed to check email. Please try again.');
      }

      // Generate a unique ID for the user
      const userId = uuidv4();


      // Create the user object
      const user = {
        id: userId,
        username: name,
        email,
        password: password,
        role
      };

      // Send POST request using fetch
      const response = await fetch('http://localhost:9000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to sign up. Please try again.');
      }

      // Handle successful response
      const data = await response.json();
      console.log('User created:', data);

      setIsSuccess(true);
      setIsLoading(false);

      // Redirect to the home page
      navigate('/home');
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left"></div>
        <div className="signup-right">

          <div className="signup-header">      
            Sign up to get started with 
          </div>
          <img src={certifAiLogo} alt="CERTIF.AI" className="certif-ai-logo"/>
          <div> Compliance Cockpit</div>

          <div className="signup-form">
          <form>
          <div className="input-group">   
            <input
              type="name"
              placeholder="Name"
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="role-selector">
            <p>
              Select your role
            </p >
            <div className="role-options">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`role-card-container`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <div className={`role-card ${selectedRole === role.id ? 'selected' : ''}`}>
                  <div className="icon-container">
                    {role.icon}
                    {selectedRole === role.id && <span className="tick"><TiTick/> </span>}
                  </div>
                </div>
                <p>{role.name}</p> 
              </div>
            ))}
            </div>
          </div>
          <button type="button" onClick={handleSubmit} className="signup-button" disabled={isLoading || isSuccess}>
            {isLoading ? (
                <ImSpinner2 className="spinner-icon" />
              ) : isSuccess ? (
                <FaCheckCircle className="check-icon" />
              ) : (
                'Sign Up!'
              )}
            </button>
            
            <div className="signup-link">
              Aleady have an account? <span onClick={() => navigate('/')} style={{ color: 'blue', cursor: 'pointer' }}>Sign In.</span>
            </div>
            <div className="signin-error-message">
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          </form>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Signup;