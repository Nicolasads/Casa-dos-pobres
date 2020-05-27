import axios from 'axios';

const api = axios.create({
  baseURL: 'https://casadospobrescaruaru.ml/public/'
});

export default api;