import React, { useState } from "react";
import { FaCheckCircle, FaAt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import { FaBell, FaHeart, FaUserPlus } from "react-icons/fa";

const feedData = [
  {
    id: 1,
    type: "post",
    users: [
      {
        name: "Rohan Pandey",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Zaid",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      },
      {
        name: "Jhon",
        avatar:
          "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
      },
      {
        name: "Dow",
        avatar:
          "https://static.vecteezy.com/system/resources/previews/041/642/170/non_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png",
      },
      {
        name: "Carles",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy3zU6gHCYIgHQ1hKv1ASWQ62U_Jpe3Wdfg&s",
      },
    ],
    message: "posted a new update",
    icon: <FaBell size={24} className="text-blue-600 mt-1" />,
    time: "2h",
  },
  {
    id: 2,
    type: "follow",
    users: [
      {
        name: "Jaysen Kang",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
      },
    ],
    message: "followed you",
    icon: <FaUserPlus size={24} className="text-blue-600 mt-1" />,
    time: "4h",
  },
  {
    id: 3,
    type: "like",
    users: [
      {
        name: "Jaysen Kang",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ],
    message: "liked your post",
    icon: <FaHeart size={24} className="text-pink-500 mt-1" />,
    time: "1d",
  },
  {
    id: 4,
    type: "follow",
    users: [
      {
        name: "Alex Liu",
        avatar:
          "https://img.freepik.com/premium-photo/white-bearded-man-png-sticker-transparent-background_53876-943032.jpg?semt=ais_hybrid&w=740",
      },
    ],
    message: "followed you",
    icon: <FaUserPlus size={24} className="text-blue-600 mt-1" />,
    time: "4h",
  },
  {
    id: 5,
    type: "post",
    users: [
      {
        name: "Ayesha Khan",
        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      },
      {
        name: "Khan",
        avatar:
          "https://static.vecteezy.com/system/resources/thumbnails/049/997/095/small/handsome-young-man-with-confident-expression-in-white-shirt-with-isolated-on-transparent-background-cut-out-png.png",
      },
      {
        name: "Tom",
        avatar:
          "https://pngfre.com/wp-content/uploads/monkey-d-luffy-24-300x289.png",
      },
      {
        name: "Lisa",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5tl3nEH8_GmEnhqc3hQ3Hmz3C4pqwQvMULMmtAisLYWeDyjhtoM2gniQLap2ypqxTiE&usqp=CAU",
      },
    ],
    message: "posted a story update",
    icon: <FaBell size={24} className="text-blue-600 mt-1" />,
    time: "6h",
  },
  {
    id: 6,
    type: "like",
    users: [
      {
        name: "Emily",
        avatar: "https://randomuser.me/api/portraits/women/46.jpg",
      },
      {
        name: "Liam",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      },
    ],
    message: "liked your post",
    icon: <FaHeart size={24} className="text-pink-500 mt-1" />,
    time: "3d",
  },
  {
    id: 7,
    type: "post",
    users: [
      {
        name: "Jason Bourne",
        avatar: "https://randomuser.me/api/portraits/men/49.jpg",
      },
    ],
    message: "posted a new reel",
    icon: <FaBell size={24} className="text-blue-600 mt-1" />,
    time: "8h",
  },
];

const tabIcons = {
  all: <FaBell className="inline mr-1" />,
  verified: <FaCheckCircle className="inline mr-1 text-blue-500" />,
  mentions: <FaAt className="inline mr-1 text-primary" />,
};

const NotificationFeed = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full md:w-[60%] lg:w-[48%] border-x border-b border-gray-700 min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <h2 className="text-gray-200 text-xl font-semibold">Notifications</h2>
        <IoSettingsOutline
          size={20}
          className="text-gray-500 hover:text-blue-600 transition"
        />
      </div>

      {/* Tabs Section */}
      <div className="flex border-b border-gray-700">
        {["all", "verified", "mentions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-semibold text-center transition border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-white bg-gray-800"
                : "border-transparent text-gray-400 hover:bg-gray-800"
            }`}
          >
            {tabIcons[tab]} {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Feed Section - Notification Card */}
      {feedData.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-between gap-4 px-4 py-3 hover:bg-gray-900 transition border-b border-gray-800"
        >
          {/* Left Section: Icon + Content */}
          <div className="flex gap-3">
            {/* Icon */}
            {item.icon}

            {/* Profile Info */}
            <div className="flex flex-col">
              {/* User Avatars */}
              <div className="flex flex-wrap gap-1 mb-1">
                {item.users.map((user, index) => (
                  <img
                    key={index}
                    src={user.avatar}
                    alt={user.name}
                    className="w-6 h-6 md:w-7 md:h-7 rounded-full object-cover"
                  />
                ))}
              </div>

              {/* Notification Text */}
              <p className="text-sm text-gray-300">
                {item.users.length > 1 ? (
                  <>
                    <span className="font-semibold text-white">
                      {item.users[0].name}
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-white">
                      {item.users.length - 1} others
                    </span>{" "}
                    {item.message}
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-white">
                      {item.users[0].name}
                    </span>{" "}
                    {item.message}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="text-sm text-gray-500 whitespace-nowrap">
            {item.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationFeed;
