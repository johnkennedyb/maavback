const express = require('express');
const router = express.Router();
const User = require('../models/User');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { username, email, phoneNumber, password } = req.body;
    const image = req.file ? req.file.path : null;
    const newUser = new User({ username, email, phoneNumber, image, password });
    await newUser.save();
    res.json({
      message: 'Signup successful',
      userData: {
        userId: newUser.userId,
        username,
        email,
        phoneNumber,
        image,
        password,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      message: 'All users retrieved successfully',
      users: users,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to retrieve users' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password. Please try again.' });
    }
    return res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
