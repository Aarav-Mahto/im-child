import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Message from './components/Home/MessageMain/Message';
import Notification from './components/NotificationMain/Notification';

const App = () => {
  return (
    <div className='bg-[#000000] text-white min-h-screen'>
      <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/home' element={< Home />} />
          <Route path='/message' element={< Message />} />
          <Route path='/notification' element={< Notification />} />
      </Routes>
    </div>
  )
}

export default App
