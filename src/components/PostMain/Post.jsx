import React from 'react'
import LeftSidebar from '../LeftSideBar/LeftSidebar'
import PostFeed from './PostFeed'
import PostRightSidebar from './PostRightSidebar'

const Post = () => {
  return (
    <div className="flex justify-between max-w-5xl mx-auto">
       {/* Left SideBar */}
       < LeftSidebar />

       {/* Post Feed Content */}
       < PostFeed />

       {/* Right Sidebar */}
       < PostRightSidebar />
    </div>
  )
}

export default Post
