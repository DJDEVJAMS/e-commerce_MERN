import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_PROFILE } from '../utils/queries';
import { UPDATE_USER_PROFILE } from '../utils/mutations'  // Import queries/mutations
import auth from '../utils/auth';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import '../css/profile.css';
const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // Fetch user profile using GraphQL query
  const { loading, error, data } = useQuery(GET_USER_PROFILE);
  
  // Mutation for updating user profile
  const [updateProfile] = useMutation(UPDATE_USER_PROFILE);

  // Populate the profile fields with data fetched from the server
  useEffect(() => {
    if (data && data.me) {
      const { me } = data;
      setUsername(me.username);
      setEmail(me.email);

    }
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);}
      else if (name === 'password') {
      setPassword(value);
      }}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(password);
      // if (password === '') {
      await updateProfile({
        variables: {
          username,
          email,
          password,        },
      });
      alert('Profile updated successfully!');
    // } else {alert('Please enter a new password to update your profile.');}
    } catch (err) {
      console.error(err);
      alert('Error updating profile. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile information.</p>;

  return (
    <div className="profile-page">
      <h1>{Auth.getProfile().data.username}'s Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Update Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password (leave blank to keep current password)"
          />
        </div>
        {/* <div>
          <label>Role</label>
          <input type="text" value={role} readOnly /> 
        </div> */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
