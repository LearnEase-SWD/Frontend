import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;
import { createFlashcard, getAllLessons } from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";
import { handleNotify } from "../../../../utils/handleNotify";

type FlashcardLessonFormProps = {
  onSuccess?: () => void;
};
const CreateFlashcard: React.FC<FlashcardLessonFormProps> = ({ onSuccess }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [form] = Form.useForm();

  const onFinish = async (values: {
    lessonID: string;
    front: string;
    back: string;
    pronunciationAudioURL: null;
  }) => {
    try {
      console.log(values);
        const res = await createFlashcard(values);
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
        label="Front"
        name="front"
        rules={[{ required: true, message: "Please enter the front" }]}
      >
        <Input placeholder="Enter front" />
      </Form.Item>

      <Form.Item
        label="Back"
        name="back"
        rules={[{ required: true, message: "Please enter the back" }]}
      >
        <Input placeholder="Enter back" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Theory Lesson
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateFlashcard;
