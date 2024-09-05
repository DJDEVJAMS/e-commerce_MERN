const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    role: String!
    token: String
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    price: Float!
    type: String!
    postedBy: User!
  }

  type Query {
    getPosts(type: String!): [Post]
  }

  type Mutation {
    login(email: String!, password: String!): User
    register(username: String!, email: String!, password: String!, role: String!): User
    createPost(title: String!, description: String!, price: Float!, type: String!): Post
    updatePost(id: ID!, title: String!, description: String!, price: Float!): Post
    deletePost(id: ID!): String
  }
`;
