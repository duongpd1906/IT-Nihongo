import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminSharedLayout() {
  return (
    <div>
      <AdminSidebar />
      <div>
        <div className="dashboard-page">
          <AdminNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminSharedLayout;
