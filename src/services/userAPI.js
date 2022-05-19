import axios from 'axios';

const API_URL = 'http://localhost:4040';
axios.defaults.baseURL = API_URL;

export async function getUsers() {
  const res = await axios.get('/clients');
  return res.data;
}

export async function getUserById(id) {
  const res = await axios.get(`/clients/${id}`);
  return res.data;
}

export async function createUser(data) {
  const res = await axios.post('/clients', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res.data;
}
