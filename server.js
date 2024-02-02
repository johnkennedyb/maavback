const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 4110;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://johnkennedynnawuihe:johnkennedy12@cluster0.lqqebzy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/products', productRoutes); // Use the product routes
app.use('/api/cart', cartRoutes);
app.use('/signup', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
