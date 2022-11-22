import React from "react";
import DashContainer from "./Dash.Container";
import DashHeader from "./Dash.Header";
import DashNavigation from "./Dash.Navigation";

const DashHome = () => (
  <main className="dash">
    <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
    <DashNavigation />
    <DashContainer />
  </main>
);

export default DashHome;
