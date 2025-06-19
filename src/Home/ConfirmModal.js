import React from 'react';
import './ConfirmModal.css';  // Create and import a CSS file for styling the modal

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;  // Don't render anything if `show` is false
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete this product?</p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Yes, Delete
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;