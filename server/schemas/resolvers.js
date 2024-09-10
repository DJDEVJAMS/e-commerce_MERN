const User = require('../models/User');
const Post = require('../models/Post');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => User.find({}),
    getPosts: async (parent, { type }) => Post.find({ type }).populate('postedBy'),
  },
  Mutation: {
    signup: async (parent, { email, password, role }) => {
      const user = await User.create({ email, password, role });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
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
    },
  },
};