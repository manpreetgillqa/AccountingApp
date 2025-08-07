
const User = require('../models/userModel');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email and password are required.' });
  }
  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json({ message: 'Account created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
exports.login = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // Allow login by username or email
    const user = await User.findOne({
      $or: [
        { username: username },
        { email: email }
      ],
      password: password
    });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
