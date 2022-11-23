import React from "react";

const CTRPercentage = ({ ctr }) => {
  const ctrPercentage = ctr * 100; /* ctr in percentage */
  const ctrGrade = (360 * ctrPercentage) / 100; /* ctr in grade */

  let background; /* background of the progress */

  if (ctr <= 0.42) background = "#F4EB06";
  else if (ctr > 0.42 && ctr <= 0.5) background = "#0CE914";
  else if (ctr > 0.5 && ctr <= 0.55) background = "#E9760C";
  else if (ctr > 0.55 && ctr <= 0.6) background = "#F23E05";
  else background = "#D40A0A";

  return (
    <div className="ctr__percentage__box">
      <div
        className="ctr__percentage"
        style={{
          backgroundImage: `conic-gradient(
            ${background} ${ctrGrade}deg,
            #ccc 0deg)`,
        }}
      >
        <div className="ctr__percentage__value">{ctr}</div>
      </div>
    </div>
  );
};

export default CTRPercentage;
