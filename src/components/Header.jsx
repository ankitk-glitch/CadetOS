import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header glass-panel">
      <div className="header-left">
        <button className="icon-button menu-toggle">
          <Menu size={20} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search cadets, unit orders..." 
            className="search-input"
          />
          <div className="search-shortcut">⌘K</div>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-button notification-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <span>AK</span>
          </div>
          <div className="user-info">
            <span className="user-name">Ankit Kumar</span>
            <span className="user-role">Senior Under Officer</span>
          </div>
        </div>
      </div>
    </header>
  );
}
