import React, { createContext, useState, useContext, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Load notifications from localStorage on mount
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem('notifications');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading notifications from localStorage", error);
      return [];
    }
  });

  // Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Add a new notification and persist it
  const addNotification = (notification) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = [notification, ...prevNotifications].slice(0, 20);
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications)); // Immediate save
      return updatedNotifications;
    });
  };

  // Mark a notification as read and persist it
  const markAsRead = (id) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications)); // Immediate save
      return updatedNotifications;
    });
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);  // Clear state
    localStorage.removeItem('notifications');  // Clear localStorage
  };

  // Handle notification click (e.g., navigate to a link)
  const handleNotificationClick = (notification, navigate) => {
    markAsRead(notification.id);
    if (notification.link) navigate(notification.link);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead, markAllAsRead, handleNotificationClick, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
