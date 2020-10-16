import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/todos';

const getAll = () => {
  const response = axios.get(baseUrl);
  return response.then((res) => res.data);
};

const createOne = (title) => {
  const response = axios.post(baseUrl, { title });
  return response.then((res) => res.data);
};

const deleteOne = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`, { id });
  return response.then((res) => res.data);
};

const updateOne = (todo) => {
  const response = axios.patch(`${baseUrl}/${todo.id}`, todo);
  return response.then((res) => res.data);
};

export default { getAll, createOne, deleteOne, updateOne };
