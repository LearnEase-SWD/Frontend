import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;
import { createTheoryLesson, getAllLessons } from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";
import { handleNotify } from "../../../../utils/handleNotify";

type TheoryLessonFormProps = {
  onSuccess?: () => void;
};
const CreateTheoryLesson: React.FC<TheoryLessonFormProps> = ({ onSuccess }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [form] = Form.useForm();

  const onFinish = async (values: {
    lessonID: string;
    content: string;
    examples: string;
  }) => {
    try {
      console.log(values);
        const res = await createTheoryLesson(values);
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
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
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
        label="Content"
        name="content"
        rules={[{ required: true, message: "Please enter the content" }]}
      >
        <Input.TextArea
          placeholder="Enter the content for the theory lesson"
          rows={4}
        />
      </Form.Item>

      <Form.Item
        label="Example"
        name="examples"
        rules={[{ required: true, message: "Please provide an example" }]}
      >
        <Input.TextArea
          placeholder="Provide an example for the theory lesson"
          rows={4}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Theory Lesson
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTheoryLesson;
