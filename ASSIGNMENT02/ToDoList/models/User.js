const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  githubId: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true }, 
  password: { type: String, required: false }, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
