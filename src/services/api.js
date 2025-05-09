// services/api.js
import axios from 'axios';

// Direct connection to your server
const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  withCredentials: true
});

// Add authorization token to requests with logging
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Adding token to request:', config.url);
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log('No token available for request:', config.url);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response logging
api.interceptors.response.use(
  (response) => {
    console.log(`API Success: ${response.config.method?.toUpperCase()} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;