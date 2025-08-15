import React from 'react'
import MessageContainer from './messageContainer'
import SideBar from './sideBar'

const Home = () => {
  return (
    <div className="flex h-screen">
        <SideBar />
        <MessageContainer />
        
    </div >
  )
}

export default Home