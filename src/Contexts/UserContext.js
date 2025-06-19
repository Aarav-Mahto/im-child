// src/Contexts/UserContext.js
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userMail, setUserMail] = useState(() => localStorage.getItem("userMail") || null); // Allow dynamic userId changes

  useEffect(() => {
    if (!userMail) return; // Only fetch if userId is set

    fetch(`http://localhost:9000/user?email=${userMail}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userMail]); // Fetch data whenever userId changes

  const updateUserMail = (newUserMail) => {
    setUserMail(newUserMail);
    localStorage.setItem("userMail", newUserMail); // Store in localStorage
  };

  return (
    <UserContext.Provider value={{ user, setUser, setUserMail: updateUserMail }}>
      {children}
    </UserContext.Provider>
  );
};