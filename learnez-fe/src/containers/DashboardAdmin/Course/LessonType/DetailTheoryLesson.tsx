import React, { useEffect} from "react";
import { Form, Input } from "antd";

import { getTheoryById } from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";

type DetailTheoryLessonFormProps = {
  lessons?: Lesson[];
  theoryID?: string;
};
const DetailTheoryLesson: React.FC<DetailTheoryLessonFormProps> = ({
  lessons,
  theoryID,
}) => {
  const [form] = Form.useForm();
  const fetchTheoryById = async () => {
    try {
      if (theoryID) {
        const theory = await getTheoryById(theoryID);
        form.setFieldsValue({
          lessonID: getLessonTitleById(theory.lessonID),
          content: theory.content,
          examples: theory.examples,
        });
      }
    } catch (error) {
      console.error("Error fetching theory lesson details:", error);
    }
  };

  useEffect(() => {
    fetchTheoryById();
  }, [theoryID]);

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

      <Form.Item label="Content" name="content">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Example" name="examples">
        <Input readOnly />
      </Form.Item>
    </Form>
  );
};

export default DetailTheoryLesson;
