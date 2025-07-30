import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getPasswordStrength = (password) => {
    if (!password) return { score: 0, label: '', color: '' };
    
    let score = 0;
    let feedback = [];
    
    // Length check
    if (password.length >= 8) score += 1;
    else feedback.push('At least 8 characters');
    
    // Contains lowercase
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Include lowercase letters');
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Include uppercase letters');
    
    // Contains numbers
    if (/\d/.test(password)) score += 1;
    else feedback.push('Include numbers');
    
    // Contains special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else feedback.push('Include special characters');
    
    const strengthMap = {
      0: { label: 'Very Weak', color: '#ff4444' },
      1: { label: 'Weak', color: '#ff8800' },
      2: { label: 'Fair', color: '#ffaa00' },
      3: { label: 'Good', color: '#00aa00' },
      4: { label: 'Strong', color: '#008800' },
      5: { label: 'Very Strong', color: '#006600' }
    };
    
    return {
      score,
      label: strengthMap[score].label,
      color: strengthMap[score].color,
      feedback
    };
  };

  const passwordStrength = getPasswordStrength(credentials.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login process
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'password') {
        // If remember me is checked, save username to localStorage
        if (rememberMe) {
          localStorage.setItem('rememberedUsername', credentials.username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }
        onLogin(credentials.username);
      } else {
        setError('Invalid credentials. Try admin/password');
      }
      setIsLoading(false);
    }, 1000);
  };

  // Load remembered username on component mount
  React.useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      setCredentials(prev => ({
        ...prev,
        username: rememberedUsername
      }));
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Weave Hack</h1>
          <p>Welcome to the demo site</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
            {credentials.password && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div 
                    className="strength-fill" 
                    style={{ 
                      width: `${(passwordStrength.score / 5) * 100}%`,
                      backgroundColor: passwordStrength.color
                    }}
                  ></div>
                </div>
                <div className="strength-info">
                  <span 
                    className="strength-label"
                    style={{ color: passwordStrength.color }}
                  >
                    {passwordStrength.label}
                  </span>
                  {passwordStrength.feedback.length > 0 && (
                    <div className="strength-feedback">
                      {passwordStrength.feedback.slice(0, 2).map((item, index) => (
                        <span key={index} className="feedback-item">• {item}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Demo credentials: admin / password</p>
          <p className="password-tip">💡 Try typing a stronger password to see the strength indicator!</p>
        </div>
      </div>
    </div>
  );
}

export default Login; 