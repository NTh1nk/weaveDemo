import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ username, onLogout }) {
  const [showProfile, setShowProfile] = useState(false);
  const [userProfile, setUserProfile] = useState({
    email: 'admin@weavehack.com',
    role: 'Administrator',
    lastLogin: new Date().toLocaleDateString(),
    joinDate: '2024-01-15'
  });

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>Weave Hack</h2>
        </div>
        <div className="nav-user">
          <span>Welcome, {username}!</span>
          <button onClick={toggleProfile} className="profile-button">
            Profile
          </button>
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>
      
      {showProfile && (
        <div className="profile-overlay">
          <div className="profile-modal">
            <div className="profile-header">
              <h3>User Profile</h3>
              <button onClick={toggleProfile} className="close-button">×</button>
            </div>
            <div className="profile-content">
              <div className="profile-avatar">
                <div className="avatar-circle">
                  {username.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="profile-info">
                <div className="info-row">
                  <label>Username:</label>
                  <span>{username}</span>
                </div>
                <div className="info-row">
                  <label>Email:</label>
                  <span>{userProfile.email}</span>
                </div>
                <div className="info-row">
                  <label>Role:</label>
                  <span>{userProfile.role}</span>
                </div>
                <div className="info-row">
                  <label>Last Login:</label>
                  <span>{userProfile.lastLogin}</span>
                </div>
                <div className="info-row">
                  <label>Member Since:</label>
                  <span>{userProfile.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
              <li>User profile management</li>
            </ul>
          </div>
          
          <div className="card">
            <h3>Demo Features</h3>
            <p>Try out these demo features:</p>
            <ul>
              <li>Login with: admin / password</li>
              <li>Try wrong credentials to see error handling</li>
              <li>Click "Profile" to view user information</li>
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