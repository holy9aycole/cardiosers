import React from "react";
import { useNavigate } from "react-router-dom";
import DashHeader from "./Dash.Header";
import DashNavigation from "./Dash.Navigation";
import DashScanForm from "./Dash.Scan.Form";

const DashScan = () => {
  const navigate = useNavigate();

  const handlSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const date_of_birth = formData.get("date_of_birth");

    console.log({ firstname, lastname, email, phone, date_of_birth });

    const scan_id = "123456";
    navigate("/dash/scan/" + scan_id);
  };

  return (
    <main className="dash">
      <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
      <DashNavigation />
      <DashScanForm onSubmit={handlSubmit} />
    </main>
  );
};

export default DashScan;
