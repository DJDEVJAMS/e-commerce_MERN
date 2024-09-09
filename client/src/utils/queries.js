import { gql } from '@apollo/client';

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
    }
  }
`;
