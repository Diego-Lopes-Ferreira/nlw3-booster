import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.126:3333/',
  // exp://192.168.0.126:19000
});

export default api;
