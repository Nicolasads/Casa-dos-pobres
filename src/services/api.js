import axios from 'axios';

const api = axios.create({
  baseURL: 'https://casadospobrescaruaru.ml/public/', 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default api;