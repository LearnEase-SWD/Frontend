import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
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
  AllLessonType,
  Exercise,
  Flashcard,
  Lesson,
  TheoryLesson,
  VideoLesson,
} from "../../../models/Lesson.model";
import { Modal, Pagination } from "antd";
import CreateCourse from "./CreateCourse";
import CreateLesson from "./CreateLesson";
import CreateTheoryLesson from "./LessonType/CreateTheoryLesson";
import CreateFlashcard from "./LessonType/CreateFlashcard";
import CreateExercise from "./LessonType/CreateExercise";
import CreateVideoLesson from "./LessonType/CreateVideoLesson";
import DetailTheoryLesson from "./LessonType/DetailTheoryLesson";
import DetailExercise from "./LessonType/DetailExercise";
import DetailFlashcard from "./LessonType/DetailFlashcard";
import DetailVideoLesson from "./LessonType/DetailVideoLesson";

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

  const [
    isModalDetailTheoryLessonVisible,
    setIsModalDetailTheoryLessonVisible,
  ] = useState(false);
  const [isModalDetailExerciseVisible, setIsModalDetailExerciseVisible] =
    useState(false);
  const [isModalDetailFlashcardVisible, setIsModalDetailFlashcardVisible] =
    useState(false);
  const [isModalDetailVideoLessonVisible, setIsModalDetailVideoLessonVisible] =
    useState(false);

  const [activeTab, setActiveTab] = useState("course");
  const [courses, setCourses] = useState<Course[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [allLessonTypes, setAllLessonTypes] = useState<AllLessonType[]>([]);

  const [selectedTheoryID, setSelectedTheoryID] = useState<string | null>(null);
  const [selectedExerciseID, setSelectedExerciseID] = useState<string | null>(
    null
  );
  const [selectedFlashcardID, setSelectedFlashcardID] = useState<string | null>(
    null
  );
  const [selectedVideoLessonID, setSelectedVideoLessonID] = useState<
    string | null
  >(null);

  const [currentCoursePage, setCurrentCoursePage] = useState(1);
  const [currentLessonPage, setCurrentLessonPage] = useState(1);
  const [currentLessonTypePage, setCurrentLessonTypePage] = useState(1);

  const pageSize = 6;

  const fetchCourses = async () => {
    try {
      const getCourses = await getAllCourses(1, 100);
      setCourses(getCourses);
      console.log(getCourses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };
  const fetchLessons = async () => {
    try {
      const getLessons = await getAllLessons(1, 100);
      setLessons(getLessons);
    } catch (error) {
      console.error("Failed to fetch lessons:", error);
    }
  };
  const fetchLessonType = async () => {
    try {
      const lessonTypes = await Promise.all([
        getAllTheoryLessons(1, 100).then((data) => ({ lessonType: 1, data })),
        getAllExercises(1, 100).then((data) => ({ lessonType: 2, data })),
        getAllFlashcards(1, 100).then((data) => ({ lessonType: 3, data })),
        getAllVideoLessons(1, 100).then((data) => ({ lessonType: 0, data })),
      ]);

      setAllLessonTypes(lessonTypes.flatMap((type) => type.data));
    } catch (error) {
      console.error("Failed to fetch lessons:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
    fetchLessons();
    fetchLessonType();
  }, []);

  useEffect(() => {
    console.log("All Lesson Types:", allLessonTypes);
  }, [allLessonTypes]);
  const getCourseTitleById = (courseID: string): string => {
    const course = courses.find((course) => course.courseID === courseID);
    return course ? course.title : "Unknown Course";
  };
  const getLessonTitleById = (lessonID: string): string => {
    const lesson = lessons.find((lesson) => lesson.lessonID === lessonID);
    return lesson ? lesson.title : "Unknown Lesson";
  };
  const paginatedCourses = courses.slice(
    (currentCoursePage - 1) * pageSize,
    currentCoursePage * pageSize
  );
  const paginatedLessons = lessons.slice(
    (currentLessonPage - 1) * pageSize,
    currentLessonPage * pageSize
  );
  const paginatedLessonTypes = useMemo(() => {
    const startIndex = (currentLessonTypePage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, allLessonTypes.length);
    console.log("Start Index:", startIndex, "End Index:", endIndex);
    console.log(
      "Current Page:",
      currentLessonTypePage,
      "Total Lessons:",
      allLessonTypes.length
    );
    return allLessonTypes.slice(startIndex, endIndex);
  }, [allLessonTypes, currentLessonTypePage]);

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
                {paginatedCourses.map((course) => (
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
            <Pagination
              current={currentCoursePage}
              pageSize={pageSize}
              total={courses.length}
              onChange={(page) => setCurrentCoursePage(page)}
              className="m-t-20"
            />
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
                {paginatedLessonTypes.map((lesson, index) => (
                  <tr key={`${lesson.lessonID}-${index}`}>
                    <td>{getLessonTitleById(lesson.lessonID)}</td>
                    <td>
                      {lesson.lessonType === 0
                        ? "Video"
                        : lesson.lessonType === 1
                        ? "Theory"
                        : lesson.lessonType === 2
                        ? "Exercise"
                        : "Flashcard"}
                    </td>
                    <td>{lesson.createdAt}</td>
                    <td>
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <EditOutlined />
                      </button>
                      {lesson.lessonType === 0 ? (
                        <button
                          className="btn btn-icon btn-hover btn-sm btn-rounded"
                          onClick={() => {
                            setSelectedVideoLessonID(lesson.videoID);
                            setIsModalDetailVideoLessonVisible(true);
                          }}
                        >
                          <EyeOutlined />
                        </button>
                      ) : lesson.lessonType === 1 ? (
                        <button
                          className="btn btn-icon btn-hover btn-sm btn-rounded"
                          onClick={() => {
                            setSelectedTheoryID(lesson.theoryID);
                            setIsModalDetailTheoryLessonVisible(true);
                          }}
                        >
                          <EyeOutlined />
                        </button>
                      ) : lesson.lessonType === 2 ? (
                        <button
                          className="btn btn-icon btn-hover btn-sm btn-rounded"
                          onClick={() => {
                            setSelectedExerciseID(lesson.exerciseID);
                            setIsModalDetailExerciseVisible(true);
                          }}
                        >
                          <EyeOutlined />
                        </button>
                      ) : (
                        <button
                          className="btn btn-icon btn-hover btn-sm btn-rounded"
                          onClick={() => {
                            setSelectedFlashcardID(lesson.flashcardID);
                            setIsModalDetailFlashcardVisible(true);
                          }}
                        >
                          <EyeOutlined />
                        </button>
                      )}
                      <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              current={currentLessonTypePage}
              pageSize={pageSize}
              total={allLessonTypes.length}
              onChange={(page) => {
                console.log("Changing to page:", page);
                setCurrentLessonTypePage(page);
              }}
              className="m-t-20"
            />
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
                {paginatedLessons.map((lesson) => (
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
            <Pagination
              current={currentLessonPage}
              pageSize={pageSize}
              total={courses.length}
              onChange={(page) => setCurrentLessonPage(page)}
              className="m-t-20"
            />
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
        title="Detail Theory Lesson"
        open={isModalDetailTheoryLessonVisible}
        onCancel={() => {
          setIsModalDetailTheoryLessonVisible(false);
          setSelectedTheoryID(null); // Reset the selected theoryID when closing the modal
        }}
        footer={null}
      >
        {selectedTheoryID && (
          <DetailTheoryLesson
            lessons={lessons}
            theoryID={selectedTheoryID} // Pass the selected theoryID
          />
        )}
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
        title="Detail Flashcard"
        open={isModalDetailFlashcardVisible}
        onCancel={() => {
          setIsModalDetailFlashcardVisible(false);
          setSelectedFlashcardID(null); // Reset the selected theoryID when closing the modal
        }}
        footer={null}
      >
        {selectedFlashcardID && (
          <DetailFlashcard
            lessons={lessons}
            flashcardID={selectedFlashcardID} // Pass the selected theoryID
          />
        )}
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
        title="Detail Exercise"
        open={isModalDetailExerciseVisible}
        onCancel={() => {
          setIsModalDetailExerciseVisible(false);
          setSelectedExerciseID(null); // Reset the selected theoryID when closing the modal
        }}
        footer={null}
      >
        {selectedExerciseID && (
          <DetailExercise
            lessons={lessons}
            exerciseID={selectedExerciseID} // Pass the selected theoryID
          />
        )}
      </Modal>
      <Modal
        title="Detail Video Lesson"
        open={isModalDetailVideoLessonVisible}
        onCancel={() => {
          setIsModalDetailVideoLessonVisible(false);
          setSelectedVideoLessonID(null); // Reset the selected theoryID when closing the modal
        }}
        footer={null}
      >
        {selectedVideoLessonID && (
          <DetailVideoLesson
            lessons={lessons}
            videoID={selectedVideoLessonID} // Pass the selected theoryID
          />
        )}
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
