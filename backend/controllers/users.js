const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user');

// creating a user
router.post('/', async (req, res) => {
  const { name, username, password } = req.body;

  if (password.length < 8) {
    res
      .status(400)
      .send({ error: 'Password must be at least 8 characters long' });
  }

  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    return res.status(400).send({ error: 'Username already exists' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    name,
    username,
    passwordHash,
  });

  const savedUser = await user.save();

  res.json(savedUser);
});

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

module.exports = router;
