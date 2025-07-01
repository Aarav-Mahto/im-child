import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import tweetData from '../../Data/Tweet';


const PostFeed = () => {
  return (
    <div className="w-full md:w-[70%] lg:w-[48%] border-x border-b border-gray-700 min-h-screen mb-2">
      {/* Arrow Icon with text Post */}
      <div className="flex items-center gap-5 p-2">
        <IoIosArrowRoundBack
          size={24}
          className="text-gray-400 hover:text-blue-500 cursor-pointer"
        />
        <h2 className="text-gray-200 text-lg font-semibold">Post</h2>
      </div>

      {/* Post Feed */}
      <div className="flex items-center justify-between gap-2 p-4">
        {/* Profile Image */}
        <div className="flex items-center gap-2">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt="Parth"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h1 className="text-sm md:text-md font-bold text-white flex items-center gap-1">
                parth
                <BsCheckCircleFill size={15} className="text-blue-600" />
              </h1>
            </div>
            <p className="text-sm text-gray-500">@parth220...</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-gray-100 px-4 py-1 hover:bg-gray-500 text-black rounded-full text-sm font-semibold hover:text-gray-900 transition duration-300">
            Promote
          </button>
          <img
            src="https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-613403.png"
            alt="Grok"
            width="20px"
            className="object-contain invert"
          />
          <div className="ml-auto text-xl whitespace-nowrap text-gray-400 cursor-pointer">
            ···
          </div>
        </div>
      </div>

      {/* Post Text  */}
      <div className="p-2 border-b border-gray-700">
        <p className="text-md text-gray-200">
          Seeing the Flash of Genius{" "}
          <span className="text-gray-800 text-xs">TM </span>in computers use
          agent trajectories makes me so bullies about AGI timelines.
        </p>
        <p className="text-md mt-4 text-gray-200">
          It's not an if, it's a when
        </p>

        <p className="text-gray-400 text-sm mt-2">
          3:43 PM · Jun 25, 2025 · <span className="text-gray-100">363 </span>{" "}
          Views
        </p>
      </div>

      {/* Post Engagements */}
      <div className="flex items-center p-4 gap-2 text-gray-500 border-b border-gray-700 hover:text-blue-600 cursor-pointer">
        <SiSimpleanalytics size={18} />
        <h2 className="text-md">View post engagements</h2>
      </div>

      {/* Post Actions */}
      <div className="flex justify-between gap-4 text-gray-400 border-b border-gray-700 p-4">
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <FaRegComment size={17} />
          <p>3</p>
        </div>
        <FaRetweet size={20} className="hover:text-blue-600 cursor-pointer" />
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <CiHeart size={20} />
          <p>8</p>
        </div>
        <IoBookmarkOutline
          size={18}
          className="hover:text-blue-600 cursor-pointer"
        />
        <GoDownload size={18} className="hover:text-blue-600 cursor-pointer" />
      </div>

      {/* Post Reply */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt="Parth"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <input 
            type="text" 
            placeholder="Post your reply"
            className="w-full bg-transparent border-none text-gray-700 outline-none text-lg"
          />
        </div>
        <button className="bg-gray-200 px-4 py-2 hover:bg-gray-500 text-black rounded-full text-sm font-semibold hover:text-gray-900 transition duration-300">Reply</button>
      </div>

      {/* Post List */}
      <div>
            {tweetData.map((tweet) => (
              <div key={tweet.id} className="w-full border-b border-gray-800">
                <div className="flex p-3 gap-3">
                  {/* Avatar */}
                  <img
                    src={tweet.avatar}
                    alt={tweet.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  />
      
                  {/* Content */}
                  <div className="flex flex-col w-full">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex flex-wrap items-center gap-x-2">
                        <h1 className="text-white font-semibold text-sm sm:text-base">{tweet.name}</h1>
                        <BsCheckCircleFill className="text-blue-600 text-xs sm:text-sm" />
                        <p className="text-gray-400 text-sm">{tweet.handle} · {tweet.time}</p>
                      </div>
      
                      <div className="flex items-center gap-2">
                        <img
                          src="https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-613403.png"
                          alt="Grok"
                          width="20"
                          className="object-contain invert"
                        />
                        <p className="text-white">...</p>
                      </div>
                    </div>
      
                    {/* Tweet Body */}
                    <div className="mt-2 text-white space-y-1 text-sm sm:text-base">
                      {tweet.content.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
      
                    {/* Actions */}
                    <div className="flex items-center justify-between gap-4 mt-4 text-gray-400">
                      <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                        <FaRegComment size={18} />
                        <span className="text-sm">{tweet.comments}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                        <FaRetweet size={18} />
                        <span className="text-sm">{tweet.retweets}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                        <CiHeart size={18} />
                        <span className="text-sm">{tweet.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
                        <SiSimpleanalytics size={15} />
                        <span className="text-sm">{tweet.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoBookmarkOutline size={18} className="hover:text-blue-500 cursor-pointer" />
                        <GoDownload size={18} className="hover:text-blue-500 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default PostFeed;
