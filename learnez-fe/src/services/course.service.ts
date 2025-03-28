import { CreateCourse } from "../models/Course.model";
import axiosInstance from "./axiosInstance";

export const getAllCourses = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/courses?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }
  export const createCourse = async (course : CreateCourse) => {
    try {
       await axiosInstance.post("/courses", course);
       return true;
    }catch (error: any) {
      console.error(error);
    }   
  }