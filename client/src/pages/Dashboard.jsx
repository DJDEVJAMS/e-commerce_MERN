import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import AuthService from '../utils/auth';

const ADD_POST = gql`
  mutation AddPost($title: String!, $description: String!, $price: Float!, $type: String!) {
    addPost(title: $title, description: $description, price: $price, type: $type) {
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
    price: 0,
    type: '',
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

    // Log the token to verify it's present
    console.log(AuthService.getToken());

    try {
      await addPost({
        variables: {
          title: formData.title,
          description: formData.description,
          price: parseFloat(formData.price), 
          type: formData.type,
        },
      });

      console.log('Post added successfully!');
      
      setFormData({
        title: '',
        description: '',
        price: 0,
        type: '',
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
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default Dashboard;