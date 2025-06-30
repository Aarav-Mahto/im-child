import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { LiaClipboardListSolid } from "react-icons/lia";
import {
  IoBookmarkOutline,
  IoBagAdd,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { CiCircleMore } from "react-icons/ci";

const LeftSidebar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="hidden md:block w-full md:w-[25%] xl:w-[20%] p-2">
      {/* Logo */}
      <div className="flex items-center gap-2 p-2">
        <Link to="/">
          <img
            src="https://brandlogos.net/wp-content/uploads/2023/07/x__twitter-logo_brandlogos.net_fxbde.png"
            alt="Twitter Logo"
            width="24px"
            height="24px"
            className="object-contain invert"
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <div>
        <Link to="/home">
          <SidebarItem icon={<IoMdHome size={24} />} label="Home" />
        </Link>
        <SidebarItem icon={<IoIosSearch size={24} />} label="Explore" />
        <SidebarItem
          icon={<IoMdNotificationsOutline size={24} />}
          label="Notifications"
        />
        <Link to="/message">
          <SidebarItem icon={<CiMail size={24} />} label="Messages" />
        </Link>
        <SidebarItem
          icon={
            <img
              src="https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-613403.png"
              alt="Grok"
              width="24px"
              className="object-contain invert"
            />
          }
          label="Grok"
        />

        {/* More */}
        <div
          className="flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black rounded-2xl cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          <CiCircleMore size={24} />
          <h1 className="font-bold text-md ml-1">More</h1>
        </div>

        {/* Collapsible Items */}
        {showMore && (
          <div className="transition-all">
            <SidebarItem
              icon={
                <img
                  src="https://brandlogos.net/wp-content/uploads/2023/07/x__twitter-logo_brandlogos.net_fxbde.png"
                  alt="Premium"
                  width="24"
                  className="object-contain invert"
                />
              }
              label="Premium"
            />
            <SidebarItem
              icon={<LiaClipboardListSolid size={24} />}
              label="Lists"
            />
            <SidebarItem
              icon={<IoBookmarkOutline size={24} />}
              label="Bookmarks"
            />
            <SidebarItem icon={<IoBagAdd size={24} />} label="Jobs" />
            <SidebarItem
              icon={<IoPeopleOutline size={24} />}
              label="Communities"
            />
            <SidebarItem icon={<GrNotes size={20} />} label="Articles" />
          </div>
        )}

        <SidebarItem icon={<IoPersonOutline size={24} />} label="Profile" />

        {/* Post Button */}
        <div className="mt-4">
          <button className="bg-white font-bold py-2 px-4 text-black rounded-full w-[80%] hover:bg-gray-800 transition duration-300">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-2 p-2 hover:bg-gray-200 hover:text-black rounded-2xl cursor-pointer">
    {icon}
    <h1 className="font-bold text-md ml-1">{label}</h1>
  </div>
);

export default LeftSidebar;
