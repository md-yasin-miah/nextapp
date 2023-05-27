import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://api.anydemo.ai/api/v1',
  timeout: 2000, // Set a timeout (optional)
  headers: {
    'Content-Type': 'application/json',
  },
});