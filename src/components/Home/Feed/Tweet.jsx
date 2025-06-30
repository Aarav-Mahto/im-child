import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";

const tweetData = [
  {
    id: 1,
    name: "Luffy",
    handle: "@0xluffyb",
    time: "12h",
    avatar: "https://avatarfiles.alphacoders.com/364/364538.png",
    content: [
      "This is an example tweet content to show layout and styling.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, facilis.",
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrl9jntkzDMaioNcYt85SqtAO0eOFhIw3XA&s",
    comments: 68,
    retweets: 136,
    likes: "3.9k",
    views: "169k",
  },
  {
    id: 2,
    name: "Zoro",
    handle: "@0xzoro",
    time: "2h",
    avatar: "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740",
    content: [
      "Just finished my training. Time to sleep for 3 days.",
      "No one wakes me up unless it's an emergency.",
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuw8uEaKQOx6YmrImNWTLcogJ3GfxrnttKeQ&s",
    comments: 42,
    retweets: 91,
    likes: "1.2k",
    views: "88k",
  },
  {
    id: 3,
    name: "Sanji",
    handle: "@chefSan",
    time: "5h",
    avatar: "https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png",
    content: [
      "Cooked a feast for the crew today 🍖🥘",
      "Don’t tell Zoro, I added seaweed in his rice again 😏",
    ],
    image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?semt=ais_hybrid&w=740",
    comments: 58,
    retweets: 114,
    likes: "2.5k",
    views: "110k",
  },
];

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
