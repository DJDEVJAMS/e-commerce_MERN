const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/progetterDB',
  {

  }
);

module.exports = mongoose.connection;
