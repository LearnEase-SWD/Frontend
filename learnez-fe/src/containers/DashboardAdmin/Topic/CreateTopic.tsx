import React from "react";
import { Form, Input, Button } from "antd";
import { createTopic } from "../../../services/topic.service";
import { handleNotify } from "../../../utils/handleNotify";
type TopicFormProps = {
  onSuccess?: () => void;
};

const CreateTopic: React.FC<TopicFormProps> = ({ onSuccess }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: {name: string;}) => {
    if (!values.name || values.name.trim() === "") {
        console.error("Topic name is empty");
        return;
      }
    try {
        console.log(values);
      const res = await createTopic(values.name);
      if (res) {
        handleNotify("Topic created successfully", "");
        onSuccess && onSuccess();
        form.resetFields();
      }
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter the topic name" }]}
      >
        <Input placeholder="Enter topic name" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Create Topic
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTopic;
