import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import { useNotifications } from './NotificationContext';
import './NotificationsPage.css';
import Breadcrumb from '../Navigation/Breadcrumb';

const NotificationsPage = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/home' },
    { name: 'Notifications', path: '/notifications' }
  ];
  const { notifications, markAllAsRead, handleNotificationClick, clearNotifications } = useNotifications();
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header
          title={
            <span>
              <img
                src={certifAiLogo}
                alt="CERTIF.AI"
                className="certif-ai-logo"
              />
              Compliance Cockpit
            </span>
          }
          description="Notifications"
        />
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              onClick={() => handleNotificationClick(notification, navigate)}
            >
              {notification.message}
            </div>
          ))}
          <button className="clear-notifications-button" onClick={clearNotifications}>
            Clear all
          </button>
          <button className="mark-all-read-button" onClick={markAllAsRead}>
              Set all to read
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;