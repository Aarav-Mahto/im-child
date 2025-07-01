import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className="w-full md:w-[70%] lg:w-[48%] border-x border-gray-700 min-h-screen pb-20">
      <div>
        <CreatePost />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed
