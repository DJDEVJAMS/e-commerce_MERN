import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!, $role: String!) {
    signup(username: $username, email: $email, password: $password, role: $role) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile($username: String!, $email: String!, $password: String) {
    updateUserProfile(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;
