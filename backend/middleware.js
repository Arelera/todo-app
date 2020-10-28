const path = require('path');

const unkownEndpointHandler = (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'), (err) => {
    if (err) {
      res.status(500).send;
    }
  });
};

module.exports = {
  unkownEndpointHandler,
};
