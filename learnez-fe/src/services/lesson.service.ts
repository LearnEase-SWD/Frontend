import axiosInstance from "./axiosInstance";

export const getAllLessons = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/lessons?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }