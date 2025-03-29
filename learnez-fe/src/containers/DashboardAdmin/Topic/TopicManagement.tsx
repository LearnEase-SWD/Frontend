import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { getAllTopics } from "../../../services/topic.service";
import { useEffect, useState } from "react";
import { Topic } from "../../../models/Topic.model";
import { Modal, Pagination } from "antd";
import CreateTopic from "./CreateTopic";

const TopicManagement = () => {
  const [isModalCreateTopicVisible, setIsModalCreateTopicVisible] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const fetchTopics = async () => {
    try {
      const getTopics = await getAllTopics(1, 100);
      setTopics(getTopics);
    } catch (error) {
      console.error("Failed to fetch topics:", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const paginatedTopics = topics.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="page-container">
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Topic Management</h5>
                  <div>
                    <button className="btn btn-primary" onClick={() => setIsModalCreateTopicVisible(true)}>
                      <PlusOutlined />
                      <span className="m-l-5">New Topic</span>
                    </button>
                  </div>
                </div>
                <div className="m-t-30">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Topic ID</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedTopics.map((topic) => (
                          <tr key={topic.topicId}>
                            <td>{topic.topicId}</td>
                            <td>{topic.name}</td>
                            <td>
                              <button className="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                <EditOutlined />
                              </button>
                              <button className="btn btn-icon btn-hover btn-sm btn-rounded">
                                <DeleteOutlined />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={topics.length}
                    onChange={(page) => setCurrentPage(page)}
                    className="m-t-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Create Topic"
        open={isModalCreateTopicVisible}
        onCancel={() => setIsModalCreateTopicVisible(false)}
        footer={null}
      >
        <CreateTopic
          onSuccess={() => {
            setIsModalCreateTopicVisible(false);
            fetchTopics();
          }}
        />
      </Modal>
    </div>
  );
};

export default TopicManagement;