import React from 'react'

const TrendingData = [
  {
    topic: "Sports",
    descriptions: "Trending",
    title: "About Theiro",
    posts: "14.8k posts",
  },
  {
    topic: "",
    descriptions: "Trending in United States",
    title: "#NBADraft",
    posts: "21.8k posts",
  },
  {
    topic: "Politics",
    descriptions: "Trending",
    title: "Sharia",
    posts: "75.4k posts",
  },
  {
    topic: "only on X",
    descriptions: "Trending",
    title: "#ALNST",
    posts: "86.5k posts",
  },
];
const WhatHappening = () => {
  return (
    <>
     {/* What's Happening Div */}
      <div className="w-[90%] hidden md:block border border-gray-900 rounded-2xl mt-4 p-2">
        {/* Text about What */}
        <h2 className="text-md font-bold text-white">What's happening</h2>

        {/* Trending topics */}
        {TrendingData.map((item, index) => (
          <div className="mt-2" key={index}>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">{item.topic} · {item.descriptions}</p>
              <p className="text-white">...</p>
            </div>
            <div>
              <p className="text-sm text-white font-bold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.posts}</p>
            </div>
          </div>
        ))}

        {/* Show more */}
        <div className="mt-4">
          <p className="text-blue-500 text-sm font-semibold">Show More</p>
        </div>
      </div>
    </>
  )
}

export default WhatHappening
