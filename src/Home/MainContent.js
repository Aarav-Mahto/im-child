import React, { useEffect, useState } from 'react';
import PieChart from '../Components/PieChart';
import AssessmentStatusChart from '../Components/BarChart'; 
import Header from "../Components/Header";
import Inventory from './ProductInventory'; // Adjust the path if necessary
import './MainContent.css';
import certifAiLogo from '../assets/CAI_Logo_Black.png';


const MainContent = () => {

  const [inventoryData, setInventoryData] = useState([]);
  const [assessmentsData, setAssessments] = useState([]);

  // Fetch the inventory data and assessments from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const inventoryResponse = await fetch('http://localhost:9000/products');
        const inventoryData = await inventoryResponse.json();

        const assessmentsResponse = await fetch('http://localhost:9000/assessments');
        const assessmentsData = await assessmentsResponse.json();

        setInventoryData(inventoryData);
        setAssessments(assessmentsData);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Helper functions to calculate values for pie charts
  const calculateDevelopmentPhases = () => {
    const inDevelopment = inventoryData.filter(item => item.productPhase === 'In Development').length;
    const testing = inventoryData.filter(item => item.productPhase === 'Testing').length;
    const deployed = inventoryData.filter(item => item.productPhase === 'Deployed').length;
    return [inDevelopment, testing, deployed];
  };

  const calculateRiskAssessment = () => {
    const highRisk = inventoryData.filter(item => item.risk === 'High Risk').length;
    const limitedRisk = inventoryData.filter(item => item.risk === 'Limited Risk').length;
    const noRisk = inventoryData.filter(item => item.risk === 'Low Risk').length;
    const prohibited = inventoryData.filter(item => item.risk === 'Prohibited').length;
    return [highRisk, limitedRisk, noRisk, prohibited];
  };
  
  // Prepare data for the bar chart
  const prepareBarChartData = () => {
    const assessmentTypes = {
      "EU AI Act (Regulation EU) 2024/1689": "EU AI Act",
      "ISO/IEC TR 24029-1 - AI Assessment of the Robustness of Neural Networks": "ISO/IEC TR 24029-1" ,
      "ISO/IEC TR 24027 - Bias in AI systems and AI aided decision making": "ISO/IEC TR 24027",
      "CAI Trustworthy AI Risk Assessment": "CAI Trustworthy AI Risk",
      "CAI LLM Quality Assessment": "CAI LLM Quality"
    };
      // Create a mapping of assessment names to their progress
  const completedData = [];
  const inProgressData = [];
  const filteredNames = []; // To store only relevant names
  
  const names = Object.keys(assessmentTypes).map(type => assessmentTypes[type]);

  names.forEach(category => {
    const originalName = Object.keys(assessmentTypes).find(key => assessmentTypes[key] === category);

    // Calculate progress data based on the original names
    const completedCount = assessmentsData.filter(
      assessment => assessment.name === originalName && assessment.progress === 100
    ).length;

    const inProgressCount = assessmentsData.filter(
      assessment => assessment.name === originalName && assessment.progress < 100
    ).length;

    // Only include assessments that have either completed or in-progress data
    if (completedCount > 0 || inProgressCount > 0) {
      filteredNames.push(category); // Add to the filtered names list
      completedData.push(completedCount);
      inProgressData.push(inProgressCount);
    }
  });

  return { names: filteredNames, completedData, inProgressData };
  };


  const {names, completedData, inProgressData} = prepareBarChartData();
    
  return (
    <div className="main-content">
        <Header 
          title={
            <span>
              <img src={certifAiLogo} alt="CERTIF.AI" className="certif-ai-logo"/> 
              Compliance Cockpit
            </span>
          } 
          description="Overview"
        />
        <div className="chart-row">
          <div className="pie-chart-container">
            <div> {/* Wrapper for controlling individual chart size */}
              <PieChart
                data={calculateDevelopmentPhases()}
                labels={['In Development', 'Testing', 'Deployed']}
                colors={['#D1C4E9', '#645394', '#B0BEC5']}
                title="Development Phases"
              />
            </div>
          </div>
          <div className="pie-chart-container">
            <div> {/* Wrapper for controlling individual chart size */}
              <PieChart
                data={calculateRiskAssessment()}
                labels={['High Risk', 'Limited Risk', 'Low Risk', 'Prohibited']}
                colors={['#D1C4E9', '#645394', '#B0BEC5', '#1E1E1E']}
                title="Risk Classifications"
              />
            </div>
          </div>
          <div className="bar-chart-container">
            <div> 
              <AssessmentStatusChart
              names={names}
              completedData={completedData}
              inprogressData={inProgressData}
              title= "Assessment Status"
              />
            </div>
          </div>
        </div>
        <Inventory />
    </div>
  );
};

export default MainContent;