import { DashboardOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

interface SidebarAdminProps {
  isFolded: boolean;
  toggleSidebar: () => void;
}

const SidebarAdmin: React.FC<SidebarAdminProps> = ({ isFolded }) => {
  const location = useLocation(); // Get the current location

  // Helper function to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`sidebar-main ${isFolded ? "is-folded" : ""}`}>
      <div className="side-nav">
        <div className="side-nav-inner">
          <ul className="side-nav-menu scrollable">
            <li className="nav-item dropdown open">
              <a className="dropdown-toggle">
                <span className="icon-holder">
                  <DashboardOutlined />
                </span>
                <span className="title">Dashboard</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                {/* <li className={isActive("/callback") ? "active" : ""}>
                  <Link to="/callback">Default</Link>
                </li> */}
                <li className={isActive("/callback/users") ? "active" : ""}>
                  <Link to="/callback/users">Users</Link>
                </li>
                <li className={isActive("/callback/orders") ? "active" : ""}>
                  <Link to="/callback/orders">Orders</Link>
                </li>
                <li className={isActive("/callback/topics") ? "active" : ""}>
                  <Link to="/callback/topics">Topics</Link>
                </li>
                <li
                  className={isActive("/callback/courseLayout") ? "active" : ""}
                >
                  <Link to="/callback/courseLayout">Courses</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
