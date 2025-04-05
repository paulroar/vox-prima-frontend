// import axios from 'axios';

/*

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
  },
});

*/
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

const api = {
  get: (endpoint, options = {}) =>
    fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...options.headers,
      },
    }).then(res => res.json()),

  post: (endpoint, data) =>
    fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json()),

  put: (endpoint, data, options = {}) =>
    fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...options.headers,
      },
      body: JSON.stringify(data),
    }).then(res => res.json()),
};

export default api;
