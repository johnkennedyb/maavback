const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    price: { // Corrected from prize to price
        type: Number, // Assuming the price is a number
    },
}, { timestamps: true }); // Using timestamps directly in the schema options

const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Exporting directly the Product model

