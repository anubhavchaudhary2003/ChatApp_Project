import axios from 'axios';
const VITE_URI = import.meta.env.VITE_URL || 'http://localhost:5002/api/v1/user/';
const axiosInstance = axios.create({
  baseURL: VITE_URI,
  withCredentials: true, // Include credentials (cookies) in requests
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
export default axiosInstance;