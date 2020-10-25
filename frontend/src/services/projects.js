import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/projects';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAllMine = async () => {
  const config = { headers: { Authorization: token } };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const createOne = async (title) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.post(baseUrl, { title }, config);
  return response.data;
};

const deleteOne = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default {
  setToken,
  getAllMine,
  createOne,
  deleteOne,
};
