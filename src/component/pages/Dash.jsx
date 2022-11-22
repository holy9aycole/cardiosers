import React from "react";
import { Route, Routes } from "react-router-dom";
import DashHome from "../ui/dash/Dash.Home";
import DashScan from "../ui/dash/Dash.Scan";

const Dash = ({ session }) => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DashHome />} />
        <Route path="/scan" element={<DashScan />} />
      </Routes>
    </>
  );
};

export default Dash;
