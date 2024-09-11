import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_POST = gql`
  mutation AddPost($title: String!, $description: String!, $username: String!) {
    addPost(title: $title, description: $description, postedBy: $username) {
      _id
      title
      description
      postedBy {
        username
      }
    }
  }
`;

function Dashboard() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    username: '',
  });

  const [addPost] = useMutation(ADD_POST);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost({
        variables: {
          title: formData.title,
          description: formData.description,
          username: formData.username,
        },
      });
      setFormData({
        title: '',
        description: '',
        username: '',
      });
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      {/* User Input Form */}
      <form onSubmit={handleSubmit}>
        <h2>Add a Post</h2>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default Dashboard;
