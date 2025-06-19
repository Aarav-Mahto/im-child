import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ breadcrumbItems }) => {
  const navigate = useNavigate();

  function navigateTo(item) {
    if (item.state) {
      navigate(item.path, { state: item.state });
    } else {
      navigate(item.path);
    }
  }

  return (
    <nav className="breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            {index < breadcrumbItems.length - 1 ? navigateTo(item) : (console.log("Last item in breadcrumb"))};
          }}>
            {item.name}
          </a>
          {index < breadcrumbItems.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;