const router = require('express').Router();
const Project = require('../models/project');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const getTokenFrom = (req) => {
  const auth = req.get('authorization');
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7);
  }
  return null;
};

router.get('/', async (req, res) => {
  const token = getTokenFrom(req);

  const decodedToken = jwt.verify(token, config.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).send();
  }

  const projects = await Project.find({ user: decodedToken.id });
  res.json(projects);
});

router.post('/', async (req, res) => {
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, config.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).send();
  }

  const body = req.body;
  const project = new Project({ ...body, user: decodedToken.id });
  project.save();

  res.send(project);
});

router.delete(`/:id`, async (req, res) => {
  const id = req.params.id;

  const project = await Project.findById(id);
  if (!project) {
    res.status(404).send();
  }

  try {
    await project.remove();
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

module.exports = router;
