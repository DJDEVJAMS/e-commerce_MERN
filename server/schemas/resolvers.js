const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    getPosts: async (_, { type }) => await Post.find({ type }).populate('postedBy'),
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError('User not found');
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new AuthenticationError('Incorrect password');
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { ...user._doc, id: user._id, token };
    },
    register: async (_, { username, email, password, role }) => {
      const user = new User({ username, email, password, role });
      user.password = await bcrypt.hash(password, 10);
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { ...user._doc, id: user._id, token };
    },
    // createPost: async (_, { title, description, price, type }, { user }) => {
    //   if (!user) throw new AuthenticationError('You must be logged in');
    //   const post = new Post({ title, description, price, type, postedBy: user._id });
    //   await post.save();
    //   return post;
    // },
    createPost: async (_, { title, description, price, type }, { user }) => {
      if (!user) throw new AuthenticationError('You must be logged in');
      const isContractor = user.role === 'Contractor';
      const postType = isContractor ? 'Rate' : 'Job';  // Contractor posts Rates, Customer posts Jobs
      const post = new Post({ title, description, price, type: postType, postedBy: user._id });
      await post.save();
      return post;
    },
  },
};

module.exports = resolvers;
