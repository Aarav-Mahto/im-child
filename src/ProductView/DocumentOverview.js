import React, { useState, useEffect } from "react";
import "./DocumentOverview.css"; // Add relevant styling

const DocumentOverview = ({productId, productName}) => {
//   const productId = "34e12c5a-45fa-4c67-9d72-4a6712eb13d5"
//   const productName = "Product Name";
  const [folders, setFolders] = useState([]);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [expandedFile, setExpandedFile] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9000/all_files?productId=${productId}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched Data:", data);
            setFolders(data); // Keep dictionary structure
      
            // ✅ Expand all folders (including subfolders) by tracking the full path
            const expandAll = (folder, parentPath = "") => {
              let expanded = {};
              Object.entries(folder).forEach(([key, value]) => {
                const fullPath = parentPath ? `${parentPath}/${key}` : key; // Track full path
                expanded[fullPath] = true;
      
                if (typeof value === "object" && !Array.isArray(value)) {
                  expanded = { ...expanded, ...expandAll(value, fullPath) }; // Recurse into subfolders
                }
              });
              return expanded;
            };
      
            setExpandedFolders(expandAll(data));
          })
          .catch((error) => console.error("Error fetching files:", error));
      }, []);
  

  const handleFileClick = (fileName, dir) => {
    const fileUrl = `http://localhost:9000/files/${productId}/${dir}/${fileName}`;
    window.open(fileUrl, '_blank'); // Opens the file in a new tab
  };

// Utility function to capitalize and format folder names
const capitalizeAndFormat = (name) => {
    return name
        .split('_') // Split the string at underscores
        .map((word) => {
            if (word.length <= 3) {
                return word.toUpperCase(); // Capitalize all letters if the word length is 2
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize each word
        })
        .join(' '); // Join the words with spaces
}
  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };


  const toggleFile = (fileName) => {
    setExpandedFile((prev) => (prev === fileName ? null : fileName));
  };


const renderFolders = (folderData, parentPath = "") => {
    return Object.entries(folderData).map(([folderName, content]) => {
        const folderPath = parentPath ? `${parentPath}/${folderName}` : folderName;
        const isExpanded = expandedFolders[folderPath];

        // Check if there are any files or subfolders
        const hasFiles = Array.isArray(content.files) && content.files.length > 0;
        const hasSubfolders = typeof content === "object" && !Array.isArray(content) && Object.keys(content).length > 0;

        if (!hasFiles && !hasSubfolders) return null;
    
  
        return (
            // Only render folder-content if there are files or subfolders
            <div key={folderPath} className={`folder-section ${isExpanded ? "expanded" : ""}`}>
            {/* Folder Header */}
            <div
                className="folder-header"
                onClick={() => toggleFolder(folderPath)}
            >
                <h3>{capitalizeAndFormat(folderName)}</h3>
                {typeof content === "object" && !Array.isArray(content) && (
                <span>{isExpanded ? "▲" : "▼"}</span>
                )}
            </div>
    
            {/* Folder Content (Always Show Files) */}
            {isExpanded && (
                <div key={folderName} className="folder-content">
                    {/* Render Files (Always Visible) */}
                    {Array.isArray(content.files) && content.files.length > 0 && 
                        content.files.filter(file => !file.fileName.startsWith('.')) // Exclude hidden files
                        .map((file) => (
                        <div
                        key={file.fileName}
                        className={`file-card ${expandedFile === file.fileName ? 'file-card-expanded' : ''}`}
                        onClick={() => toggleFile(file.fileName)}
                        >
                        <div className={`file-div ${expandedFile === file.fileName ? 'expanded-background' : ''}`}>
                            <div className="file-icon">
                                <i className="far fa-file-alt"></i>
                            </div>
                            <div className="file-name">{file.fileName}</div>
                        </div>
                        {expandedFile === file.fileName && (
                            <div className="file-meta">
                            <p><strong>Version:</strong> 1.0.0</p>
                            <p><strong>Created:</strong> {file.created}</p>
                            <p><strong>User:</strong> John Doe</p>
                            <p><strong>Size:</strong> {file.size}</p>
                            <button
                                className="open-file-button"
                                onClick={() => handleFileClick(file.fileName, folderPath)}
                            >
                                Open
                            </button>
                            </div>
                        )}
                        </div>
                        ))}  
                   {/* Render Subfolders Only If They Exist */}
                   {hasSubfolders && renderFolders(content, folderPath)}
                </div>
            )}
            </div>
        );
    });
  };

  return (
    <div className='file-overview-container'>
            <div className="file-management">
                {renderFolders(folders)}
            </div>
    </div>
  );
};
export default DocumentOverview;