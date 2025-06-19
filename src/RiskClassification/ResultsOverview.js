import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Breadcrumb from "../Navigation/Breadcrumb";
import { TbReload } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { handleFileUpload } from "../Components/FileUpload";
import jsPDF from "jspdf";
import "jspdf-autotable";


import "./ResultsOverview.css";

const ResultsOverview = () => {
  const [tableData, setTableData] = useState([]);
  const headers = ["Category", "Classification", "Reference", "Reasoning"];
  const location = useLocation();
  const { productId, productName, sessionId } = location.state || {}; // Get the product ID if passed
  const navigate = useNavigate();

  const breadcrumbItems = [
    { name: "Home", path: "/home", state:{} },
    { name: productName, path: `/product/${productId}`, state:{}},
    { name: "Risk Classification", path: ``},
  ];

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('http://127.0.0.1:5000/get_classification?session_id=' + sessionId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTableData(data.response);
      console.log(data);
    }
    fetchResults();
  }, []);

  const handleDownload = async () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add a title or header
    doc.setFontSize(16);
    doc.text("Usecase Classification Complete", 14, 15);

    // Generate the table
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 20, // Start below the title
      theme: "grid", // Optional: "grid", "plain", "striped"
      styles: {
        halign: "center", // Center-align the text
      },
      headStyles: {
        fillColor: "#645394", // Dark purple header
        textColor: "#fff",
      },
    });

    // Generate PDF Blob
    const pdfBlob = doc.output("blob");

    // Create a file from the Blob
    const pdfFile = new File([pdfBlob], `Risk_Classification_Chatbot.pdf`, {
        type: "application/pdf",
    });

    // Upload the file
    await handleFileUpload(productId, pdfFile, "risk_classification");
  };


  const terminateSession = async () => {
    const response = await fetch('http://127.0.0.1:5000/terminate_session?session_id=' + sessionId, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  const handleFinish = () => {
    var risk = "Limited Risk";
    handleDownload();
    terminateSession();
    
    if (tableData[2][1] === "Yes") {
      risk = "Prohibited";
    }
    else if (tableData[3][1] === "Yes"){
      risk = "High Risk";
    }
    navigate(`/product/${productId}`, { state: { risk: risk, riskClassificationMethod: "AI Assisted Classification" } });
  }

  const handleRetry = () => {
    terminateSession();
    navigate(`/product/${productId}/chatbot`, { state: { productId: productId, productName: productName } });
  }

  return (
    <div className='layout'>
            <Sidebar />
            <div className='main-content'>
                <Header title="CERTIF.AI Compliance Cockpit" description="Risk Classification Results"/>
                <Breadcrumb breadcrumbItems={breadcrumbItems} />
                <div className="results-overview-container">
                  <h1 className="results-title">Usecase Classification Complete</h1>
                  <h3 className="results-subtitle">Product: {productName}</h3>
                  <div className="results-table-container">
                  <table className="results-table">
                      <thead>
                        <tr>
                          {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                              <td key={colIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="results-actions">
                    <button className="retry-button" onClick={() => handleRetry()}>
                      <TbReload size={20} />
                      Retry
                    </button>
                    <button className="finish-button" onClick={() => handleFinish()}>
                      <FaRegCheckCircle size={20} />
                      Finish
                    </button>
                  </div>
                </div>
            </div>
        </div>
  );
};

export default ResultsOverview;