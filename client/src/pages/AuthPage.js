import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const handleLogin = (email, password) => {
    // Handle login API call
    console.log('Login with:', { email, password });
  };

  const handleSignup = (email, password, role) => {
    // Handle signup API call
    console.log('Signup with:', { email, password, role });
  };

  return (
    <div className="auth-page">
      <div className="auth-toggle">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>
          Signup
        </button>
      </div>
      <div className="auth-form">
        {isLogin ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Signup onSignup={handleSignup} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
