import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { FaUser, FaLock } from 'react-icons/fa';
import { UserContext } from "../Contexts/UserContext";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { setUserMail } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear any existing errors
    setIsLoading(true);

    

    try {
      // Send login request to the backend
      const response = await fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // Log response status and body for debugging
      console.log('Response status:', response.status);
      const responseBody = await response.text();
      console.log('Response body:', responseBody);

      // Handle backend response
      if (response.ok) {
        const data = JSON.parse(responseBody);
        console.log('Login successful:', data);

        setIsLoading(false);
        setIsSuccess(true);
        setUserMail(email);

        // Simulate a short success delay, then navigate to the home page
        setTimeout(() => {
          navigate('/home'); // Ensure this matches your actual home page route
        }, 1000);
      } else {
        const errorData = JSON.parse(responseBody);
        setErrorMessage(errorData.error || "Login failed. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left"></div>
        <div className="login-right">
            <div className="login-form">
            <h2>Welcome!</h2>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <FaUser className="login-icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <FaLock className="login-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            
              <button type="submit" className="login-button" disabled={isLoading || isSuccess}>
                {isLoading ? (
                    <ImSpinner2 className="spinner-icon" />
                  ) : isSuccess ? (
                    <FaCheckCircle className="check-icon" />
                  ) : (
                    'Login'
                  )}
              </button>

              <div className="signup-link">
                Do not have an account? <a href="/signup">Sign up.</a>
              </div>
              <div className="login-error-message">
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;