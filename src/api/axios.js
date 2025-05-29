// src/api/axios.js
import axios from "axios";

export const BASE_URL = "http://192.168.29.77:8000";

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your actual base URL
  headers: {
    
    "Content-Type": "application/json",
  },
  // Add other default configs if needed (e.g., withCredentials: true)
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("config ==> ", config);
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
  console.log("error ==> ", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
