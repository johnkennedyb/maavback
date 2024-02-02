const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  userId: { type: String, default: uuidv4 },
  username: String,
  email: String,
  phoneNumber: String,
  image: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);
