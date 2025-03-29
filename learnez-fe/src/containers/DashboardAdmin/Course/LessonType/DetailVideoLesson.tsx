import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { getVideoLessonById } from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";

type DetailVideoLessonLessonFormProps = {
  lessons?: Lesson[];
  videoID?: string;
};
const DetailVideoLesson: React.FC<DetailVideoLessonLessonFormProps> = ({
  lessons,
  videoID,
}) => {
  const [form] = Form.useForm();

  const fetchVideoLessonById = async () => {
    try {
      if (videoID) {
        const video = await getVideoLessonById(videoID);
        form.setFieldsValue({
          lessonID: getLessonTitleById(video.lessonID),
          videoURL: video.videoURL,
          duration: video.duration,
        });
      }
    } catch (error) {
      console.error("Error fetching theory lesson details:", error);
    }
  };

  useEffect(() => {
    fetchVideoLessonById();
  }, [videoID]);

  const getLessonTitleById = (lessonID: string): string => {
    if (lessons) {
      const lesson = lessons.find((lesson) => lesson.lessonID === lessonID);
      if (lesson) {
        return lesson.title || "Unknown Lesson";
      }
    }
    return "Unknown Lesson";
  };
  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Lesson Name" name="lessonID">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Video">
        <video
          controls
          style={{ width: "100%", maxHeight: "400px" }}
          src={form.getFieldValue("videoURL")}
        >
          Your browser does not support the video tag.
        </video>
      </Form.Item>

      <Form.Item label="Duration" name="duration">
        <Input readOnly />
      </Form.Item>
    </Form>
  );
};

export default DetailVideoLesson;
