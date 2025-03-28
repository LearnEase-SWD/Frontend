import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Course } from "../../../models/Course.model";
import { getAllCourses } from "../../../services/course.service";
import {
  getAllExercises,
  getAllFlashcards,
  getAllLessons,
  getAllTheoryLessons,
  getAllVideoLessons,
} from "../../../services/lesson.service";
import {
  Exercise,
  Flashcard,
  Lesson,
  TheoryLesson,
  VideoLesson,
} from "../../../models/Lesson.model";
import { Modal } from "antd";
import CreateCourse from "./CreateCourse";
import CreateLesson from "./CreateLesson";
import CreateTheoryLesson from "./LessonType/CreateTheoryLesson";
import CreateFlashcard from "./LessonType/CreateFlashcard";
import CreateExercise from "./LessonType/CreateExercise";
import CreateVideoLesson from "./LessonType/CreateVideoLesson";

const CourseLayout = () => {
  const [isModalCreateCourseVisible, setIsModalCreateCourseVisible] =
    useState(false);
  const [isModalCreateLessonVisible, setIsModalCreateLessonVisible] =
    useState(false);
  const [isModalCreateVideoLessonVisible, setIsModalCreateVideoLessonVisible] =
    useState(false);
  const [isModalCreateFlashcardVisible, setIsModalCreateFlashcardVisible] =
    useState(false);
  const [isModalCreateExerciseVisible, setIsModalCreateExerciseVisible] =
    useState(false);
  const [
    isModalCreateTheoryLessonVisible,
    setIsModalCreateTheoryLessonVisible,
  ] = useState(false);

  const [activeTab, setActiveTab] = useState("course");
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [theoryLessons, setTheoryLessons] = useState<TheoryLesson[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [videoLessons, setVideoLessons] = useState<VideoLesson[]>([]);

  const pageSize = 6;
  const fetchCourses = async () => {
    try {
      const getCourses = await getAllCourses(1, pageSize);
      setCourses(getCourses);
      console.log(getCourses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };
  const fetchLessons = async () => {
    try {
      const getLessons = await getAllLessons(1, pageSize);
      setLessons(getLessons);
    } catch (error) {
      console.error("Failed to fetch lessons:", error);
    }
  };
  const fetchLessonType = async () => {
    try {
      const getTheoryLessons = await getAllTheoryLessons(1, pageSize);
      const getExercises = await getAllExercises(1, pageSize);
      const getFlashcards = await getAllFlashcards(1, pageSize);
      const getVideoLessons = await getAllVideoLessons(1, pageSize);
      setTheoryLessons(getTheoryLessons);
      setExercises(getExercises);
      setFlashcards(getFlashcards);
      setVideoLessons(getVideoLessons);
    } catch (error) {
      console.error("Failed to fetch theory lessons:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
    fetchLessons();
    fetchLessonType();
  }, []);

  const getCourseTitleById = (courseID: string): string => {
    const course = courses.find((course) => course.courseID === courseID);
    return course ? course.title : "Unknown Course";
  };
  const getLessonTitleById = (lessonID: string): string => {
    const lesson = lessons.find((lesson) => lesson.lessonID === lessonID);
    return lesson ? lesson.title : "Unknown Lesson";
  };
  const renderTableContent = () => {
    switch (activeTab) {
      case "course":
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Topic</th>
                  <th>Level</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.courseID}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div
                            className="avatar avatar-image"
                            style={{
                              height: "30px",
                              minWidth: "30px",
                              maxWidth: "30px",
                            }}
                          >
                            <img src={course.url} alt="" />
                          </div>
                          <p className="m-l-10 m-b-0">{course.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>{course.topicName}</td>
                    <td>{course.difficultyLevel}</td>
                    <td>
                      {course.status === "Available" ? (
                        <>
                          <span className="badge badge-success badge-dot m-r-10"></span>
                          <span>Available</span>
                        </>
                      ) : (
                        <>
                          <span className="badge badge-danger badge-dot m-r-10"></span>
                          <span>No Available</span>
                        </>
                      )}
                    </td>
                    <td>{course.price}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                        <EditOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "lessionType":
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Lesson Name</th>
                  <th>Lesson Type</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {theoryLessons.map((theory) => (
                  <tr key={theory.theoryID}>
                    <td>{getLessonTitleById(theory.lessonID)}</td>
                    <td>Theory</td>
                    <td>{theory.createdAt}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                        <EditOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <EyeOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
                {exercises.map((exercise) => (
                  <tr key={exercise.exerciseID}>
                    <td>{getLessonTitleById(exercise.lessonID)}</td>
                    <td>Exercise</td>
                    <td>{exercise.createdAt}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                        <EditOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <EyeOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
                {flashcards.map((flashcard) => (
                  <tr key={flashcard.flashcardID}>
                    <td>{getLessonTitleById(flashcard.lessonID)}</td>
                    <td>Flashcard</td>
                    <td>{flashcard.createdAt}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                        <EditOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <EyeOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
                {videoLessons.map((videoLesson) => (
                  <tr key={videoLesson.videoID}>
                    <td>{getLessonTitleById(videoLesson.lessonID)}</td>
                    <td>Video</td>
                    <td>{videoLesson.createdAt}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                        <EditOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <EyeOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}              
              </tbody>
            </table>
          </div>
        );
      case "lesson":
        return (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Lesson Name</th>
                  <th>Course Name</th>
                  <th>Index</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map((lesson) => (
                  <tr key={lesson.lessonID}>
                    <td>{lesson.title}</td>
                    <td>{getCourseTitleById(lesson.courseID)}</td>
                    <td>{lesson.index}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                        <EditOutlined />
                      </button>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  const renderAddButton = () => {
    switch (activeTab) {
      case "course":
        return (
          <button
            className="btn btn-primary"
            onClick={() => setIsModalCreateCourseVisible(true)}
          >
            <PlusOutlined />
            <span className="m-l-5"> Add Course</span>
          </button>
        );
      case "lessionType":
        return (
          <>
            <button
              className="btn btn-primary m-r-10"
              onClick={() => setIsModalCreateVideoLessonVisible(true)}
            >
              <PlusOutlined />
              <span className="m-l-5"> Video Lesson</span>
            </button>
            <button
              className="btn btn-primary m-r-10"
              onClick={() => setIsModalCreateTheoryLessonVisible(true)}
            >
              <PlusOutlined />
              <span className="m-l-5"> Theory Lesson</span>
            </button>
            <button
              className="btn btn-primary m-r-10"
              onClick={() => setIsModalCreateExerciseVisible(true)}
            >
              <PlusOutlined />
              <span className="m-l-5"> Exercise</span>
            </button>
            <button
              className="btn btn-primary m-r-10"
              onClick={() => setIsModalCreateFlashcardVisible(true)}
            >
              <PlusOutlined />
              <span className="m-l-5"> Flashcard</span>
            </button>
          </>
        );
      case "lesson":
        return (
          <button
            className="btn btn-primary"
            onClick={() => setIsModalCreateLessonVisible(true)}
          >
            {" "}
            <PlusOutlined />
            <span className="m-l-5"> Add Lesson</span>
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "course" ? "active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab("course")}
                      >
                        Course
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "lesson" ? "active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab("lesson")}
                      >
                        Lesson
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "lessionType" ? "active" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab("lessionType")}
                      >
                        Lesson Type
                      </a>
                    </li>
                  </ul>
                  <div>{renderAddButton()}</div>
                </div>
                <div className="m-t-30">{renderTableContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Create Course"
        open={isModalCreateCourseVisible}
        onCancel={() => setIsModalCreateCourseVisible(false)}
        footer={null}
      >
        <CreateCourse
          onSuccess={() => {
            setIsModalCreateCourseVisible(false);
            fetchCourses();
          }}
        />
      </Modal>
      <Modal
        title="Create Lesson"
        open={isModalCreateLessonVisible}
        onCancel={() => setIsModalCreateLessonVisible(false)}
        footer={null}
      >
        <CreateLesson
          onSuccess={() => {
            setIsModalCreateLessonVisible(false);
            fetchLessons();
          }}
        />
      </Modal>
      <Modal
        title="Create Theory Lesson"
        open={isModalCreateTheoryLessonVisible}
        onCancel={() => setIsModalCreateTheoryLessonVisible(false)}
        footer={null}
      >
        <CreateTheoryLesson
          onSuccess={() => {
            setIsModalCreateTheoryLessonVisible(false);
            fetchLessonType();
          }}
        />
      </Modal>
      <Modal
        title="Create Flashcard"
        open={isModalCreateFlashcardVisible}
        onCancel={() => setIsModalCreateFlashcardVisible(false)}
        footer={null}
      >
        <CreateFlashcard
          onSuccess={() => {
            setIsModalCreateFlashcardVisible(false);
            fetchLessonType();
          }}
        />
      </Modal>
      <Modal
        title="Create Exercise"
        open={isModalCreateExerciseVisible}
        onCancel={() => setIsModalCreateExerciseVisible(false)}
        footer={null}
      >
        <CreateExercise
          onSuccess={() => {
            setIsModalCreateExerciseVisible(false);
            fetchLessonType();
          }}
        />
      </Modal>
      <Modal
        title="Create Video Lesson"
        open={isModalCreateVideoLessonVisible}
        onCancel={() => setIsModalCreateVideoLessonVisible(false)}
        footer={null}
      >
        <CreateVideoLesson
          onSuccess={() => {
            setIsModalCreateVideoLessonVisible(false);
            fetchLessonType();
          }}
        />
      </Modal>
    </div>
  );
};

export default CourseLayout;
