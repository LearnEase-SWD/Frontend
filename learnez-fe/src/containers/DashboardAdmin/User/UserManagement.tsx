import {
  ArrowRightOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useEffect, useState } from "react";
import { User } from "../../../models/User.model";
import { getAllUsers } from "../../../services/user.service";
const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const pageSize = 6;
  const pageIndex = 1;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const getUsers = await getAllUsers(pageIndex, pageSize);
        setUsers(getUsers); 
        setFilteredUsers(getUsers);
        console.log(getUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="page-container">
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>User Management</h5>
                  <div className="d-flex align-items-center col-md-3 m-b-10">
                    <div className="input-affix m-r-10">
                      <span className="prefix-icon">
                        <SearchOutlined />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button
                        className="btn btn-icon btn-default"
                        onClick={handleSearch}
                      >
                        <ArrowRightOutlined />
                      </button>
                    </div>
                  </div>
                </div>
                <div id="mail-list" className="mail-content">
                  <div className="m-t-30">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredUsers.map((user) => (
                            <tr key={user.userId}>
                              <td>{user.userId}</td>
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
                                      <iframe
                                        src={user?.imageUrl || ""}
                                        title="User Avatar"
                                      ></iframe>
                                    </div>
                                    <h6 className="m-l-10 m-b-0">
                                      {user.userName}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>{user.email}</td>
                              <td>{user.role === 1 ? "User" : "Admin"}</td>
                              <td>
                                {user.isActive ? (
                                  <>
                                    <span className="badge badge-success badge-dot m-r-10"></span>
                                    <span>Active</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="badge badge-danger badge-dot m-r-10"></span>
                                    <span>Inactive</span>
                                  </>
                                )}
                              </td>
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
                  </div>
                  <div className="m-t-20 text-right">
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
