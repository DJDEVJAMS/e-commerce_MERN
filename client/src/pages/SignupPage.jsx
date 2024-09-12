import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import Auth from '../utils/auth';
import './css/signuppage.css';
const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');  // Default to "customer"
  const [signup] = useMutation(SIGNUP);

  const handleSubmit = (e) => {
    e.preventDefault();

    signup({
      variables: { username, email, password, role },
    })
      .then((data) => {
        console.log(data);
        Auth.login(data.data.signup.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="contractor">Business</option>
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
