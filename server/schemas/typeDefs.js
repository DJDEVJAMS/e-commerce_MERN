const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    role: String
  }

  type Task {
    _id: ID
    title: String
    description: String
    status: String
    postedBy: User
    assignedTo: User
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    tasks: [Task]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!, role: String!): Auth
    createTask(title: String!, description: String!): Task
    assignTask(taskId: ID!, userId: ID!): Task
    updateUserProfile(username: String!, email: String!, password: String): User
  }
`;




module.exports = typeDefs;
