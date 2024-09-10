const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  contractor: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
