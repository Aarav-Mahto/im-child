import { useState } from "react";
import LeftSidebar from "../Home/LeftSideBar/LeftSidebar";
import NotificationFeed from "./NotificationFeed";
import RightSidebar from "../Home/RightSideBar/RightSidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import dummyThreads from "../../Data/SmallMessage";

const Notification = () => {
  const [selectedThread, setSelectedThread] = useState(dummyThreads[0]);
  return (
    <div className="flex max-w-6xl mx-auto min-h-screen">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Notification Feed (Center) */}
      <NotificationFeed />

      {/* Right Column: Sidebar + Message Feed */}
      <RightSidebar />
      <div className="hidden md:block mt-auto">
        <div className="h-96 w-full float-start rounded-2xl border border-gray-700 flex flex-col justify-between mb-2 shadow-2xl shadow-gray-800">
          {/* Header */}
          <div className="p-2 border-b border-gray-700">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-md text-gray-200 font-semibold">Messages</h1>
              <div className="flex items-center gap-2">
                <FaRegMessage
                  className="text-gray-400 hover:text-blue-500 transition"
                  size={15}
                />
                <IoSettingsOutline
                  className="text-gray-400 hover:text-blue-500 transition"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Message Feed */}
          <div className="flex-1 overflow-y-auto">
            {dummyThreads.map((thread) => (
              <div
                key={thread.id}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-base-200 transition ${
                  selectedThread.id === thread.id ? "bg-base-200" : ""
                }`}
                onClick={() => setSelectedThread(thread)}
              >
                <div className="relative">
                  <img
                    src={thread.avatar}
                    alt={thread.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {thread.unread && (
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500 border-2 border-black rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold truncate text-base">
                      {thread.name}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">
                      {thread.time}
                    </span>
                  </div>
                  <div className="truncate text-sm text-gray-400">
                    {thread.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
