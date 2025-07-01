import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCheckCircleFill } from "react-icons/bs";
import WhatHappening from "../RightSideBar/WhatHappening";

const PostRightSidebar = () => {
  return (
    <div className="hidden md:block w-[35%] p-2">
      {/* Search Div - hidden on mobile, shown on md and above */}
      <div className="mb-4">
        <button className="w-[90%] flex items-center gap-1 px-6 py-2 text-md border border-gray-900 rounded-full">
          <CiSearch size={20} /> Search
        </button>
      </div>

      {/* Relevant People */}
      <div className="w-[90%] hidden md:block border border-gray-900 rounded-2xl mt-4 p-3">
        {/* Header */}
        <h2 className="text-lg font-bold text-white mb-3">Relevant People</h2>

        <div className="flex items-start gap-3">
          {/* Avatar */}
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt="Parth"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />

          {/* User Info + Bio */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h1 className="text-sm md:text-md font-bold text-white flex items-center gap-1">
                parth
                <BsCheckCircleFill size={15} className="text-blue-600" />
              </h1>
            </div>
            <p className="text-sm text-gray-500">@parth220...</p>

            {/* Bio aligned under username */}
            <p className="text-gray-300 text-sm mt-1">
              Spiritual Ronin | agent whisperer
              <span className="text-blue-600"> @hud_evals</span>, yc wc25, human
              <span className="text-blue-600"> @earth</span> | 🙋⚡🍀
            </p>
          </div>
        </div>
      </div>

      {/* What's Happening */}
      <WhatHappening />

      {/* Footer */}
      <div className="mt-4 p-3">
        <p className="text-sm text-gray-200 mb-1">@2025 X Corp..</p>
        <p className="text-xs text-gray-500">
          Terms of Service | Privacy Policy | Cookies Policy | Accessibility |
          Ads Info | More...
        </p>
      </div>
    </div>
  );
};

export default PostRightSidebar;
