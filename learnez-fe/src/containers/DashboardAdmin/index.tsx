import {
  DollarOutlined,
  LineChartOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { handleAccessToken } from "../../services/auth.service";

const DashboardAdmin = () => {
  useEffect(() => {
    handleAccessToken();
  }, []);
  return (
    <div className="page-container">
      <div className="main-content">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <div className="avatar avatar-icon avatar-lg avatar-blue">
                    <DollarOutlined />
                  </div>
                  <div className="m-l-15">
                    <h2 className="m-b-0">$23,523</h2>
                    <p className="m-b-0 text-muted">Profit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <div className="avatar avatar-icon avatar-lg avatar-cyan">
                    <LineChartOutlined />
                  </div>
                  <div className="m-l-15">
                    <h2 className="m-b-0">+ 17.21%</h2>
                    <p className="m-b-0 text-muted">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <div className="avatar avatar-icon avatar-lg avatar-gold">
                    <ProfileOutlined />
                  </div>
                  <div className="m-l-15">
                    <h2 className="m-b-0">3,685</h2>
                    <p className="m-b-0 text-muted">Orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <div className="avatar avatar-icon avatar-lg avatar-purple">
                    <UserOutlined />
                  </div>
                  <div className="m-l-15">
                    <h2 className="m-b-0">1,832</h2>
                    <p className="m-b-0 text-muted">Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Latest Transactions</h5>
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
    </div>
  );
};

export default DashboardAdmin;
