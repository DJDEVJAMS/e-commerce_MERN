import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; // Optional if using GraphQL
import { LOGIN } from '../utils/mutations'; // Optional mutation
import Auth from '../utils/auth'; // Authentication utility, optional

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Mutation for login (optional depending on how you're handling login)
  const [login, { error }] = useMutation(LOGIN); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you're using a GraphQL mutation for login
      const { data } = await login({
        variables: { email, password },
      });

      // Handle authentication (e.g., storing token)
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        {error && <p className="error-text">Login failed. Please check your credentials.</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
