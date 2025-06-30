import React from "react";
import { useState } from "react";
import {
  FaSearch,
  FaEllipsisH,
  FaRegSmile,
  FaPaperPlane,
} from "react-icons/fa";

const dummyThreads = [
  {
    id: '1',
    name: 'The Browntrust',
    lastMessage: 'Rishan Kishor shared a post.',
    time: 'Jun 25',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    unread: true,
    messages: [
      { fromMe: false, text: 'This area will blur/blind a whole set of 35-40M with no money and some will still argue', time: '09:00', type: 'text' },
      { fromMe: true, text: 'This is pretty good', time: '09:01', type: 'text' },
      { fromMe: false, text: 'This is my favorite tweet', time: '09:02', type: 'text' },
      { fromMe: false, text: '', time: '09:03', type: 'image', image: 'https://placehold.co/200x120/000/FFF?text=GenAI' },
      { fromMe: true, text: 'anyone tried: genai cli', time: '09:04', type: 'text' },
    ],
  },
  {
    id: '2',
    name: 'Archie Sawarkar',
    lastMessage: 'shared a post.',
    time: 'Jun 25',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: 'Hey, how are you?', time: '10:00', type: 'text' },
      { fromMe: true, text: 'I am good, thanks!', time: '10:01', type: 'text' },
      { fromMe: false, text: 'Check out this photo!', time: '10:02', type: 'text' },
      { fromMe: false, text: '', time: '10:03', type: 'image', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    id: '3',
    name: 'Sedona Halliday',
    lastMessage: "Let's catch up soon!",
    time: 'Jun 24',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    unread: true,
    messages: [
      { fromMe: false, text: "Let's catch up soon!", time: '11:00', type: 'text' },
      { fromMe: true, text: 'Absolutely! When are you free?', time: '11:01', type: 'text' },
    ],
  },
  {
    id: '4',
    name: 'GINKI, Meet Patel',
    lastMessage: 'Shared a meme 😂',
    time: 'Jun 23',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: 'Shared a meme 😂', time: '12:00', type: 'text' },
      { fromMe: false, text: '', time: '12:01', type: 'image', image: 'https://placehold.co/150x100/222/FFF?text=Meme' },
      { fromMe: true, text: "Haha, that's hilarious!", time: '12:02', type: 'text' },
    ],
  },
  {
    id: '5',
    name: 'Evan Moore',
    lastMessage: "Let's meet at 5pm.",
    time: 'Jun 22',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: "Let's meet at 5pm.", time: '13:00', type: 'text' },
      { fromMe: true, text: 'See you then!', time: '13:01', type: 'text' },
    ],
  },
  {
    id: '6',
    name: 'Brendan Holiday',
    lastMessage: 'Sent a voice message.',
    time: 'Jun 21',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: 'Sent a voice message.', time: '14:00', type: 'text' },
      { fromMe: true, text: 'Can you send it again?', time: '14:01', type: 'text' },
    ],
  },
  {
    id: '7',
    name: 'Mayank SFP',
    lastMessage: 'Shared a document.',
    time: 'Jun 20',
    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: 'Shared a document.', time: '15:00', type: 'text' },
      { fromMe: true, text: 'Received, thanks!', time: '15:01', type: 'text' },
    ],
  },
  {
    id: '8',
    name: 'Christopher Settle',
    lastMessage: "Let's play chess.",
    time: 'Jun 19',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: "Let's play chess.", time: '16:00', type: 'text' },
      { fromMe: true, text: "I'm in! Your move.", time: '16:01', type: 'text' },
    ],
  },
  {
    id: '9',
    name: 'Nick G',
    lastMessage: 'Shared a video.',
    time: 'Jun 18',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    unread: false,
    messages: [
      { fromMe: false, text: 'Shared a video.', time: '17:00', type: 'text' },
      { fromMe: true, text: "Nice, I'll watch it!", time: '17:01', type: 'text' },
    ],
  },
]

const ChatSection = () => {
    const [selectedThread, setSelectedThread] = useState(dummyThreads[0])
    const [chatInput, setChatInput] = useState('');

  return (
    <div className="hidden md:block w-[30%] border-x border-b border-gray-700 min-h-screen  flex-col justify-between mb-2">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-accent">
        <div className="flex items-center gap-3">
          <img
            src={selectedThread.avatar}
            alt={selectedThread.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-base">{selectedThread.name}</span>
        </div>
        <FaEllipsisH className="text-xl text-gray-400 cursor-pointer" />
      </div>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {selectedThread.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            {msg.type === "text" ? (
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                  msg.fromMe
                    ? "bg-primary text-white"
                    : "bg-base-200 text-secondary"
                } text-sm`}
              >
                {msg.text}
              </div>
            ) : (
              <img
                src={msg.image}
                alt="media"
                className="max-w-[200px] rounded-2xl border border-accent"
              />
            )}
          </div>
        ))}
      </div>
      {/* Chat Input */}
      <div className="flex items-center gap-2 px-6 py-4 border-t border-accent">
        <button className="p-2 rounded-full hover:bg-base-200 transition">
          <FaRegSmile size={20} />
        </button>
        <input
          type="text"
          placeholder="Start a new message"
          className="flex-1 rounded-full bg-base-200 px-4 py-2 text-sm focus:outline-none"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button className="p-2 rounded-full hover:bg-primary/10 transition text-primary">
          <FaPaperPlane size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
