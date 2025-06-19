import React, { useState } from 'react';
import './TabSystem.css'; // Assuming CSS for styling

const TabSystem = ({tabs, tabContent, startTab}) => {
  const [activeTab, setActiveTab] = useState(startTab);
  console.log('TabSystem:', tabs, tabContent, startTab);

  return (
    <div className="tab-system">
      {/* Tab Buttons */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button-2 ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="active-tab-content">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default TabSystem;