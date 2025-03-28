import { ArrowRightOutlined, PlusOutlined, SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Modal, Upload, UploadFile, UploadProps } from "antd";
import React, { useState } from "react";
import { API_UPLOAD_FILE } from "../../../constants/upload";


const TopicManagement = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  
  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);

    if (newFileList.length > 0 && newFileList[0].status === "done") {
      const uploadedImageUrl = newFileList[0].response?.secure_url;
      console.log("image url:", uploadedImageUrl);
    } else if (newFileList.length === 0 || newFileList[0].status === "error") {
      console.error("Failed to upload image");
    }
  };
  return (
    <div className="page-container">
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Topic Management</h5>
                  <div className="d-flex align-items-center col-md-3 m-b-10">
                    <div className="input-affix m-r-10">
                      <span className="prefix-icon">
                        <SearchOutlined />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button className="btn btn-icon btn-default">
                        <ArrowRightOutlined />
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      onClick={handleOpenModal}
                    >
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
                          <th>ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#5331</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div
                                  className="avatar avatar-image"
                                  style={{
                                    height: "30px",
                                    minWidth: "30px",
                                    maxWidth: "30px",
                                  }}
                                >
                                  <img
                                    src="assets/images/avatars/thumb-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <h6 className="m-l-10 m-b-0">Erin Gonzales</h6>
                              </div>
                            </div>
                          </td>
                          <td>8 May 2019</td>
                          <td>$137.00</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="badge badge-success badge-dot m-r-10"></span>
                              <span>Approved</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#5375</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div
                                  className="avatar avatar-image"
                                  style={{
                                    height: "30px",
                                    minWidth: "30px",
                                    maxWidth: "30px",
                                  }}
                                >
                                  <img
                                    src="assets/images/avatars/thumb-2.jpg"
                                    alt=""
                                  />
                                </div>
                                <h6 className="m-l-10 m-b-0">Darryl Day</h6>
                              </div>
                            </div>
                          </td>
                          <td>6 May 2019</td>
                          <td>$322.00</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="badge badge-success badge-dot m-r-10"></span>
                              <span>Approved</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#5762</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div
                                  className="avatar avatar-image"
                                  style={{
                                    height: "30px",
                                    minWidth: "30px",
                                    maxWidth: "30px",
                                  }}
                                >
                                  <img
                                    src="assets/images/avatars/thumb-3.jpg"
                                    alt=""
                                  />
                                </div>
                                <h6 className="m-l-10 m-b-0">
                                  Marshall Nichols
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>1 May 2019</td>
                          <td>$543.00</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="badge badge-success badge-dot m-r-10"></span>
                              <span>Approved</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#5865</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div
                                  className="avatar avatar-image"
                                  style={{
                                    height: "30px",
                                    minWidth: "30px",
                                    maxWidth: "30px",
                                  }}
                                >
                                  <img
                                    src="assets/images/avatars/thumb-4.jpg"
                                    alt=""
                                  />
                                </div>
                                <h6 className="m-l-10 m-b-0">
                                  Virgil Gonzales
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>28 April 2019</td>
                          <td>$876.00</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="badge badge-primary badge-dot m-r-10"></span>
                              <span>Pending</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#5213</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div
                                  className="avatar avatar-image"
                                  style={{
                                    height: "30px",
                                    minWidth: "30px",
                                    maxWidth: "30px",
                                  }}
                                >
                                  <img
                                    src="assets/images/avatars/thumb-5.jpg"
                                    alt=""
                                  />
                                </div>
                                <h6 className="m-l-10 m-b-0">Nicole Wyne</h6>
                              </div>
                            </div>
                          </td>
                          <td>28 April 2019</td>
                          <td>$241.00</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="badge badge-success badge-dot m-r-10"></span>
                              <span>Approved</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Upload New Topic Image"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
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
      </Modal>
    </div>
  );
};

export default TopicManagement;
