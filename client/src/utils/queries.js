import { gql } from '@apollo/client';

<<<<<<< HEAD
// Query to fetch the user's profile
export const GET_USER_PROFILE = gql`
  query getUserProfile {
    me {
      _id
      username
      email
      role
    }
  }
`;

// Mutation to update the user's profile
export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile($username: String!, $email: String!, $password: String) {
    updateUserProfile(username: $username, email: $email, password: $password) {
      _id
      username
      email
=======
export const GET_POSTS = gql`
  query getPosts($type: String!) {
    getPosts(type: $type) {
      id
      title
      description
      price
      postedBy {
        username
      }
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
    }
  }
`;
