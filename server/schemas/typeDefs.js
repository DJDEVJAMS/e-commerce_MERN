const { gql } = require('apollo-server-express');


const typeDefs = gql`
type Query {
  me: User
}
  type Query {
  contractors: [User]
}

type Query {
  searchOpportunities(searchTerm: String!): [Post]
}

  type User {
    _id: ID
    email: String
    role: String
    username: String
  }
  type Post {
    _id: ID
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
    signup(username:String!, email: String!, password: String!, role: String!): Auth
    addPost(title: String!, description: String!, price: Float!, type: String!): Post
    updatePost(id: ID!, title: String, description: String, price: Float): Post
    updateUserProfile(username: String!, email: String!, password: String): User
    deletePost(id: ID!): Post
  }
  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;