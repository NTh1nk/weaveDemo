import React from 'react';
import './Dashboard.css';

function Dashboard({ username, onLogout }) {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Weave Hack</h2>
        </div>
        <div className="nav-user">
          <span>Welcome back, {username}! 👋</span>
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>
      
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Welcome to Weave Hack Dashboard</h1>
          <p>This is a demo site showcasing a simple login system</p>
        </div>
        
        <div className="dashboard-content">
          <div className="card">
            <h3>Getting Started</h3>
            <p>This is a simple demo application built with React. It includes:</p>
            <ul>
              <li>Modern login interface</li>
              <li>Responsive design</li>
              <li>Form validation</li>
              <li>Loading states</li>
              <li>Error handling</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>Demo Features</h3>
            <p>Try out these demo features:</p>
            <ul>
              <li>Login with: admin / password</li>
              <li>Try wrong credentials to see error handling</li>
              <li>Responsive design on mobile devices</li>
              <li>Smooth animations and transitions</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>About Weave Hack</h3>
            <p>This is a demonstration project showcasing modern web development practices with React. The design focuses on user experience with clean, intuitive interfaces.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard; 