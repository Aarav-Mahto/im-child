import React from 'react';

const HighlightedJSON = ({ json, highlightKeys }) => {
  // Recursive function to render JSON with highlights
  const renderJSON = (key, value) => {
    const isHighlighted = highlightKeys.includes(key); // Check if the key is in the highlightKeys list

    const highlightStyle = {
      backgroundColor: isHighlighted ? "#f3eaff" : "transparent",
      padding: isHighlighted ? "5px" : "0",
      borderRadius: isHighlighted ? "5px" : "0",
    };

    if (Array.isArray(value)) {
      return (
        <div style={highlightStyle}>
          <strong>{key}:</strong> [
          {value.map((item, index) => (
            <div key={index} style={{ paddingLeft: "20px" }}>
              {typeof item === "object"
                ? renderJSON("", item)
                : <span>{JSON.stringify(item)}</span>}
            </div>
          ))}
          ]
        </div>
      );
    }

    if (typeof value === "object") {
      return (
        <div style={highlightStyle}>
          {key && <strong>{key}:</strong>} {"{"}
          {Object.entries(value).map(([k, v], idx) => (
            <div key={idx} style={{ paddingLeft: "20px" }}>
              {renderJSON(k, v)}
            </div>
          ))}
          {"}"}
        </div>
      );
    }

    return (
      <div style={highlightStyle}>
        <strong>{key}:</strong> {JSON.stringify(value)}
      </div>
    );
  };

  return (
    <pre style={{ backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "10px" }}>
      {renderJSON("", json)}
    </pre>
  );
};

export default HighlightedJSON;