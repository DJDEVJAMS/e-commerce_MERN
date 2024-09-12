const mongoose = require('mongoose');


mmongoose.createConnection()
mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose.connection;
