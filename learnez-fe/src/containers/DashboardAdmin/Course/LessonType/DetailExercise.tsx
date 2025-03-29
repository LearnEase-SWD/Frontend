import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { getExerciseById } from "../../../../services/lesson.service";
import { Lesson } from "../../../../models/Lesson.model";

type DetailExerciseLessonFormProps = {
  lessons?: Lesson[];
  exerciseID?: string;
};
const DetailExercise: React.FC<DetailExerciseLessonFormProps> = ({
  lessons,
  exerciseID,
}) => {
  const [form] = Form.useForm();

  const fetchExerciseById = async () => {
    try {
      if (exerciseID) {
        const exercise = await getExerciseById(exerciseID);
        console.log(exercise);
        form.setFieldsValue({
          lessonID: getLessonTitleById(exercise.lessonID),
          exerciseType: exercise.exerciseType,
          question: exercise.question,
          lessonType: exercise.lessonType,
          answerOptions: exercise.answerOptions,
          correctAnswer: exercise.correctAnswer,
        });
      }
    } catch (error) {
      console.error("Error fetching theory lesson details:", error);
    }
  };

  useEffect(() => {
    fetchExerciseById();
  }, [exerciseID]);

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

      <Form.Item label="Type" name="exerciseType">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Lesson Type" name="lessonType">
        <Input readOnly />
      </Form.Item>

      <Form.Item label="Question" name="question">
        <Input readOnly />
      </Form.Item>
      <Form.Item label="Answer Option" name="answerOptions">
        <Input readOnly />
      </Form.Item>
      <Form.Item label="Correct Answer" name="correctAnswer">
        <Input readOnly />
      </Form.Item>
    </Form>
  );
};

export default DetailExercise;
