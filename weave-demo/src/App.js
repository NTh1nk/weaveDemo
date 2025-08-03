import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference, default to light mode
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    // Apply theme to document body
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      {isLoggedIn ? (
        <Dashboard 
          username={username} 
          onLogout={handleLogout} 
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      ) : (
        <Login 
          onLogin={handleLogin} 
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      )}
    </div>
  );
}

export default App;
