import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { getFlashcardById } from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";

type DetailFlashcardFormProps = {
  lessons?: Lesson[];
  flashcardID?: string;
};
const DetailFlashcard: React.FC<DetailFlashcardFormProps> = ({
  lessons,
  flashcardID,
}) => {
  const [form] = Form.useForm();

  const fetchFlashcardById = async () => {
    try {
      if (flashcardID) {
        const flashCard = await getFlashcardById(flashcardID);
        form.setFieldsValue({
          lessonID: getLessonTitleById(flashCard.lessonID),
          front: flashCard.front,
          back: flashCard.back,
        });
      }
    } catch (error) {
      console.error("Error fetching theory lesson details:", error);
    }
  };

  useEffect(() => {
    fetchFlashcardById();
  }, [flashcardID]);

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

      <Form.Item label="Front" name="front">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Back" name="back">
        <Input readOnly />
      </Form.Item>
    </Form>
  );
};

export default DetailFlashcard;
