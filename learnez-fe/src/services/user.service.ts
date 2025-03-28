import axiosInstance from "./axiosInstance";

export const getUserbyEmail = async (email: any) => {
    try {
      const res = await axiosInstance.get(`/users?email=${email}`);
      return res.data ;
    } catch (error: any) {
      console.error(error);
    }
  };
export const getAllUsers = async (pageIndex : any, pageSize : any) => {
  try {
    const res = await axiosInstance.get(`/users?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
    return res.data.data;
  }catch (error: any) {
    console.error(error);
  }   
}

  