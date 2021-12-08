import React from "react";
import SustainableCard from "components/SustainabilityCard";
import sust from "assets/images/sustainable.png";

export default function Sustainability() {
  // const classes = useStyles();
  return (
    <div>
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
