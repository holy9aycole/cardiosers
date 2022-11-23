import React from "react";

const CTRStatus = ({ ctr }) => {
  let status; /* status of the condition */

  if (ctr <= 0.42) status = "Pathologic Detected";
  else if (ctr > 0.42 && ctr <= 0.5) status = "Normal Condition";
  else if (ctr > 0.5 && ctr <= 0.55) status = "Mild Cardiomegaly Detected";
  else if (ctr > 0.55 && ctr <= 0.6) status = "Moderate Cardiomegaly Detected";
  else status = "Severe Cardiomegaly Detected";

  return <span className="ctr__status">{status}</span>;
};

export default CTRStatus;
