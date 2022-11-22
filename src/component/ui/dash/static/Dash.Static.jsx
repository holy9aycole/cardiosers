import React from "react";
import DashStaticContainer from "./Dash.Static.Container";
import DashHeader from "../Dash.Header";
import DashNavigation from "../Dash.Navigation";

const DashStatic = () => (
  <main className="dash">
    <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
    <DashNavigation />
    <DashStaticContainer />
  </main>
);

export default DashStatic;
