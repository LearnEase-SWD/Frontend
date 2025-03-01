import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://learnease-dsc7dwgpeabthffb.southeastasia-01.azurewebsites.net/api", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
