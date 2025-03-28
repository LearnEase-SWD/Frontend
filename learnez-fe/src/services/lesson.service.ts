import { CreateExercise, CreateFlashcard, CreateLesson, CreateTheoryLesson, CreateVideoLesson } from "../models/Lesson.model";
import axiosInstance from "./axiosInstance";

export const getAllLessons = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/lessons?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }

  export const createLesson = async (lesson : CreateLesson) => {
    try {
       await axiosInstance.post("/lessons", lesson);
       return true;
    }catch (error: any) {
      console.error(error);
    }   
  }

  export const getAllTheoryLessons = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/theory-lessons?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }

  export const createTheoryLesson = async (theoryLesson : CreateTheoryLesson) => {
    try {
      await axiosInstance.post("/theory-lessons", theoryLesson);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }

  export const getAllExercises = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/exercises?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }

  export const createExercise = async (exercise : CreateExercise) => {
    try {
      await axiosInstance.post("/exercises", exercise);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }

  export const getAllFlashcards = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/flashcards?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }

  
  export const createFlashcard = async (flashcard : CreateFlashcard) => {
    try {
      await axiosInstance.post("/flashcards", flashcard);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }
  export const getAllVideoLessons = async (pageIndex : any, pageSize : any) => {
    try {
      const res = await axiosInstance.get(`/VideoLesson?=pageIndex=${pageIndex}&pageSize=${pageSize}`);
      return res.data.data;
    }catch (error: any) {
      console.error(error);
    }   
  }
  
  export const createVideoLesson = async (videoLesson : CreateVideoLesson) => {
    try {
      await axiosInstance.post("/VideoLesson", videoLesson);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }
