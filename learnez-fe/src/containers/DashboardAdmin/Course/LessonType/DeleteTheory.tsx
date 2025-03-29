import React from "react";
import { message, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { deleteTheoryLesson } from "../../../../services/lesson.service";

interface DeleteModalProps {
  theoryID?: string;
  open?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  theoryID,
  open,
  onConfirm,
  onCancel
}) => {
    const handleDelete = async () => {
        if (!theoryID) {
          message.error("No theory ID provided.");
          return;
        }
    
        try {
          await deleteTheoryLesson(theoryID); // Call the API to delete the theory
          message.success("Theory deleted successfully.");
          onConfirm(); // Call the onConfirm handler to refresh or close the modal
        } catch (error) {
          message.error("Failed to delete the theory.");
          console.error(error);
        }
      };
  return (
    <Modal
      title={`Delete Theory`}
      open={open}
      onOk={handleDelete}
      onCancel={onCancel}
      okText="Delete"
      okButtonProps={{ danger: true }}
      cancelText="Cancel"
    >
      <div className="d-flex align-items-center">
        <ExclamationCircleOutlined
          style={{ fontSize: "24px", color: "#faad14", marginRight: "10px" }}
        />
        <span>Are you sure you want to delete ?</span>
      </div>
    </Modal>
  );
};

export default DeleteModal;
