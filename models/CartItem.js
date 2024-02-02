// models/CartItem.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: String,
  quantity: Number,
  name: String,
  image: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('CartItem', cartItemSchema);
