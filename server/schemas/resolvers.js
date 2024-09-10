<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');
const { User, Task } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    tasks: async () => {
      return Task.find();
    },
=======
const User = require('../models/User');
const Post = require('../models/Post');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => User.find({}),
    getPosts: async (parent, { type }) => Post.find({ type }).populate('postedBy'),
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
  },
  
  Mutation: {
<<<<<<< HEAD
    signup: async (parent, { username, email, password, role }) => {
      const user = await User.create({ username, email, password, role });
=======
    signup: async (parent, { email, password, role }) => {
      const user = await User.create({ email, password, role });
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
<<<<<<< HEAD
        throw new AuthenticationError('No user found with this email');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    createTask: async (parent, { title, description }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to create a task');
      }
      const task = await Task.create({
        title,
        description,
        postedBy: context.user._id,
      });
      return task;
    },
    assignTask: async (parent, { taskId, userId }) => {
      const task = await Task.findByIdAndUpdate(
        taskId,
        { assignedTo: userId, status: 'assigned' },
        { new: true }
      );
      return task;
    },

      updateUserProfile: async (parent, { username, email, password }, context) => {
        if (!context.user) {
          throw new AuthenticationError('You need to be logged in to update your profile');
        }
  
        const updateData = { username, email };
        if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          updateData.password = hashedPassword;
        }
  
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          updateData,
          { new: true }
        );
  
        return updatedUser;
=======
        throw new Error('No user found with this email');
      }

      const correctPw = await user.comparePassword(password);
      if (!correctPw) {
        throw new Error('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { title, description, price, type }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const post = await Post.create({
        title,
        description,
        price,
        type,
        postedBy: context.user._id,
      });

      return post.populate('postedBy');
    },
    updatePost: async (parent, { id, title, description, price }) => {
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, description, price },
        { new: true }
      );
      return updatedPost.populate('postedBy');
    },
    deletePost: async (parent, { id }) => {
      const deletedPost = await Post.findByIdAndDelete(id);
      return deletedPost.populate('postedBy');
>>>>>>> 0a413f04a288d23e6606356e4946e6f9b5a72442
    },
  },
};

module.exports = resolvers;
