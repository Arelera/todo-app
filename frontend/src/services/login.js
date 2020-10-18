import axios from 'axios';

const baseUrl = '/api/login';

const loginUser = (user) => {
  const response = axios.post(baseUrl, user);
  return response.then((res) => res.data);
};

export default { loginUser };
