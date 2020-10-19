import axios from 'axios';

// it says login but it's also for creating users :)

const baseUrl = 'http://localhost:3001';

const loginUser = (user) => {
  const response = axios.post(`${baseUrl}/api/login`, user);
  return response.then((res) => res.data);
};

const createUser = (user) => {
  const response = axios.post(`${baseUrl}/api/users`, user);
  return response.then((res) => {
    console.log('RES:DATA: ', res.data);
    return res.data;
  });
};

export default { loginUser, createUser };
