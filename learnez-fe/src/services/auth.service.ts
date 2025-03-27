import axiosInstance from "./axiosInstance";

export const handleLogin = async () => {
  try {
     await axiosInstance.get("/auth/login");
  } catch (error: any) {

  }
};
