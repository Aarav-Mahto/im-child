import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Message from './components/MessageMain/Message';
import Notification from './components/NotificationMain/Notification';
import BottomBar from './components/Home/BottomBar';
import Post from './components/PostMain/Post';

const App = () => {
  return (
    <div className='bg-[#000000] text-white min-h-screen relative'>
      <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/home' element={< Home />} />
          <Route path='/message' element={< Message />} />
          <Route path='/notification' element={< Notification />} />
          <Route path='/post' element={< Post />} />
      </Routes>

      {/* BottomBar for Mobile */}
      <div className='block md:hidden'>
        <BottomBar />
      </div>
    </div>
  )
}

export default App
