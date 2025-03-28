import {
  BellOutlined,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useEffect, useState } from "react";
import { User } from "../../../models/User.model";
import { getUserbyEmail } from "../../../services/user.service";
import { handleLogout } from "../../../services/auth.service";
import debounce from "lodash/debounce";
interface HeaderMainProps {
  isFolded: boolean;
  toggleSidebar: () => void;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ isFolded, toggleSidebar }) => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    const fetchUser = debounce(async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
          const userInfo = await getUserbyEmail(userEmail);
          setUser(userInfo);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }, 300); // Debounce with a 300ms delay

    fetchUser();

    return () => {
      (fetchUser as any).cancel(); // Cleanup debounce on unmount
    };
  }, []);

  return (
    <div className={`header-main ${isFolded ? "is-folded" : ""}`}>
      <div className="header">
        <div className={`logo ${isFolded ? "is-folded" : ""}`}>
          <a href="/dashboard">
            <img src={"/static/images/logo-web-admin.png"} alt="Logo" />
            <img
              className="logo-fold"
              src={"/static/images/icon-web.png"}
              style={{ height: "65px", width: "65px" }}
              alt="Logo"
            />
          </a>
        </div>
        <div className="nav-wrap">
          <ul className="nav-left">
            <li className="desktop-toggle">
              <a onTouchStart={toggleSidebar} onClick={toggleSidebar}>
                {isFolded ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a>
            </li>
            <li className="mobile-toggle">
              <a onTouchStart={toggleSidebar} onClick={toggleSidebar}>
                {isFolded ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a>
            </li>
          </ul>
          <ul className="nav-right">
            <li className="dropdown dropdown-animated scale-left">
              <a href="javascript:void(0);" data-toggle="dropdown">
                <BellOutlined />
              </a>
              <div className="dropdown-menu pop-notification">
                <div className="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
                  <p className="text-dark font-weight-semibold m-b-0">
                    <BellOutlined />
                    <span className="m-l-10">Notification</span>
                  </p>
                  <a
                    className="btn-sm btn-default btn"
                    href="javascript:void(0);"
                  >
                    <small>View All</small>
                  </a>
                </div>
                <div className="relative">
                  <div
                    className="overflow-y-auto relative scrollable"
                    style={{ maxHeight: "300px" }}
                  >
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item d-block p-15 border-bottom"
                    >
                      <div className="d-flex">
                        <div className="avatar avatar-blue avatar-icon">
                          <MailOutlined />
                        </div>
                        <div className="m-l-15">
                          <p className="m-b-0 text-dark">
                            You received a new message
                          </p>
                          <p className="m-b-0">
                            <small>8 min ago</small>
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item d-block p-15 border-bottom"
                    >
                      <div className="d-flex">
                        <div className="avatar avatar-cyan avatar-icon">
                          <UserAddOutlined />
                        </div>
                        <div className="m-l-15">
                          <p className="m-b-0 text-dark">New user registered</p>
                          <p className="m-b-0">
                            <small>7 hours ago</small>
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item d-block p-15 border-bottom"
                    >
                      <div className="d-flex">
                        <div className="avatar avatar-red avatar-icon">
                          <UserAddOutlined />
                        </div>
                        <div className="m-l-15">
                          <p className="m-b-0 text-dark">System Alert</p>
                          <p className="m-b-0">
                            <small>8 hours ago</small>
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item d-block p-15"
                    >
                      <div className="d-flex">
                        <div className="avatar avatar-gold avatar-icon">
                          <UserAddOutlined />
                        </div>
                        <div className="m-l-15">
                          <p className="m-b-0 text-dark">
                            You have a new update
                          </p>
                          <p className="m-b-0">
                            <small>2 days ago</small>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown dropdown-animated scale-left">
              <div className="pointer" data-toggle="dropdown">
                <div className="avatar avatar-image  m-h-10 m-r-15">
                  <img src={user?.imageUrl || ""} alt="Avatar" />
                </div>
              </div>
              <div className="p-b-15 p-t-20 dropdown-menu pop-profile">
                <div className="p-h-20 p-b-15 m-b-10 border-bottom">
                  <div className="d-flex m-r-50">
                    <div className="avatar avatar-lg avatar-image">
                      {user?.imageUrl ? (
                        <>
                          <iframe
                            src={user.imageUrl}
                            title="User Avatar"
                            style={{
                              width: "100px",
                              height: "100px",
                              border: "none",
                            }}
                          >
                            <p>Image could not be loaded</p>
                          </iframe>
                          <img src={user.imageUrl} alt="User Avatar" />
                        </>
                      ) : (
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#f0f0f0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                          }}
                        >
                          <span>No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="m-l-10">
                      <p className="m-b-0 text-dark font-weight-semibold">
                        {user?.userName || "Guest"}
                      </p>
                      <p className="m-b-0 opacity-07">{user?.email}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="/"
                  className="dropdown-item d-block p-h-15 p-v-10 log-out-button"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <LogoutOutlined />
                      <span className="m-l-10" onClick={handleLogout}>
                        Logout
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
