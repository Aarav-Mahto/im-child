import React, { useState } from "react";
import { FaEllipsisH, FaRegSmile, FaPaperPlane } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

const dummyThreads = [
  {
    id: "1",
    name: "The Browntrust",
    lastMessage: "Rishan Kishor shared a post.",
    time: "Jun 25",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    unread: true,
    messages: [
      {
        fromMe: false,
        text: "This area will blur/blind a whole set of 35-40M with no money and some will still argue",
        time: "09:00",
        type: "text",
      },
      { fromMe: true, text: "This is pretty good", time: "09:01", type: "text" },
      { fromMe: false, text: "This is my favorite tweet", time: "09:02", type: "text" },
      { fromMe: false, text: "", time: "09:03", type: "image", image: "https://placehold.co/200x120/000/FFF?text=GenAI" },
      { fromMe: true, text: "anyone tried: genai cli", time: "09:04", type: "text" },
    ],
  }
];

const ChatSection = () => {
  const [selectedThread] = useState(dummyThreads[0]);
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="hidden md:flex w-[40%] flex-col border-x border-b border-gray-700 bg-black text-white mb-2">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <img
            src={selectedThread.avatar}
            alt={selectedThread.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-base">{selectedThread.name}</span>
        </div>
        <div className="flex items-center gap-2">
            <IoChatbubbleOutline size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer"/>
            <IoIosInformationCircleOutline size={20} className="text-gray-400 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 border-b border-gray-700">
  {selectedThread.messages.map((msg, idx) => (
    <div
      key={idx}
      className={`flex items-end gap-2 ${
        msg.fromMe ? "justify-end" : "justify-start"
      }`}
    >
      {/* Receiver's avatar */}
      {!msg.fromMe && (
        <img
          src={selectedThread.avatar}
          alt="Receiver"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}

      {/* Message bubble */}
      {msg.type === "text" ? (
        <div
          className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
            msg.fromMe
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200"
          }`}
        >
          {msg.text}
        </div>
      ) : (
        <img
          src={msg.image}
          alt="media"
          className="max-w-[200px] rounded-2xl border border-gray-600"
        />
      )}

      {/* Sender's avatar */}
      {msg.fromMe && (
        <img
          src="https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740" // Replace with your logged-in user avatar
          alt="Sender"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
    </div>
  ))}
</div>

      {/* Input */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-700 bg-black">
        <button className="p-2 rounded-full hover:bg-gray-800 transition">
          <FaRegSmile size={20} className="text-gray-300" />
        </button>
        <input
          type="text"
          placeholder="Start a new message"
          className="flex-1 rounded-full bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button className="p-2 rounded-full hover:bg-blue-900 transition">
          <FaPaperPlane size={20} className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
