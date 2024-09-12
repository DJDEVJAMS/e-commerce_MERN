import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from '../utils/queries';  // Import queries/mutations
import './css/style.css';
const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  // Fetch user profile using GraphQL query
  const { loading, error, data } = useQuery(GET_USER_PROFILE);
  
  // Mutation for updating user profile
  const [updateProfile] = useMutation(UPDATE_USER_PROFILE);

  // Populate the profile fields with data fetched from the server
  useEffect(() => {
    if (data) {
      const { me } = data;
      setUsername(me.username);
      setEmail(me.email);
      setRole(me.role);  // role is static and cannot be changed
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        variables: {
          username,
          email,
          password: password || undefined,  // Only send password if the user updated it
        },
      });
      alert('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating profile. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile information.</p>;

  return (
    <div className="profile-page">
      <h1>{username}'s Profile</h1>
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
            placeholder="Enter new password (optional)"
          />
        </div>
        <div>
          <label>Role</label>
          <input type="text" value={role} readOnly />  {/* Static field */}
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
