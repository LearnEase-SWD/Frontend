
import axiosInstance from "./axiosInstance";

export const getAllTopics = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/topics?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }

  export const createTopic = async (name : string) => {
    try {
       await axiosInstance.post("/topics", name);
       return true;
    }catch (error: any) {
      console.error(error);
    }   
  }