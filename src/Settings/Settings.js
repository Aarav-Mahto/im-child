import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import the icons
import './Settings.css';
import Breadcrumb from '../Navigation/Breadcrumb';

const Settings = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/home' },
    { name: 'Settings', path: '/settings' }
  ];

  const [language, setLanguage] = useState('English (United States)');
  const [appearance, setAppearance] = useState('Classic (light)');
  const [muteNotifications, setMuteNotifications] = useState(false);
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [repeatNewPasswordVisible, setRepeatNewPasswordVisible] = useState(false);

  const togglePasswordSection = () => {
    setIsPasswordSectionOpen(!isPasswordSectionOpen);
  };

  const handlePasswordChange = () => {
    if (newPassword !== repeatNewPassword) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setRepeatNewPassword('');
  };

  const toggleVisibility = (setVisibility) => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

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
          description="Settings"
        />
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <div className="settings">
        <div class="settings-container">

          {/* Language Section */}
          <div className="settings-section">
            <label className="settings-label">Language</label>
            <div className="settings-content">
            <select
              className="settings-dropdown"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>German</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
          </div>

          {/* Appearance Section */}
          <div className="settings-section">
            <label className="settings-label">Appearance</label>
            <div className="settings-content">
            <select
              className="settings-dropdown"
              value={appearance}
              onChange={(e) => setAppearance(e.target.value)}
            >
              <option>Classic (light)</option>
              <option>Dark mode</option>
            </select>
          </div>
          </div>

          {/* Account Section */}
          <div className="settings-section">
        <label className="settings-label">Account</label>
        <div className="settings-content">
          <div className="settings-collapsible-container">
            <div className="settings-collapsible-section">
              <div
                className="settings-collapsible-header"
                onClick={togglePasswordSection}
              >
                <span>Change Password</span>
                <span className={`settings-arrow ${isPasswordSectionOpen ? 'open' : ''}`}></span>
              </div>
              {isPasswordSectionOpen && (
                <div className="settings-collapsible-content open">
                  <div className="settings-input-group">
                    <div className="settings-password-container">
                      <input
                        type={currentPasswordVisible ? 'text' : 'password'}
                        placeholder="Current password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="settings-input"
                      />
                      <button
                        type="button"
                        className="settings-toggle-visibility-button"
                        onClick={() => toggleVisibility(setCurrentPasswordVisible)}
                      >
                        {currentPasswordVisible ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    <div className="settings-password-container">
                      <input
                        type={newPasswordVisible ? 'text' : 'password'}
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="settings-input"
                      />
                      <button
                        type="button"
                        className="settings-toggle-visibility-button"
                        onClick={() => toggleVisibility(setNewPasswordVisible)}
                      >
                        {newPasswordVisible ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                    <div className="settings-password-container">
                      <input
                        type={repeatNewPasswordVisible ? 'text' : 'password'}
                        placeholder="Repeat new password"
                        value={repeatNewPassword}
                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                        className="settings-input"
                      />
                      <button
                        type="button"
                        className="settings-toggle-visibility-button"
                        onClick={() => toggleVisibility(setRepeatNewPasswordVisible)}
                      >
                        {repeatNewPasswordVisible ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                  <div className="settings-button-container">
                    <button
                      className="settings-cancel-button"
                      onClick={() => {
                        setCurrentPassword('');
                        setNewPassword('');
                        setRepeatNewPassword('');
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="settings-save-button"
                      onClick={handlePasswordChange}
                    >
                      Set new password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
          
          {/* Notifications Section */}
          <div className="settings-section">
            <label className="settings-label">Notifications</label>
            <div className="settings-content">
            <div className="settings-checkbox">
                <p>
              <input
                type="checkbox"
                checked={muteNotifications}
                onChange={(e) => setMuteNotifications(e.target.checked)}
              />
              <span>Mute all notifications</span>
              </p>
            </div>
            <div className="settings-checkbox">
            <p>
              <input
                type="checkbox"
                checked={receiveEmails}
                onChange={(e) => setReceiveEmails(e.target.checked)}
              />
              <span>Receive missed activity emails</span>
            </p>
            </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="settings-section">
            <label className="settings-label">Privacy</label>
            <div className="settings-content">
            <p><a href="/privacy-policy" className="settings-link">Privacy Policy</a></p>
            <p><a href="/security-policy" className="settings-link">Security Policy</a></p>
          </div>
          </div>

          {/* Software Version Section */}
          <div className="settings-section">
            <label className="settings-label">Software</label>
            <div className="settings-content">
            <p>Current Software Version: 0.0.1</p>
            <button className="updates-button">Check for updates</button>
            </div>
          </div>

          {/* Report a Problem Section */}
          <div className="settings-section">
            <label className="settings-label">Report a problem</label>
            <div className="settings-content">
            <p>
              To report a problem please fill out <a href="/report-form" className="settings-link">this form</a>.
            </p>
            </div>
          </div>
        </div>
        </div>
      </div>  
    </div>
  );
};

export default Settings;
