import React from "react";
import SustainableCard from "components/SustainabilityCard";
import sust from "assets/images/sustainable.png";
import Header from "../../layouts/dashboard/DashboardNavbar";
// import { useStyles } from "./styles";

export default function Sustainability() {
  // const classes = useStyles();
  return (
    <div>
      <Header title="whats new" />
      <div>
        <SustainableCard
          sustainImage={sust}
          title="The 5’S"
          description="RMZ were the first to use the 5S - hitherto a concept used in manufacturing units – in the real estate industry."
        />
      </div>
    </div>
  );
}
