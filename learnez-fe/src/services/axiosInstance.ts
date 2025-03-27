import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7002/api", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
