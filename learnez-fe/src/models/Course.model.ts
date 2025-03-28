export interface Course {
    courseID: string,
    topicID: string,
    topic: string,
    title: string,
    price: number,
    totalLessons: number,
    difficultyLevel: string,
    createdAt: string,
    updatedAt: string,
    lessons: [],
    userCourses: []
}