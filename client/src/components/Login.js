import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      username
      token
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, error }] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    try {
      const { data } = await login({ variables: { email, password } });
      localStorage.setItem('token', data.login.token);
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p>Error logging in</p>}
    </div>
  );
}

export default Login;
