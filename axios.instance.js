import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://test-bit.ngrok.io/api/v2'
});

export default instance;