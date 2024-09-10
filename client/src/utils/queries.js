import { gql } from '@apollo/client';

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
