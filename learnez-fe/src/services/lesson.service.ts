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

  export const getTheoryById = async (theoryID: string) => {
    try {
      const res = await axiosInstance.get(`/theory-lessons/${theoryID}`);
      return res.data.data;
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

  export const getExerciseById = async (exerciseID: string) => {
    try {
      const res = await axiosInstance.get(`/exercises/${exerciseID}`);
      return res.data.data;
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

  export const getFlashcardById = async (flashcardID: string) => {
    try {
      const res = await axiosInstance.get(`/flashcards/${flashcardID}`);
      return res.data.data;
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

  export const getVideoLessonById = async (videoID: string) => {
    try {
      const res = await axiosInstance.get(`/VideoLesson/${videoID}`);
      return res.data.data;
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
  export const deleteTheoryLesson = async (theoryID : string) => {
    try {
      await axiosInstance.get(`/theory-lessons/${theoryID}`);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }
  export const deleteVideoLesson = async (videoID : string) => {
    try {
      await axiosInstance.get(`/VideoLesson/${videoID}`);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }
  export const deleteExercise = async (exerciseID : string) => {
    try {
      await axiosInstance.get(`/exercises/${exerciseID}`);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }
  export const deleteFlashcard = async (flashcardID : string) => {
    try {
      await axiosInstance.get(`/flashcards/${flashcardID}`);
      return true;
   }catch (error: any) {
     console.error(error);
   }   
  }
