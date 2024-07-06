import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./Admin.scss";
import Sidebar from "../../components/sidebar/Sidebar";


const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [close, setClose] = useState(false);
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
