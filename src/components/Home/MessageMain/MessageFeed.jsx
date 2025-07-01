import { useState } from "react";
import {
  FaSearch,
  FaEllipsisH,
  FaRegSmile,
  FaPaperPlane,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import dummyThreads from "../../../Data/MessageFeed";

const MessageFeed = () => {
  const [selectedThread, setSelectedThread] = useState(dummyThreads[0]);

  return (
    <div className="w-full md:w-[70%] lg:w-[48%] border-x border-b border-gray-700 min-h-screen flex flex-col justify-between mb-2">
      <div>
        <div className="border-b border-gray-700">
          <div className="flex items-center justify-between p-2 mb-2">
            <h2 className="text-2xl text-gray-100">Messages</h2>
            <div className="flex items-center gap-4 relative">
              <div className="relative">
                <FaRegMessage
                  size={20}
                  className="text-gray-400 hover:text-blue-400 transition"
                />
                <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
              <IoSettingsOutline
                size={24}
                className="text-gray-400 hover:text-blue-400 transition"
              />
            </div>
          </div>
          <div className="relative mb-3">
            <FaSearch className="absolute left-3 top-2.5 text-gray-500 items-center" />
            <input
              type="text"
              placeholder="Search Direct Messages"
              className="w-full pl-10 pr-3 py-2 border border-gray-800 rounded-full bg-transparent text-gray-600 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        <div className="px-4 py-2 border-b border-gray-700 text-sm text-gray-300 text-center">
          Message requests
        </div>
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
  );
};

export default MessageFeed;
