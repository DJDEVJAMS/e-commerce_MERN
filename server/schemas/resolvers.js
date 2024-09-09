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
  },
  
  Mutation: {
    signup: async (parent, { username, email, password, role }) => {
      const user = await User.create({ username, email, password, role });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
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
    },
  },
};

module.exports = resolvers;
