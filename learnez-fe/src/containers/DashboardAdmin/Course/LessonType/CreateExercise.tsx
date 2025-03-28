import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;
import {
  createExercise,
  getAllLessons,
} from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";
import { handleNotify } from "../../../../utils/handleNotify";

type ExerciseLessonFormProps = {
  onSuccess?: () => void;
};
const CreateExercise: React.FC<ExerciseLessonFormProps> = ({ onSuccess }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [form] = Form.useForm();

  const onFinish = async (values: {
    lessonID: string;
    type: string;
    question: string;
    answerOptions: string;
    correctAnswer: string;
  }) => {
    try {
      console.log(values);
      const res = await createExercise(values);
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
        const lessons = await getAllLessons(1, 100);
        setLessons(lessons);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Lesson"
        name="lessonID"
        rules={[{ required: true, message: "Please select a lesson" }]}
      >
        <Select placeholder="Select a lesson">
          {lessons.map((lesson) => (
            <Option key={lesson.lessonID} value={lesson.lessonID}>
              {lesson.title}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: "Please select the exercise type" }]}
      >
        <Select placeholder="Select type">
          <Option value="Điền từ">Điền từ</Option>
          <Option value="Trắc nghiệm">Trắc nghiệm</Option>
          <Option value="Sắp xếp câu">Sắp xếp câu</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Question"
        name="question"
        rules={[{ required: true, message: "Please enter the question" }]}
      >
        <Input placeholder="Enter the question" />
      </Form.Item>

      <Form.Item
        label="Asnwer"
        name="answerOptions"
        rules={[{ required: true, message: "Please enter the asnwer" }]}
      >
        <Input placeholder="Enter the asnwer" />
      </Form.Item>

      <Form.Item
        label="Correct Answer"
        name="correctAnswer"
        rules={[{ required: true, message: "Please enter the correct answer" }]}
      >
        <Input placeholder="Enter the correct answer" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Exercise
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateExercise;
