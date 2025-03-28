export interface Lesson { 
    lessonID: string,
    courseID: string,
    course: null,
    index: number,
    title: string,
    lessonType: number,
    createdAt: string,
    videoLesson: string,
    theoryLesson: null,
    userProgress: null,
    exercises: [],
    flashcards: []
}

export enum LessonType { 
    Video = 0,
    Theory = 1,
    Exercise = 2,
    Conversation = 3
}