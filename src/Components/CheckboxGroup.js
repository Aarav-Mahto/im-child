import React from "react";
import { useState } from "react";
import "./CheckboxGroup.css";


const CheckboxGroup = ({ items, onSelectionChange }) => {
    // Maintain local state for selected items
    const [selectedItems, setSelectedItems] = useState([]);
  
    const handleCheckboxChange = (item) => {
      let updatedSelectedItems;
  
      // Check if the item is already selected
      if (selectedItems.includes(item)) {
        // Remove it from the list if it’s already selected
        updatedSelectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
      } else {
        // Add it to the list if it’s not selected
        updatedSelectedItems = [...selectedItems, item];
      }
  
      setSelectedItems(updatedSelectedItems);
      // Call the callback to inform the parent of the selection change
      onSelectionChange(updatedSelectedItems);
    };
  
    return (
      <div className="checkbox-group">
        {items.map((item) => (
          <div key={item} className="checkbox-item">
            <span>{item}</span>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default CheckboxGroup;

    