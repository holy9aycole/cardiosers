import React, { useState } from "react";
import DashHeader from "../Dash.Header";
import DashNavigation from "../Dash.Navigation";
import DashHistoryContainer from "./Dash.History.Container";

const DashHistory = () => {
  const [filter, setFilter] = useState(null);

  const histories = [
    {
      id: "123456",
      patient: "Alouzeh Brandonde",
      heartSize: 12.8,
      date: "10/10/2022",
      ctr: 0.5,
    },
    {
      id: "123457",
      patient: "Enrique Boriesa",
      heartSize: 5.75,
      date: "03/11/2022",
      ctr: 0.69,
    },
    {
      id: "123458",
      patient: "Nemo nemo",
      heartSize: 7.6,
      date: "21/11/2022",
      ctr: 0.3,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");

    console.log({ search });
  };

  return (
    <main className="dash">
      <DashHeader username="Enrique Boriesa" time="4:45 pm, 19 Jan 2022" />
      <DashNavigation />
      <DashHistoryContainer
        onSearch={handleSearch}
        histories={histories}
        filter={filter}
        setFilter={(value) => setFilter(value)}
      />
    </main>
  );
};

export default DashHistory;
