const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium', 
  },
});

const TodoTask = mongoose.model('TodoTask', todoTaskSchema);

module.exports = TodoTask;
