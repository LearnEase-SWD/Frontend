import React from "react";
import DashboardAdmin from "../containers/DashboardAdmin";
import HeaderMain from "../components/templatee/Header/HeaderMain";
import SidebarAdmin from "../components/templatee/SidebarAdmin/SidebarAdmin";


const LayoutAdmin: React.FC = () => {


  return (

    <>
      <SidebarAdmin />
      <HeaderMain />
      <DashboardAdmin />

    </>


  );
};

export default LayoutAdmin;
