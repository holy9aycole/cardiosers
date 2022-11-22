import React from "react";
import DashHeader from "./Dash.Header";
import DashNavigation from "./Dash.Navigation";

const DashScan = () => (
  <main className="dash">
    <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
    <DashNavigation />
  </main>
);

export default DashScan;
