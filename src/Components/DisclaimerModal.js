import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./DisclaimerModal.css";

const DisclaimerModal = ({ onClose, onCloseText, onBack, onBackText, title, body }) => {
  const closeText = onCloseText || "I understand";
  const backText = onBackText || "Go Back";

  return (
    <div className="disclaimer-modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <FontAwesomeIcon icon={faCircleExclamation} className="modal-icon" />
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          {body}
        </div>
        {onBack && onClose && (
        <div className="modal-footer">
            
                <button className="go-back-button" onClick={onBack}>
                    {backText}
                </button>
          <button className="understand-button" onClick={onClose}>
            {closeText}
          </button>
        </div>
        )}

        {!onBack && onClose && (
        <div className="modal-footer-single">
          <button className="understand-button" onClick={onClose}>
            {closeText}
          </button>
        </div>
        )}

      </div>
    </div>
  );
};

export default DisclaimerModal;