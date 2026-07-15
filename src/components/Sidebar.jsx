import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  QrCode, 
  Megaphone, 
  BookOpen, 
  Settings, 
  LogOut 
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, active: true },
  { id: 'cadets', label: 'Cadet Directory', icon: Users, active: false },
  { id: 'attendance', label: 'Parade States', icon: QrCode, active: false },
  { id: 'notices', label: 'Unit Orders', icon: Megaphone, active: false },
  { id: 'study', label: 'Study Vault', icon: BookOpen, active: false },
];

export default function Sidebar() {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">C</div>
          <h1 className="logo-text">Cadet<span className="neon-text">OS</span></h1>
        </div>
      </div>
      
      <div className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-label">COMMAND CENTER</span>
          <ul>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button className={`nav-item ${item.active ? 'active' : ''}`}>
                    <Icon size={20} className="nav-icon" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="nav-item">
          <Settings size={20} className="nav-icon" />
          <span>Settings</span>
        </button>
        <button className="nav-item logout">
          <LogOut size={20} className="nav-icon" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
