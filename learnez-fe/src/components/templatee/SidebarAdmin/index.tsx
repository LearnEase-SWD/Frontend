import { AppstoreOutlined, BuildOutlined, DashboardOutlined, FileOutlined, FormOutlined, HddOutlined, LockOutlined, PieChartOutlined, TableOutlined } from "@ant-design/icons";

interface SidebarAdminProps {
  isFolded: boolean;
  toggleSidebar: () => void;
}

const SidebarAdmin: React.FC<SidebarAdminProps> = ({ isFolded }) =>  {
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
                <li className="active">
                  <a href="index.html">Default</a>
                </li>
                <li>
                  <a href="index-crm.html">CRM</a>
                </li>
                <li>
                  <a href="index-e-commerce.html">E-commerce</a>
                </li>
                <li>
                  <a href="index-projects.html">Projects</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <AppstoreOutlined />
                </span>
                <span className="title">Apps</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="app-chat.html">Chat</a>
                </li>
                <li>
                  <a href="app-file-manager.html">File Manager</a>
                </li>
                <li>
                  <a href="app-mail.html">Mail</a>
                </li>
                <li className="nav-item dropdown">
                  <a href="javascript:void(0);">
                    <span>Projects</span>
                    <span className="arrow">
                      <i className="arrow-icon"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="app-project-list.html">Project List</a>
                    </li>
                    <li>
                      <a href="app-project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="javascript:void(0);">
                    <span>E-commerce</span>
                    <span className="arrow">
                      <i className="arrow-icon"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="app-e-commerce-order-list.html">Orders List</a>
                    </li>
                    <li>
                      <a href="app-e-commerce-products.html">Products</a>
                    </li>
                    <li>
                      <a href="app-e-commerce-products-list.html">
                        Products List
                      </a>
                    </li>
                    <li>
                      <a href="app-e-commerce-products-edit.html">
                        Products Edit
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <BuildOutlined />
                </span>
                <span className="title">UI Elements</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="avatar.html">Avatar</a>
                </li>
                <li>
                  <a href="alert.html">Alert</a>
                </li>
                <li>
                  <a href="badge.html">Badge</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="cards.html">Cards</a>
                </li>
                <li>
                  <a href="icons.html">Icons</a>
                </li>
                <li>
                  <a href="lists.html">Lists</a>
                </li>
                <li>
                  <a href="typography.html">Typography</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <HddOutlined />
                </span>
                <span className="title">Components</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="toasts.html">Toasts</a>
                </li>
                <li>
                  <a href="popover.html">Popover</a>
                </li>
                <li>
                  <a href="slider-progress.html">Slider & Progress</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="tooltips.html">Tooltips</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <FormOutlined />
                </span>
                <span className="title">Forms</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="form-elements.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-layouts.html">Form Layouts</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <TableOutlined />
                </span>
                <span className="title">Tables</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="basic-table.html">Basic Table</a>
                </li>
                <li>
                  <a href="data-table.html">Data Table</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <PieChartOutlined />
                </span>
                <span className="title">Charts</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="chartjs.html">ChartJs</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <FileOutlined />
                </span>
                <span className="title">Pages</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="profile.html">Profile</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="members.html">Members</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="setting.html">Setting</a>
                </li>
                <li className="nav-item dropdown">
                  <a href="javascript:void(0);">
                    <span>Blog</span>
                    <span className="arrow">
                      <i className="arrow-icon"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-post.html">Blog Post</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                <LockOutlined />
                </span>
                <span className="title">Authentication</span>
                <span className="arrow">
                  <i className="arrow-icon"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="login-1.html">Login 1</a>
                </li>
                <li>
                  <a href="login-2.html">Login 2</a>
                </li>
                <li>
                  <a href="login-3.html">Login 3</a>
                </li>
                <li>
                  <a href="sign-up-1.html">Sign Up 1</a>
                </li>
                <li>
                  <a href="sign-up-2.html">Sign Up 2</a>
                </li>
                <li>
                  <a href="sign-up-3.html">Sign Up 3</a>
                </li>
                <li>
                  <a href="error-1.html">Error 1</a>
                </li>
                <li>
                  <a href="error-2.html">Error 2</a>
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
