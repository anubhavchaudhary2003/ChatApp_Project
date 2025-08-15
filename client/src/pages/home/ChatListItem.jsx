import React from 'react';

// This component is for a single user in the chat list.
function ChatListItem(props) {
  // Start with the base styles for the list item.
  let itemClasses = "flex items-center gap-4 p-3 rounded-xl hover:bg-base-200 cursor-pointer relative";

  // If this chat item is active, add the active style.
  if (props.isActive) {
    itemClasses += " bg-base-300";
  }

  return (
    <li>
      <a onClick={props.onClick} className={itemClasses}>
        {props.isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"></div>}

        <div className="avatar relative">
          <div className="w-12 rounded-full ring-1 ring-base-300">
            <img 
              src={props.imgSrc} 
              alt="User avatar" 
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/3d4451/ffffff?text=U'; }}
            />
          </div>
          {props.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-success border-2 border-base-100 rounded-full"></div>}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <p className="font-bold truncate">{props.name}</p>
            <p className="text-xs text-base-content/60">{props.time}</p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm text-base-content/70 truncate">{props.message}</p>
            {props.unread > 0 && (
              <div className="badge badge-primary font-bold">{props.unread}</div>
            )}
          </div>
        </div>
      </a>
    </li>
  );
}

export default ChatListItem;
