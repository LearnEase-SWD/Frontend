import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  UploadFile,
  UploadProps,
  Upload,
  Row,
  Col,
} from "antd";
import { createCourse } from "../../../services/course.service";
import { getAllTopics } from "../../../services/topic.service";
import { Topic } from "../../../models/Topic.model";
import { handleNotify } from "../../../utils/handleNotify";
import { API_UPLOAD_FILE } from "../../../constants/upload";
import { PlusOutlined } from "@ant-design/icons";
type CourseFormProps = {
  onSuccess?: () => void;
};
const { Option } = Select;

const CreateCourse: React.FC<CourseFormProps> = ({ onSuccess }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);

    if (newFileList.length > 0 && newFileList[0].status === "done") {
      const imageUrl = newFileList[0].response?.secure_url;
      console.log("image url:", imageUrl);
      setUploadedImageUrl(imageUrl);
    } else if (newFileList.length === 0 || newFileList[0].status === "error") {
      console.error("Failed to upload image");
    }
  };
  const [topics, setTopics] = useState<Topic[]>([]);
  const [form] = Form.useForm();

  const onFinish = async (values: {
    topicID: string;
    title: string;
    price: number;
    totalLessons: number;
    description: string;
    url: string;
    difficultyLevel: string;
    status: string
  }) => {
    try {
      if (!uploadedImageUrl) {
        handleNotify("Please upload an image before submitting", "error");
        return;
      }
      const courseData = {
        ...values,
        url: uploadedImageUrl, // Assign the uploaded image URL to the `url` field
      };
      console.log(courseData);
      const res = await createCourse(courseData);
      if (res) {
        handleNotify("Course created successfully", "");
        onSuccess && onSuccess();
        form.resetFields();
        setFileList([]); // Reset the file list after successful submission
        setUploadedImageUrl(null);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        // Fetch topics from the API and set them in the form
        const topics = await getAllTopics(1, 100);
        setTopics(topics);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        price: 0,
        totalLessons: 0,
      }}
    >
      <Form.Item
        label="Topic"
        name="topicID"
        rules={[{ required: true, message: "Topic ID is required" }]}
      >
        <Select placeholder="Select a topic">
          {topics.map((topic) => (
            <Option key={topic.topicId} value={topic.topicId}>
              {topic.name || "Unnamed Topic"} {/* Display topic name */}
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

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Difficulty Level"
            name="difficultyLevel"
            rules={[
              { required: true, message: "Please select the difficulty level" },
            ]}
          >
            <Select placeholder="Select difficulty level">
              <Option value="Beginner">Beginner</Option>
              <Option value="Intermediate">Intermediate</Option>
              <Option value="Advanced">Advanced</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              { required: true, message: "Please select the status" },
            ]}
          >
            <Select placeholder="Select status ">
              <Option value="Available">Available</Option>
              <Option value="No Available">No Available</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please enter the content" }]}
      >
        <Input.TextArea
          placeholder="Enter the content for the theory lesson"
          rows={2}
        />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please enter the course price" },
            ]}
          >
            <Input type="number" placeholder="Enter course price" min={0} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Total Lessons"
            name="totalLessons"
            rules={[
              { required: true, message: "Please enter the total lessons" },
            ]}
          >
            <Input type="number" placeholder="Enter total lessons" min={1} />
          </Form.Item>
        </Col>
      </Row>

      <Upload
        action={API_UPLOAD_FILE}
        listType="picture-card"
        onChange={handleImageChange}
        fileList={fileList}
        maxCount={1}
      >
        {fileList.length < 1 && (
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div>Upload</div>
          </button>
        )}
      </Upload>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Course
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCourse;
