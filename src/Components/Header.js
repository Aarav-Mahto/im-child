// src/Header.js
import React, { useState } from "react";
import './Header.css';
import { LiaCogSolid, LiaUser } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi"; 
import { useNavigate, Link } from 'react-router-dom';
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import { useNotifications } from '../Notifications/NotificationContext';

const Header = ({ title, description }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const { notifications, markAsRead } = useNotifications();

  const navigate = useNavigate();


  const handleButtonClick = (buttonName) => {
    if (selectedButton === buttonName) {
      // If the button is already selected, unselect it and close the dropdown
      setSelectedButton(null);
      setIsDropdownOpen(false);
    } else {
      // Otherwise, select the button and open the dropdown
      setSelectedButton(buttonName);
      setIsDropdownOpen(true);
    }
    };
  const handleAccountDetailsClick = () => {
    navigate('/account-details'); // Navigate to the account details page
    };
  
  const handleNotificationClick = (notification) => {
      markAsRead(notification.id);
      navigate(notification.link);
    };
  
  const unreadCount = notifications.filter((notification) => !notification.read).length;
    const handleSettingsClick = () => {
      navigate('/settings'); // Navigate to the settings page
      };

  return (
    <header className="main-header">
      <div className="header-center">
        <h1>
          <span>
            <img src={certifAiLogo} alt="CERTIF.AI" className="certif-ai-logo" />
            Compliance Cockpit
          </span>
        </h1>
        <p>{description}</p>
      </div>
      <div className="header-right">
        <button
          className={`header-button notification-button ${selectedButton === 'notification' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('notification')}
        >
          <IoMdNotificationsOutline />
          {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
        </button>
        {isDropdownOpen && selectedButton === 'notification' && (
          <div className="dropdown-menu">
          <h3 className="dropdown-title">Notifications</h3>
          <ul>
            <li className="dropdown-notification-item">
            {notifications.slice(0, 3).map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => handleNotificationClick(notification)}
              >
                {notification.message}
              </div>
            
            ))}
            </li>
          </ul>
            <Link to="/notifications" className="view-all-link">
              View All
            </Link>
          </div>
        )}
        <button
          className={`header-button settings-button ${selectedButton === 'settings' ? 'selected' : ''}`}
          onClick={() => handleSettingsClick()}
        >
          <LiaCogSolid />
        </button>
        <button
          className={`header-button account-button ${selectedButton === 'account' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('account')}
        >
          <LiaUser />
        </button>
        {isDropdownOpen && selectedButton === 'account' && (
          <div className="dropdown-menu">
            <h3 className="dropdown-title">Your Account</h3>
            <ul>
              <li className="dropdown-item" onClick={handleAccountDetailsClick}>
                <FiUser className="dropdown-icon" /> Account Details
              </li>
              <li className="dropdown-item">
                <FiSettings className="dropdown-icon" /> Profile
              </li>
              <li className="dropdown-item">
                <FiLogOut className="dropdown-icon" /> Log Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
