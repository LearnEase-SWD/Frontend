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
export interface TheoryLesson {
    lessonID: string,
    theoryID: string,
    content: string,
    examples: string,
    createdAt: string,
}
export interface Exercise {
    exerciseID: string,
    lessonID: string,
    lesson: null,
    type: string,
    question: string,
    answerOptions: string,
    correctAnswer: string,
    createdAt: string,
    userExercises: []
}
export interface Flashcard {
    flashcardID: string,
    lessonID: string,
    lesson: null,
    front: string,
    back: string,
    pronunciationAudioURL: null,
    createdAt: string,
    userFlashcards: []
}
export interface VideoLesson {
    videoID: string,
    lessonID: string,
    videoURL: string,
    duration: string,
    createdAt: string
}
export enum LessonType { 
    Video = 0,
    Theory = 1,
    Exercise = 2,
    Conversation = 3
}

export interface CreateLesson { 
    courseID: string,
    title: string,
    lessonType: number,
    index: number,
}
export interface CreateTheoryLesson {
    lessonID: string,
    content: string,
    examples: string
}
export interface CreateExercise {
    lessonID: string,
    type: string,
    question: string,
    answerOptions: string,
    correctAnswer: string
}
export interface CreateFlashcard {
    lessonID: string,
    front: string,
    back: string,
    pronunciationAudioURL: null
}
export interface CreateVideoLesson {
    lessonID: string,
    videoURL: string,
    transcript: string,
    duration: string
}
