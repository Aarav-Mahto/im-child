import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import tweetData from "../../Data/Tweet";

const Tweet = () => {
  return (
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

              {/* Tweet Image */}
              <div className="mt-3">
                <img
                  src={tweet.image}
                  alt="Tweet Visual"
                  className="w-full rounded-xl border border-gray-700 object-cover max-h-[300px] sm:max-h-[500px]"
                />
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
  );
};

export default Tweet;
