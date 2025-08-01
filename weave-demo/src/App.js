import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <Login onLogin={handleLogin} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}

export default App;
