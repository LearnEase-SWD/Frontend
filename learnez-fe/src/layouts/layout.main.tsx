import React, { useEffect, useState } from "react";
import HeaderMain from "../components/templatee/Header";
import SidebarAdmin from "../components/templatee/SidebarAdmin";
import { Outlet, useLocation } from "react-router-dom";
import { hideLoadingOverlay, showLoadingOverlay } from "../components/templatee/Loading/LoadingOverlay";

const LayoutAdmin: React.FC = () => {
  const [isFolded, setIsFolded] = useState(false);

  const toggleSidebar = () => {
    setIsFolded((prev) => !prev);
  };
  const location = useLocation();

  useEffect(() => {
    showLoadingOverlay();
    setTimeout(() => {
      hideLoadingOverlay();
    }, 500);
  }, [location.pathname]); // Gọi mỗi khi đổi trang
  return (
    <>
      <div className="app">
        <div className="layout">
          <SidebarAdmin isFolded={isFolded} toggleSidebar={toggleSidebar} />
          <HeaderMain isFolded={isFolded} toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
