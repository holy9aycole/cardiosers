import React from "react";
import { Route, Routes } from "react-router-dom";
import DashStatic from "../ui/dash/static/Dash.Static";
import DashScan from "../ui/dash/scan/Dash.Scan";
import DashReport from "../ui/dash/report/Dash.Report";
import DashHistory from "../ui/dash/history/Dash.History";
import DashPatient from "../ui/dash/patient/Dash.Patient";
import DashAccount from "../ui/dash/account/Dash.account";

const Dash = ({ session }) => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DashStatic />} />
        <Route exact path="/scan" element={<DashScan />} />
        <Route exact path="/history" element={<DashHistory />} />
        <Route path="/history/:history_id" element={<DashReport />} />
        <Route path="/patient" element={<DashPatient />} />
        <Route path="/account" element={<DashAccount />} />
      </Routes>
    </>
  );
};

export default Dash;
