import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const FollowData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
    name: "Brendan",
    handle: "@BrendanFoody",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFepZGtR7u-aNc592F4YPqUfi-8BIxz9e0smYvJuLOzdjvjxfbhkOnxANP6aeTK3vjOYw&usqp=CAU",
    name: "Evan Moore",
    handle: "@evancharles",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2hDC7Dzbir5M2phc430eHSAeLD_JjUdgDrxXAtMf5zHppwUDyZzt-5UzQVe6Q3OKGoA&usqp=CAU",
    name: "Zohran Kwame",
    handle: "@zohranKwame",
  },
];

const WhoToFollow = () => {
  return (
    <div className="w-[90%] hidden md:block border border-gray-900 rounded-2xl mt-4 p-2">
      {/* Header */}
      <h2 className="text-md font-bold text-white mb-3">Who to follow</h2>

      {/* Follow Suggestions */}
      {FollowData.map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          {/* Left side - avatar and user info */}
          <div className="flex items-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <BsCheckCircleFill className="text-blue-500 text-[12px]" />
              </div>
              <p className="text-gray-400 text-sm">{item.handle}</p>
            </div>
          </div>

          {/* Follow Button */}
          <button className="bg-white px-2 py-0 md:px-4 md:py-1 text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition">
            Follow
          </button>
        </div>
      ))}

      {/* Show more */}
        <div className="mt-4">
          <p className="text-blue-500 text-sm font-semibold">Show More</p>
        </div>
    </div>
  );
};

export default WhoToFollow;
