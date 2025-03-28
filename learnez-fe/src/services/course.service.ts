import axiosInstance from "./axiosInstance";

export const getAllCourses = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/courses?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }