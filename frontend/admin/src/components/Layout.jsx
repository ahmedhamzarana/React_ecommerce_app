import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="wrapper">
      <div id="page">
        <div className="layout-wrap">

          {/* Sidebar stays fixed */}
          <Sidebar />

          {/* Right side content */}
          <div className="section-content-right">
            <Navbar />

            {/* Page content changes here */}
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Layout;