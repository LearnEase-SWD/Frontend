import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
import { getAllCourses } from "../../../services/course.service";
import { handleNotify } from "../../../utils/handleNotify";
import { Course } from "../../../models/Course.model";
import { createLesson } from "../../../services/lesson.service";
type LessonFormProps = {
  onSuccess?: () => void;
};
const { Option } = Select;

const CreateLesson: React.FC<LessonFormProps> = ({ onSuccess }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form] = Form.useForm();

  const onFinish = async (values: {
    courseID: string;
    title: string;
    lessonType: number;
    index: number;
  }) => {
    try {
      console.log(values);
      const res = await createLesson(values);
      if (res) {
        handleNotify("Lesson created successfully", "");
        onSuccess && onSuccess();
        form.resetFields();
      }
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch topics from the API and set them in the form
        const courses = await getAllCourses(1, 100);
        setCourses(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        index: 0,
      }}
    >
      <Form.Item
        label="Course"
        name="courseID"
        rules={[{ required: true, message: "Please select a topic" }]}
      >
        <Select placeholder="Select a topic">
          {courses.map((course) => (
            <Option key={course.courseID} value={course.courseID}>
              {course.title} {/* Display course title */}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter the course title" }]}
      >
        <Input placeholder="Enter course title" />
      </Form.Item>

      <Form.Item
        label="Lesson Type"
        name="lessonType"
        rules={[{ required: true, message: "Please select the lesson type" }]}
      >
        <Select placeholder="Select difficulty level">
          <Option value={0}>Video</Option>
          <Option value={1}>Theory</Option>
          <Option value={2}>Exercise</Option>
          <Option value={3}>Conversation</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Index"
        name="index"
        rules={[{ required: true, message: "Please enter the lesson index" }]}
      >
        <InputNumber placeholder="Enter lesson index" min={0} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Lesson
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateLesson;
