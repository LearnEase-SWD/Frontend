import {
  AppstoreOutlined,
  BuildOutlined,
  DashboardOutlined,
  FileOutlined,
  FormOutlined,
  HddOutlined,
  LockOutlined,
  PieChartOutlined,
  TableOutlined,
} from "@ant-design/icons";
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
                <li className={isActive("/dashboard") ? "active" : ""}>
                  <Link to="/dashboard">Default</Link>
                </li>
                <li className={isActive("/dashboard/users") ? "active" : ""}>
                  <Link to="/dashboard/users">Users</Link>
                </li>
                <li className={isActive("/dashboard/orders") ? "active" : ""}>
                  <Link to="/dashboard/orders">Orders</Link>
                </li>
                <li
                  className={isActive("/dashboard/categories") ? "active" : ""}
                >
                  <Link to="/dashboard/categories">Categories</Link>
                </li>
                <li
                  className={
                    isActive("/dashboard/courseLayout") ? "active" : ""
                  }
                >
                  <Link to="/dashboard/courseLayout">Courses</Link>
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
