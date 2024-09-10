const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'assigned', 'completed'],
    default: 'open',
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: { type: Date, default: Date.now },
});

const Task = model('Task', taskSchema);

module.exports = Task;
