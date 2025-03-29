import {
  ArrowRightOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useEffect, useState } from "react";
import { User } from "../../../models/User.model";
import { getAllUsers } from "../../../services/user.service";
import { handleAccessToken } from "../../../services/auth.service";
import { Pagination } from "antd";

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const getUsers = await getAllUsers(1, 100); // Fetching all users initially
        setUsers(getUsers);
        setFilteredUsers(getUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
    handleAccessToken();
  }, []);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const paginatedUsers = filteredUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
                      <button className="btn btn-icon btn-default" onClick={handleSearch}>
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
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedUsers.map((user) => (
                            <tr key={user.userId}>
                              <td>{user.userName}</td>
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
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={filteredUsers.length}
                      onChange={(page) => setCurrentPage(page)}
                      className="m-t-20"
                    />
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
