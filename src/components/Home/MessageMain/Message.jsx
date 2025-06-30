import React from 'react'
import LeftSidebar from '../LeftSideBar/LeftSidebar'
import MessageFeed from './MessageFeed'
import ChatSection from './ChatSection'

const Message = () => {
  return (
    <div className='flex justify-between max-w-4xl mx-auto'>
        {/* Left SideBar */}
        < LeftSidebar />
        < MessageFeed />
        < ChatSection />
    </div>
  )
}

export default Message
