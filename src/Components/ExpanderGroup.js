import React, { useState } from "react";
import "../Components/ExpanderGroup.css";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineUploadFile, MdOutlineRefresh } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import Tooltip from "./Tooltip";
import DataTable from "./DataTable";
import ODDContainer from "./ODDContainer";
import SliderGroup from "./SliderGroup";
import ParameterSelection from "./ParameterSelection";
import TestingRequirements from "./TestingRequirements";
import PerformanceCriteria from "./PerformanceCriteria";
import TestView from "./TestView";
import ReactMarkdown from "react-markdown";


const Expander = ({ title, description, implementationGuidance, components, value, tag, optional, SDK, expanded, onNext, onToggle, onInputChange, onFileUpload }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setUploadedFiles((prevFiles) => [...prevFiles, file]);
        onFileUpload([...uploadedFiles, file]); // Pass to ExpanderGroup
        console.log("Uploaded Files:", uploadedFiles);
      }
    };

  return (
    <div className={`expander-container ${expanded ? "expanded" : "collapsed"}`}>
      {/* Header Section */}
      <div className="expander-header" onClick={onToggle}>
        <h3>{title}</h3>
        {SDK && <span className="tag-sdk">Updated from CAI SDK</span>}
        {tag && <span className="tag">{tag}</span>}        
        {optional && <span className="optional-tag">Optional</span>}
        <button className="toggle-button">
          {expanded ? "▲" : "▼"}
        </button>
      </div>

      {/* Content Section */}
      {expanded && (
        <div className="expander-content">
          <div className="description-container">
            {implementationGuidance && (<Tooltip text={implementationGuidance}/>)}
            <div style={{display: "flex", flexDirection: "column"}}>
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>

          
         {/* Render Components Dynamically */}
         {components.map((component, index) => (
            <div key={index} className="expander-component">
              {component.label && <h4>{component.label}</h4>}
              {component.type === "TextArea" && (
                <textarea
                  className="input-area"
                  placeholder={component.content}
                  value={value}
                  rows={4}
                  onChange={(e) => onInputChange(e.target.value)}
                />
              )}
              {component.type === "ParameterSelection" && (
                <ParameterSelection parameters={component.content.parameters} data={component.content.data} />
              )}
              {component.type === "DataTable" && component.content && (
                <DataTable tableData={component.content} />
              )}
              {component.type === "ODD" && component.content && (
                <ODDContainer ODD={component.content} highlightKeys={component.highlightKeys} />
              )}
              {component.type === "SliderGroup" && component.content && (
                <SliderGroup title={component.label} items={component.content} />
              )}
              {component.type === "TestingRequirements" && component.content && (
                <TestingRequirements metrics={component.content.metrics} robustnessRequirements={component.content.robustnessRequirements} />
              )}
              {component.type === "PerformanceCriteria" && component.content && (
                <PerformanceCriteria dummyCriteria={component.content} />
              )}
              {component.type === "TestView" && component.content && (
                <TestView items={component.content} />
              )}
            </div>
          ))}

          {uploadedFiles && (
                uploadedFiles.map((file, index) => (
                  <p key={index} className="uploaded-file-name">
                    <FaRegFileAlt /> {file.name}
                  </p>
                ))
            )}

          <div className="button-container">
            <div className="upload-sdk-container"> 
              <div className="upload-button">
                <input
                  type="file"
                  id={`file-upload-${title}`}
                  onChange={handleFileUpload}
                  style={{ display: "none" }} // Hide the input
                />
                <label htmlFor={`file-upload-${title}`}>
                  <MdOutlineUploadFile size={18}/> Upload file
                </label>
              </div>
              {SDK && (
                <button className="sdk-button">
                  <MdOutlineRefresh size={18}/>
                  <label>Update from SDK</label>
                </button>
              )}
            </div>

            <button
              className="next-button"
              onClick={onNext}
            >
              <label><IoMdDoneAll size={18}/>Next</label>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ExpanderGroup = ({expanderItems, onFilesUpload}) => {
  const [openExpanders, setOpenExpanders] = useState([0]); // Tracks open expanders
  const [inputs, setInputs] = useState({}); // Stores input text for each expander
  const [uploadedFiles, setUploadedFiles] = useState({}); // Store uploaded files per expander
  console.log("ExpanderItems:", expanderItems)
  console.log("Uploaded Files:", uploadedFiles)

  const handleInputChange = (id, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value, // Update the input value for the specific expander
    }));
  };

  // Function to handle file uploads for each expander
  const handleFileUpload = (id, files) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles, [id]: files };
      onFilesUpload(updatedFiles); // Pass updated file list to parent (BiasDocumentation)
      return updatedFiles;
    });
  };

  const handleNext = (currentId) => {
    setOpenExpanders((prevExpanders) => {
      const nextId = currentId + 1;

      if (nextId <= expanderItems.length) {
        return prevExpanders
          .filter((id) => id !== currentId) // Close the current expander
          .concat(nextId); // Open the next expander
      }

      return prevExpanders.filter((id) => id !== currentId); // Close the current expander only
    });
  };

  const handleToggle = (id) => {
    setOpenExpanders((prevExpanders) =>
      prevExpanders.includes(id)
        ? prevExpanders.filter((expanderId) => expanderId !== id) // Close the expander
        : [...prevExpanders, id] // Open the expander
    );
  };

  return (
    <div className="expander-group">
      {expanderItems.map((expander, index) => (
        <Expander
          key={index}
          title={expander.title}
          description={expander.description}
          implementationGuidance={expander.implementationGuidance}
          value={inputs[expander.id] || ""} // Pass the stored input value for the expander
          components={expander.components}
          tag={expander.tag}
          optional={expander.optional}
          SDK={expander.SDK}
          expanded={openExpanders.includes(expander.id)}
          onNext={() => handleNext(expander.id)}
          onToggle={() => handleToggle(expander.id)}
          onInputChange={(value) => handleInputChange(expander.id, value)}
          onFileUpload={(files) => handleFileUpload(expander.id, files)}
        />
      ))}
    </div>
  );
};

export default ExpanderGroup;