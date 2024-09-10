const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    email: String
    role: String
    username: String
  }
  type Post {
    id: ID
    title: String
    description: String
    price: Float
    postedBy: User
    type: String
  }
  type Query {
    users: [User]
    getPosts(type: String!): [Post]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    signup(email: String!, password: String!, role: String!): Auth
    addPost(title: String!, description: String!, price: Float!, type: String!): Post
    updatePost(id: ID!, title: String, description: String, price: Float): Post
    deletePost(id: ID!): Post
  }
  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;