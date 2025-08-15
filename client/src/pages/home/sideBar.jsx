import React, { useState } from 'react';
import ChatListItem from './ChatListItem'; // This line imports the other component

function SideBar() {
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  
  const chats = [
    { name: 'Alice', message: "Hey, how's it going?", time: '10:42 AM', unread: 2, online: true, imgSrc: 'https://placehold.co/100x100/a3e635/1e293b?text=A' },
    { name: 'Bob', message: 'See you tomorrow!', time: '9:15 AM', unread: 0, online: false, imgSrc: 'https://placehold.co/100x100/60a5fa/1e293b?text=B' },
    { name: 'Charlie', message: 'Can you send me the file?', time: 'Yesterday', unread: 1, online: true, imgSrc: 'https://placehold.co/100x100/f87171/1e293b?text=C' },
  ];

  return (
    <div data-theme="night" className="flex flex-col h-screen w-full max-w-sm bg-base-100 text-base-content">
      
      {/* Header */}
      <div className="p-4 border-b border-base-300 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Auto Chat</h1>
        <button className="btn btn-ghost btn-circle">
           <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-base-200">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" className="grow bg-transparent" placeholder="Search" />
        </label>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="menu p-0 space-y-2">
          {chats.map((chat, index) => (
            <ChatListItem
              key={index}
              name={chat.name}
              message={chat.message}
              time={chat.time}
              unread={chat.unread}
              online={chat.online}
              imgSrc={chat.imgSrc}
              isActive={activeChatIndex === index}
              onClick={() => setActiveChatIndex(index)}
            />
          ))}
        </ul>
      </div>

      {/* New Chat Button */}
      <div className="p-4 border-t border-base-300">
        <button className="btn btn-primary w-full rounded-full gap-2">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          New Chat
        </button>
      </div>
    </div>
  );
}

export default SideBar;