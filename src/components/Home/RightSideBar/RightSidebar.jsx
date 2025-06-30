import React from "react";
import { CiSearch } from "react-icons/ci";
import WhatHappening from "./WhatHappening";
import WhoToFollow from "./WhoToFollow";

const RightSidebar = () => {
  return (
    <div className="hidden md:block w-[30%] p-2">
      {/* Search Div - hidden on mobile, shown on md and above */}
      <div className="mb-4">
        <button className="w-[90%] flex items-center gap-1 px-6 py-2 text-md border border-gray-900 rounded-full">
          <CiSearch size={20} /> Search
        </button>
      </div>

      {/* What's Happening Div */}
      <WhatHappening />

      {/* Who to Follow */}
      <WhoToFollow />

      {/* Footer */}
      <div className='mt-4'>
        <p className="text-sm text-gray-200 mb-1">@2025  X Corp..</p>
        <p className="text-xs text-gray-500">Terms of Service | Privacy Policy | Cookies Policy | Accessibility | Ads Info | More...</p>
      </div>
    </div>
  );
};

export default RightSidebar;
