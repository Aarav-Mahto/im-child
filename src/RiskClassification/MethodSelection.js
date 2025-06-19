import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Breadcrumb from "../Navigation/Breadcrumb";
import { MdContentPasteSearch } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { GrDocumentTransfer } from "react-icons/gr";
import { useNotifications } from '../Notifications/NotificationContext';


import "./MethodSelection.css";

const MethodSelection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const location = useLocation();
  const { productId, productName } = location.state || {}; // Get the product ID if passed
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleStart = () => {
    // Add logic to start the classification
    if (selectedCard === 0) {
      console.log("Start manual risk classification for product: " + productId);
      navigate(`/product/${productId}/manual-risk-classification`, { state: { productId: productId, productName: productName } });
    }
    if (selectedCard === 1) {
      console.log("Start chatbot for product: " + productId);
      navigate(`/product/${productId}/chatbot`, { state: { productId: productId, productName: productName } });
    }
    if (selectedCard === 2) {
      console.log("Start external risk classification for product: " + productId);
      navigate(`/product/${productId}/external-risk-classification`, { state: { productId: productId, productName: productName } });
    }
    addNotification({
      id: new Date().getTime(),
      message: `Risk classification started for product: ${productName}`,
      read: false,
      link: `/product/${productId}`,
    });
  };

  const breadcrumbItems = [
    { name: "Home", path: "/home", state:{} },
    { name: productName, path: `/product/${productId}`, state:{}},
    { name: "Risk Classification", path: ``},
  ];

  const cardData = [
    {
      title: "Manual Classification",
      description: "Conduct a guided manual classification of your use case",
      icon: <MdContentPasteSearch size={50} color={"#5d3e96"}/>, // Replace with your icon
    },
    {
      title: "AI Assisted Classification",
      description: "Our Chatbot helps with classifying your use case under the EU AI Act",
      icon: <RiRobot2Fill size={50} color={"#5d3e96"}/>, // Replace with your icon
    },
    {
      title: "External Classification",
      description: "Set the Risk Level according to your external classification and upload proof",
      icon: <GrDocumentTransfer size={50} color={"#5d3e96"}/>, // Replace with your icon
    },
  ];

  return (
    <div className='layout'>
        <Sidebar />
        <div className='main-content'>
            <Header title="CERTIF.AI Compliance Cockpit" description="Risk Classification"/>
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <div className="risk-classification-container">
        <h1>Select your Risk Classification Method</h1>
        <div className="card-container">
            {cardData.map((card, index) => (
            <div
                key={index}
                className={`method-card ${selectedCard === index ? "active" : ""}`}
                onClick={() => handleCardClick(index)}
            >
                <h2>{card.title}</h2>
                {card.icon}
                <p>{card.description}</p>
            </div>
            ))}
        </div>
        <button
            className="start-classification-button"
            disabled={selectedCard === null}
            onClick={handleStart}
        >
            Start Classification
        </button>
        </div>
        </div>
    </div>
  );
};

export default MethodSelection;