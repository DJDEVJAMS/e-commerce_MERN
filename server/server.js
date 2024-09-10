// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');
// const { authMiddleware } = require('./utils/auth');

// const PORT = process.env.PORT || 3000;
// const app = express();

// // Apollo Server setup
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// server.start().then(() => {
//   server.applyMiddleware({ app });

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

//   // Serve static assets
//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));
//   }

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//   });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const connectDB = require('./config/db');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(`GraphQL endpoint at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
