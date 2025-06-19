import React, { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";

const ParameterSelection = ({parameters, data}) => {
    const [activeTab, setActiveTab] = useState('Static Parameters');
    const [selectedParams, setSelectedParams] = useState([]);

    const handleSelectionChange = (selectedItems) => {
    setSelectedParams(selectedItems);
    };

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    // Render JSON based on selected parameters (placeholder logic)
    const renderJsonData = () => {
        const filteredData = { ...data };
        if (selectedParams) {
            filteredData.domain_parameters.scenery[0].param_type = selectedParams;
        }
        return JSON.stringify(filteredData, null, 2);
    };

    return (
        <div className="content">
            <div className="parameter-selection">
                <div className="tabs">
                {Object.keys(parameters).map((tab) => (
                    <button
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabSwitch(tab)}
                    >
                    {tab}
                    </button>
                ))}
                </div>
                <CheckboxGroup items={parameters[activeTab]} onSelectionChange={handleSelectionChange}/>
            </div>
            <div className="preview">
                <h3>Preview</h3>
                <pre>{renderJsonData()}</pre>
            </div>
        </div>
    );
}

export default ParameterSelection;