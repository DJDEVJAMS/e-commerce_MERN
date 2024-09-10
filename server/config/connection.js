const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost:27017/progetterDB'
);
module.exports = mongoose.connection;
