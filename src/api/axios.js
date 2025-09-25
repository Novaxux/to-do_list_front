import axios from 'axios';

export const apiTodos = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export  const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_AUTH,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});