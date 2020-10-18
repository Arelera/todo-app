import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/todos';

let token = null;

const setToken = (foundToken) => {
  token = `bearer ${foundToken}`;
};

const userJson = window.localStorage.getItem('loggedTodoAppUser');
if (userJson) {
  setToken(JSON.parse(userJson).token);
}

// const getAll = () => {
//   const response = axios.get(baseUrl);
//   return response.then((res) => res.data);
// };

const getAllMine = async () => {
  const config = { headers: { Authorization: token } };
  const response = await axios.get(baseUrl, config);
  console.log('GETALLMINE response: ', response);
  return response.data;
};

const createOne = async (title) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.post(baseUrl, { title }, config);

  return response.data;
};

const deleteOne = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`, { id });
  return response.then((res) => res.data);
};

const updateOne = (todo) => {
  const response = axios.patch(`${baseUrl}/${todo.id}`, todo);
  return response.then((res) => res.data);
};

export default {
  // getAll,
  getAllMine,
  createOne,
  deleteOne,
  updateOne,
  setToken,
};
