import React from "react";
import AdminNavBar from "../sections/admin/AdminNavBar";
import { Outlet } from "react-router-dom";
import AdminFooter from "../sections/admin/AdminFooter";
import Sidebar from "../sections/admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavBar />

      <div className="flex h-[calc(100vh-180px)]">
        <Sidebar />
        <Outlet />
      </div>

    
    </>
  );
};

export default AdminLayout;
