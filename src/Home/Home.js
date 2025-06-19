// src/Home.js
import React, {useContext} from "react";
import Sidebar from "../Components/Sidebar";
import MainContent from "./MainContent";
import { UserContext } from "../Contexts/UserContext";
import "./Layout.css";


const Home = () => {
  const { user } = useContext(UserContext);
  console.log("User:", user);
  return (
    <div className="layout">
        <Sidebar />
        <MainContent />
    </div>
  );
};

export default Home;