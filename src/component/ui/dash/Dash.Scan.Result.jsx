import React from "react";
import DashHeader from "./Dash.Header";
import DashNavigation from "./Dash.Navigation";
import DashScanResultContainer from "./Dash.Scan.Result.Container";

const DashScanResult = () => {
  return (
    <main className="dash__static">
      <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
      <DashNavigation />
      <DashScanResultContainer
        ctr={0.3}
        status="Has Cardiomegaly"
        image=""
        heartSize={5.9}
        fullname="Alouzhe Brandone"
        phone="+240 555 48 96 74"
        email="alouzhe@gmail.com"
        date_of_birth="10/02/1998"
      />
    </main>
  );
};

export default DashScanResult;
