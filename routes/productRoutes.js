const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const products = require('../product');

router.get('/', async (req, res) => {
    try {
        res.json(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
      }
});

module.exports = router;


