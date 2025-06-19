// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import AccountDetails from './AccountDetails/AccountDetails';
import NotificationsPage from './Notifications/NotificationsPage'; 
import { NotificationProvider } from './Notifications/NotificationContext'; // Import the NotificationProvider
import Settings from './Settings/Settings';
import AddProduct from './ProductCreation/AddProduct';
import ProductDetails from './ProductView/ProductDetails'; 
import AssessmentLibrary from "./AssessmentLibrary/AssessmentLibrary";
import ExternalRiskClassification from "./RiskClassification/ExternalRiskClassification";
import StartAssessment from "./AssessmentWizard/StartAssessment";
import AssessmentOverview from './AssessmentView/AssessmentOverview'; // Import the new AssessmentOverview component
import '@fortawesome/fontawesome-free/css/all.min.css';
import ActiveAssessments from './ActiveAssessments/ActiveAssessments';
import MethodSelection from './RiskClassification/MethodSelection';
import Chatbot from './RiskClassification/Chatbot';
import ResultsOverview from './RiskClassification/ResultsOverview';
import ManualRiskClassification from './RiskClassification/ManualRiskClassification';
import EditProduct from './ProductView/EditProduct';
import Subtask from './SubtaskView/Subtask';
import TaskOverview from './TaskView/TaskOverview';

function App() {
  return (
  <NotificationProvider> {/* Wrap the app with NotificationProvider */}
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/notifications" element={<NotificationsPage />} />        
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />  {/* Dynamic route for product details */}
        <Route path="/edit-product/:id" element={<EditProduct />} />  {/* Dynamic route for product details */}
        <Route path="/assessment-library" element={<AssessmentLibrary />} />
        <Route path="/active-assessments" element={<ActiveAssessments />} />
        <Route path="/start-assessment" element={<StartAssessment />} />
        <Route path="/assessment/:assessmentId" element={<AssessmentOverview />} />
        <Route path="/assessment/:assessmentId/task/Art. 15(1)" element={<TaskOverview />} />
        <Route path="/assessment/:assessmentId/task/Art. 15(1)/subtask/:subtaskName" element={<Subtask />} />
        <Route path="/assessment/:assessmentId/task/Art. 10(2)(f+g)" element={<TaskOverview />} />
        <Route path="/assessment/:assessmentId/task/Art. 10(2)(f+g)/subtask/:subtaskName" element={<Subtask />} />
        <Route path="/product/:id/risk-method-selection" element={<MethodSelection />} />
        <Route path="/product/:id/chatbot" element={<Chatbot />} />
        <Route path="/product/:id/risk-classification-results" element={<ResultsOverview />} />
        <Route path="/product/:id/external-risk-classification" element={<ExternalRiskClassification />} />
        <Route path="/product/:id/manual-risk-classification" element={<ManualRiskClassification />} />
      </Routes>
    </Router>
  </NotificationProvider>
  );
}

export default App;