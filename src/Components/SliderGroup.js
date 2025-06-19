// MetricsList.js
import React, { useState } from 'react';
import './SliderGroup.css';
import { RiPulseFill } from "react-icons/ri";


const SliderGroup = ({items}) => {
console.log("Items:", items);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState({});

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggle = (id) => {
    setSelectedItems((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="slider-container">
      <div className="slider-header">
        <input
            type="text"
            placeholder="Search Metric..."
            value={searchTerm}
            onChange={handleSearch}
            className="slider-search-input"
        />
      </div>

      <div className="slider-list">
        {filteredItems.map((item) => (
          <div key={item.id} className="slider-item">
            <div className='item-header'>
                {/* <span className="item-icon">⚡️</span> */}
                <RiPulseFill className="item-icon" />
                <span className="item-name">{item.name}</span>
            </div>
            <div className='tags-container'>
                <div className="item-tags">
                {item.tags.map((tag, index) => (
                    <span key={index} className={`item-tag ${tag.toLowerCase()}`}>
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            <div className='switch-container'>
            <label className="switch">
              <input
                type="checkbox"
                checked={selectedItems[item.id] || false}
                onChange={() => handleToggle(item.id)}
              />
              <span className="slider round"></span>
            </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderGroup;