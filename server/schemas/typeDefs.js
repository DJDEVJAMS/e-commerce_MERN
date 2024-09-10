const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
<<<<<<< HEAD
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
=======
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
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
  }

  type Mutation {
    login(email: String!, password: String!): Auth
<<<<<<< HEAD
    signup(username: String!, email: String!, password: String!, role: String!): Auth
    createTask(title: String!, description: String!): Task
    assignTask(taskId: ID!, userId: ID!): Task
    updateUserProfile(username: String!, email: String!, password: String): User
  }
`;




=======
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

>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
module.exports = typeDefs;
