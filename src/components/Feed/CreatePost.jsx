import React from "react";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox, MdOutlineEmojiEmotions } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FaBold, FaItalic } from "react-icons/fa";

const CreatePost = () => {
  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto md:justify-start items-center px-4 py-3 text-gray-200 border-b border-gray-800 gap-4 md:gap-8 scrollbar-hide">
        {["For You", "Following", "Subscribed", "Project", "Standard"].map((tab, i) => (
          <div
            key={i}
            className="cursor-pointer group hover:text-white whitespace-nowrap"
          >
            <h1 className="font-semibold text-md group-hover:underline group-hover:decoration-blue-500 group-hover:underline-offset-[10px]">
              {tab}
            </h1>
          </div>
        ))}
      </div>

      {/* Post Input Area */}
      <div className="px-4 pt-4 pb-2 border-b border-gray-800">
        <div className="flex items-start gap-3">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt="Mohd Zaid"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="What's happening?"
            className="w-full outline-none border-none bg-transparent text-white placeholder:text-gray-400 text-base sm:text-lg"
          />
        </div>

        {/* Icons and Post Button */}
        <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
          <div className="flex flex-wrap items-center gap-3 text-blue-600">
            <CiImageOn size={24} />
            <MdOutlineGifBox size={24} />
            <img
              src="https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-613403.png"
              alt="Grok"
              width="24"
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(31%) sepia(93%) saturate(2041%) hue-rotate(188deg) brightness(93%) contrast(94%)",
              }}
            />
            <RiMenuSearchLine size={24} />
            <MdOutlineEmojiEmotions size={24} />
            <CiLocationOn size={20} />
            <FaBold size={20} />
            <FaItalic size={20} />
          </div>

          <div className="mb-1">
            <button className="bg-white font-bold py-2 px-6 text-black rounded-full hover:bg-gray-800 hover:text-white transition duration-300">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Show More Posts */}
      <div className="px-4 pt-2 pb-2 border-b border-gray-800 text-blue-600 text-center font-bold text-sm md:text-base">
        Show 70 Posts
      </div>
    </div>
  );
};

export default CreatePost;
