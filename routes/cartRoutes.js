const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = new CartItem({ productId, quantity });
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error adding cart item' });
  }
});

router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    res.json(cartItems);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error retrieving cart items' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    await CartItem.findByIdAndUpdate(id, { quantity });
    const updatedCartItem = await CartItem.findById(id).populate('productId');
    res.json(updatedCartItem);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error updating cart item' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await CartItem.findByIdAndDelete(id);
    res.json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error deleting cart item' });
  }
});

module.exports = router;
