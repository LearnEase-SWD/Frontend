export interface CreateCourse {
    topicID: string,
    title: string,
    price: number,
    totalLessons: number,
    description: string,
    url: string,
    difficultyLevel: string,
    status: string
}

export interface Course {
    courseID: string,
    topicID: string,
    topicName: string,
    title: string,
    price: number,
    description: string,
    url: string,
    status: string,
    totalLessons: number,
    difficultyLevel: string,
    createdAt: string,
    updatedAt: string,
    lessons: [],
    userCourses: []
}