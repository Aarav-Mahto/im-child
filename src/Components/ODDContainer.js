import React from "react";
import HighlightedJSON from "./HighlightedJSON";

const ODDContainer = ({ ODD, highlightKeys }) => {
    return (
        <div className="odd-container">
                <h3>Operational Design Domain (ODD)</h3>
                <p>The Operational Design Domain (ODD) is a structured framework used to define the specific domain within which a model is designed to operate effectively and safely. It outlines the environmental, situational, and operational constraints that the model is expected to encounter and manage. By clearly specifying the boundaries of its functionality, the ODD serves as a critical mechanism for ensuring that the model performs reliably and within acceptable risk parameters under predefined conditions. This definition includes factors such as geographic locations, weather conditions, types of tasks, interaction scenarios, and other contextual elements essential to the system’s deployment and operation.</p>
                <p>The use of the ODD ensures that the evaluation of data labels and documentation is thorough, systematic, and aligned with the model’s intended operational context, directly addressing the risks of unwanted bias.</p>
                <div className="preview">
                    <h3>ODD Preview</h3>
                    <HighlightedJSON json={ODD} highlightKeys={highlightKeys}  />
                </div>
        </div>
    );
}

export default ODDContainer;