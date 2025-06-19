// src/Sidebar.js
import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { UserContext, } from "../Contexts/UserContext";
import { FiCodesandbox } from "react-icons/fi";
import { DiCode } from "react-icons/di";
import { TbUserSearch } from "react-icons/tb";
import "./Sidebar.css";

const Sidebar = () => {
  const {user} = useContext(UserContext);
  const {setUserMail} = useContext(UserContext);
  const [showDropdown, setShowDropdown] = React.useState(false);

  if (!user) {
    return <div className="sidebar"><p>Loading user...</p></div>;
  }

  const roleAvatars = { 
    'Product Manager': <FiCodesandbox className="avatar-icon" size={100} color="#6c43b4" opacity={0.6} /> ,
    'AI Developer': <DiCode className="avatar-icon" size={100} color="#6c43b4" opacity={0.6}/> ,
    'AI Assessor': <TbUserSearch className="avatar-icon" size={100} color="#6c43b4" opacity={0.6}/> 
    };

  const users = [
    { id: 1, username: "admin", role: "Product Manager", email: "admin@getcertif.ai"},
    { id: 2, username: "admin_dev", role: "AI Developer", email: "adminDev@getcertif.ai"},
    { id: 3, username: "admin_assessor", role: "AI Assessor", email: "adminAssessor@getcertif.ai"},
  ];

  const handleRoleChange = (mail) => {
    setUserMail(mail);
    setShowDropdown(false);
  }

  const avatar = roleAvatars[user.role];

  return (
    <div className="sidebar">
      {/* Role and Avatar */}
      <div className="role-section">
        <p>{user.username}</p>
        <div className="avatar-container" onClick={() => setShowDropdown(!showDropdown)}>
          {/* Avatar Icon */}
          {avatar}
          {/* Role Badge */}
          <span className="role-badge">{user.role}</span>
        </div>
        {/* Dropdown User Switcher */}
        {showDropdown && (
          <div className="user-dropdown">
            {users.map((u) => (
              <div key={u.id} className="user-option" onClick={() => handleRoleChange(u.email)}>
                {u.username} ({u.role})
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Buttons Section */}
      <div className="menu">
        <Link to="/home">
          <button>Product Overview</button>
        </Link>
        <Link to="/assessment-library">
          <button>Assessment Library</button>
        </Link>
        <Link to="/active-assessments">
          <button>Active Assessments</button>
        </Link>
      </div>

      {/* Bottom Button */}
      <div className="bottom-button">
        <button>Compliance Cockpit Docs</button>
      </div>
    </div>
  );
};

export default Sidebar;