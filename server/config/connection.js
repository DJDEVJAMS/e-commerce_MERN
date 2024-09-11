const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/progetterDB'
);
module.exports = mongoose.connection;
