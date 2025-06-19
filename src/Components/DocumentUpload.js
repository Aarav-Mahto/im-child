import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './DocumentUpload.css';

const DocumentUploadSection = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [itemHistory, setItemHistory] = useState([
    {
      id: "001",
      name: "Risk Analysis Fruit Stand v1.pdf",
      uploadedBy: "user-handle",
      date: "06 Sept 2023",
    },
  ]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Add the new file to the item history (for demo purposes)
      setItemHistory((prevHistory) => [
        ...prevHistory,
        {
          id: (prevHistory.length + 1).toString().padStart(3, "0"),
          name: file.name,
          uploadedBy: "user-handle", // Replace with actual user data
          date: new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        },
      ]);
    }
  };

  return (
    <div className="document-section">
      {/* Upload Section */}
      <div className="upload-section">
        <div className="upload-button-section">
            <h3>Upload Document</h3>
            <label htmlFor="file-upload" className="custom-file-upload-container">
                <FontAwesomeIcon icon={faUpload} /> Upload File
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
            />
        </div>
        {/* Display Uploaded Document */}
        {uploadedFile && (
          <div className="uploaded-file">
            <h3>Uploaded Document</h3>
            <a
              href={URL.createObjectURL(uploadedFile)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none", fontSize: "1.2rem" }}
            >
              {uploadedFile.name}
            </a>
          </div>
        )}
      </div>

      {/* Item History Section */}
      <div>
        <h4>Item History</h4>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>ID</th>
              <th style={{ textAlign: "left" }}>Name</th>
              <th style={{ textAlign: "left" }}>Uploaded By</th>
              <th style={{ textAlign: "left" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {itemHistory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.uploadedBy}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentUploadSection;