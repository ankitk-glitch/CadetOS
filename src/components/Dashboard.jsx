import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Users, CheckCircle, Clock, FileText } from 'lucide-react';
import './Dashboard.css';

const attendanceData = [
  { name: 'Mon', present: 142, absent: 8 },
  { name: 'Tue', present: 138, absent: 12 },
  { name: 'Wed', present: 145, absent: 5 },
  { name: 'Thu', present: 140, absent: 10 },
  { name: 'Fri', present: 148, absent: 2 },
  { name: 'Sat', present: 150, absent: 0 },
];

const activityData = [
  { id: '1', cadet: 'Cdt. Rahul Sharma', action: 'Scanned in via QR', time: '2 mins ago', status: 'success' },
  { id: '2', cadet: 'JUO Priya Patel', action: 'Published Fall-in Order', time: '1 hr ago', status: 'info' },
  { id: '3', cadet: 'Cdt. Aman Verma', action: 'Downloaded Map Reading PDF', time: '3 hrs ago', status: 'success' },
  { id: '4', cadet: 'SUO Ankit Kumar', action: 'Generated Parade State Report', time: '5 hrs ago', status: 'warning' },
];

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div className="stat-card glass-panel animate-fade-in">
    <div className="stat-header">
      <div className="stat-title">{title}</div>
      <div className="stat-icon-wrapper">
        <Icon size={20} className="stat-icon" />
      </div>
    </div>
    <div className="stat-body">
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${trend}`}>
        {trend === 'up' ? '↑' : '↓'} {change} from last week
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header animate-fade-in">
        <div>
          <h2 className="dashboard-title">Battalion Overview</h2>
          <p className="dashboard-subtitle">Real-time telemetry and ops summary</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-secondary">Export PDF</button>
          <button className="btn-primary">Generate QR</button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard 
          title="Monthly Active Cadets (MAC)" 
          value="150" 
          change="12%" 
          trend="up" 
          icon={Users} 
        />
        <StatCard 
          title="Avg. Parade Attendance" 
          value="94.5%" 
          change="3.2%" 
          trend="up" 
          icon={CheckCircle} 
        />
        <StatCard 
          title="Admin Hours Saved" 
          value="14.2h" 
          change="5h" 
          trend="up" 
          icon={Clock} 
        />
        <StatCard 
          title="Study Vault Downloads" 
          value="342" 
          change="18%" 
          trend="up" 
          icon={FileText} 
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="card-title">Weekly Attendance Trends</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4ff00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4ff00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#8a8a93" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#8a8a93" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141417', borderColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}
                  itemStyle={{ color: '#d4ff00' }}
                />
                <Area type="monotone" dataKey="present" stroke="#d4ff00" strokeWidth={3} fillOpacity={1} fill="url(#colorPresent)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="activity-card glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="card-title">Recent Activity</h3>
          <div className="activity-list">
            {activityData.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-indicator bg-${activity.status}`}></div>
                <div className="activity-content">
                  <div className="activity-title">
                    <span className="cadet-name">{activity.cadet}</span>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                  <div className="activity-action">{activity.action}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all-btn">View All Logs</button>
        </div>
      </div>
    </div>
  );
}
