const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const config = require('../utils/config');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(passwordCorrect && user)) {
    return res.status(401).send({ error: 'Invalid credentials' });
  }

  const userForToken = {
    username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, config.SECRET);

  res.send({ token, username: user.username, name: user.name });
});

module.exports = router;
