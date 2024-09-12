import { gql } from '@apollo/client';

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
    }
  }
`;

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      _id
      title
      description
      price
      contractor
    }
  }
`;

export const ADD_JOB = gql`
  mutation AddJob($title: String!, $description: String!, $price: Float!, $contractor: String!) {
    addJob(title: $title, description: $description, price: $price, contractor: $contractor) {
      _id
      title
      description
      price
      contractor
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJob($id: ID!, $title: String, $description: String, $price: Float) {
    updateJob(id: $id, title: $title, description: $description, price: $price) {
      _id
      title
      description
      price
      contractor
    }
  }
`;