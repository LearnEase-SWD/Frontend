import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  TimePicker,
  UploadFile,
  UploadProps,
  Upload,
} from "antd";

const { Option } = Select;
import {
  createVideoLesson,
  getAllLessons,
} from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";
import { handleNotify } from "../../../../utils/handleNotify";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import { API_UPLOAD_FILE } from "../../../../constants/upload";

type VideoLessonFormProps = {
  onSuccess?: () => void;
};
const CreateVideoLesson: React.FC<VideoLessonFormProps> = ({ onSuccess }) => {
  const [videoFileList, setVideoFileList] = useState<UploadFile[]>([]);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [form] = Form.useForm();

  const handleVideoChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setVideoFileList(newFileList || []);
    if (newFileList.length > 0 && newFileList[0].status === "done") {
      const videoUrl = newFileList[0].response?.secure_url;
      console.log("video url:", videoUrl);
      setUploadedVideoUrl(videoUrl);
    } else {
      console.error("Failed to upload image");
    }
  };
  const onFinish = async (values: {
    lessonID: string;
    videoURL: string;
    transcript: string;
    duration: string;
  }) => {
    try {
      if (!uploadedVideoUrl) {
        handleNotify("Please upload an image before submitting", "error");
        return;
      }
      const courseData = {
        ...values,
        videoURL: uploadedVideoUrl,
      };
      console.log(courseData);
      const res = await createVideoLesson(values);
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
        label="Transcript"
        name="transcript"
        rules={[{ required: true, message: "Please enter the transcript" }]}
      >
        <Input.TextArea placeholder="Enter transcript" rows={4} />
      </Form.Item>

      <Form.Item
        label="Course Video"
        name="video_url"
        rules={[{ required: true, message: "Please upload a demo video" }]}
      >
        <Upload
          action={API_UPLOAD_FILE}
          accept="video/*"
          listType="picture-card"
          fileList={videoFileList}
          onChange={handleVideoChange}
          maxCount={1}
          beforeUpload={(file) => {
            const isSupportedFormat = [
              "video/mp4",
              "video/webm",
              "video/ogg",
              "video/mov",
            ].includes(file.type);
            if (!isSupportedFormat) {
              handleNotify(
                "File format not supported",
                "You can only upload MP4, WebM, MOV or OGG video files!",
                "error"
              );
            }
            return isSupportedFormat || Upload.LIST_IGNORE;
          }}
        >
          {videoFileList.length >= 1 ? null : (
            <div>
              <PlusOutlined />
              <div>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Form.Item
        label="Duration"
        name="duration"
        rules={[{ required: true, message: "Please select the duration" }]}
      >
        <Input placeholder="Enter duration" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Video Lesson
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateVideoLesson;
