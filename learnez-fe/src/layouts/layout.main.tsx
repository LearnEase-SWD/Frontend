import React, { useState } from "react";
import DashboardAdmin from "../containers/DashboardAdmin";
import HeaderMain from "../components/templatee/Header";
import SidebarAdmin from "../components/templatee/SidebarAdmin";

const LayoutAdmin: React.FC = () => {
  const [isFolded, setIsFolded] = useState(false);

  const toggleSidebar = () => {
    setIsFolded((prev) => !prev);
  };

  return (
    <>
      <div className="app">
        <div className="layout">
          <SidebarAdmin isFolded={isFolded} toggleSidebar={toggleSidebar} />
          <HeaderMain isFolded={isFolded} toggleSidebar={toggleSidebar} />
          <DashboardAdmin isFolded={isFolded} />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
