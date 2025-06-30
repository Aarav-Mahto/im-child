import { useState } from "react";
import {
  FaSearch,
  FaEllipsisH,
  FaRegSmile,
  FaPaperPlane,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";

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
      {
        fromMe: true,
        text: "This is pretty good",
        time: "09:01",
        type: "text",
      },
      {
        fromMe: false,
        text: "This is my favorite tweet",
        time: "09:02",
        type: "text",
      },
      {
        fromMe: false,
        text: "",
        time: "09:03",
        type: "image",
        image: "https://placehold.co/200x120/000/FFF?text=GenAI",
      },
      {
        fromMe: true,
        text: "anyone tried: genai cli",
        time: "09:04",
        type: "text",
      },
    ],
  },
  {
    id: "2",
    name: "Archie Sawarkar",
    lastMessage: "shared a post.",
    time: "Jun 25",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    unread: false,
    messages: [
      { fromMe: false, text: "Hey, how are you?", time: "10:00", type: "text" },
      { fromMe: true, text: "I am good, thanks!", time: "10:01", type: "text" },
      {
        fromMe: false,
        text: "Check out this photo!",
        time: "10:02",
        type: "text",
      },
      {
        fromMe: false,
        text: "",
        time: "10:03",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    id: "3",
    name: "Sedona Halliday",
    lastMessage: "Let's catch up soon!",
    time: "Jun 24",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    unread: true,
    messages: [
      {
        fromMe: false,
        text: "Let's catch up soon!",
        time: "11:00",
        type: "text",
      },
      {
        fromMe: true,
        text: "Absolutely! When are you free?",
        time: "11:01",
        type: "text",
      },
    ],
  },
  {
    id: "4",
    name: "GINKI, Meet Patel",
    lastMessage: "Shared a meme 😂",
    time: "Jun 23",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    unread: false,
    messages: [
      { fromMe: false, text: "Shared a meme 😂", time: "12:00", type: "text" },
      {
        fromMe: false,
        text: "",
        time: "12:01",
        type: "image",
        image: "https://placehold.co/150x100/222/FFF?text=Meme",
      },
      {
        fromMe: true,
        text: "Haha, that's hilarious!",
        time: "12:02",
        type: "text",
      },
    ],
  },
  {
    id: "5",
    name: "Evan Moore",
    lastMessage: "Let's meet at 5pm.",
    time: "Jun 22",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    unread: false,
    messages: [
      {
        fromMe: false,
        text: "Let's meet at 5pm.",
        time: "13:00",
        type: "text",
      },
      { fromMe: true, text: "See you then!", time: "13:01", type: "text" },
    ],
  },
  {
    id: "6",
    name: "Brendan Holiday",
    lastMessage: "Sent a voice message.",
    time: "Jun 21",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    unread: false,
    messages: [
      {
        fromMe: false,
        text: "Sent a voice message.",
        time: "14:00",
        type: "text",
      },
      {
        fromMe: true,
        text: "Can you send it again?",
        time: "14:01",
        type: "text",
      },
    ],
  },
  {
    id: "7",
    name: "Mayank SFP",
    lastMessage: "Shared a document.",
    time: "Jun 20",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    unread: false,
    messages: [
      {
        fromMe: false,
        text: "Shared a document.",
        time: "15:00",
        type: "text",
      },
      { fromMe: true, text: "Received, thanks!", time: "15:01", type: "text" },
    ],
  },
  {
    id: "8",
    name: "Christopher Settle",
    lastMessage: "Let's play chess.",
    time: "Jun 19",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    unread: false,
    messages: [
      { fromMe: false, text: "Let's play chess.", time: "16:00", type: "text" },
      { fromMe: true, text: "I'm in! Your move.", time: "16:01", type: "text" },
    ],
  },
  {
    id: "9",
    name: "Nick G",
    lastMessage: "Shared a video.",
    time: "Jun 18",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    unread: false,
    messages: [
      { fromMe: false, text: "Shared a video.", time: "17:00", type: "text" },
      {
        fromMe: true,
        text: "Nice, I'll watch it!",
        time: "17:01",
        type: "text",
      },
    ],
  },
];
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
