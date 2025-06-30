import React from 'react'
import LeftSidebar from './LeftSideBar/LeftSidebar'
import Feed from './Feed/Feed'
import RightSidebar from './RightSideBar/RightSidebar'

const Home = () => {
  return (
    <div className='flex justify-between max-w-5xl mx-auto'>
       <LeftSidebar />
       <Feed />
       <RightSidebar />
    </div>
  )
}

export default Home
