import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://learnease2025.azurewebsites.net/api", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
