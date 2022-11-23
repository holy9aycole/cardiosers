import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../App";
import DashHeader from "../Dash.Header";
import DashNavigation from "../Dash.Navigation";
import DashScanForm from "./Dash.Scan.Form";

const DashScan = () => {
  const navigate = useNavigate();

  /* true: server procesing the request */
  const [loading, setLoading] = useState(false);

  const handlSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const date_of_birth = formData.get("date_of_birth");
    const image = formData.get("image");

    console.log({ fullname, email, phone, date_of_birth, image });

    // setLoading(true);
    //
    const API_URL = "https://us-central1-aiplatform.googleapis.com/v1/projects";
    const API_ENDPOINT_ID = "2018496640410714112";
    const API_PROJECT_ID = "544341748555";

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instances: [
          {
            content: image,
          },
        ],
        parameters: {
          confidenceThreshold: 0.5,
          maxPredictions: 5,
        },
      }),
    };

    fetch(
      `${API_URL}/${API_PROJECT_ID}/locations/us-central1/endpoints/${API_ENDPOINT_ID}:predict`,
      option
    ).then((data) => {
      // console.log("OK");
      console.log(data);

      // const scan_id = "123456";
      // navigate("/dash/scan/" + scan_id);
    });
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
