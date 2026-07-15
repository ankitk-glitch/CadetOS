import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  return (
    <>
      <div className="bg-pattern"></div>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
