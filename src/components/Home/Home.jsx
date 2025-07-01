import React from "react";
import { useState } from "react";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import Feed from "../Feed/Feed";
import RightSidebar from "../RightSideBar/RightSidebar";
import BottomBar from "./BottomBar";

const Home = () => {

  return (
    <div className="flex justify-between max-w-5xl mx-auto">
      <LeftSidebar />
      <Feed />

      {/* Right Sidebar + Message Feed  */}
      <RightSidebar />

      {/* BottomBar for Mobile */}
      <BottomBar />
    </div>
  );
};

export default Home;
