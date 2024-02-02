const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});





module.exports  =  router;


