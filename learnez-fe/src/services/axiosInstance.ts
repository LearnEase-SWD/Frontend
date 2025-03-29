import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://frontend-rho-blue-33.vercel.app/api", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
