import React from "react";

const CTRStatus = ({ ctr, status }) => {
  const ctrPercentage = ctr * 100; /* ctr in percentage */
  const ctrGrade = (360 * ctrPercentage) / 100; /* ctr in grade */

  const background = "#08596A";

  return (
    <div className="dash__report__percentage">
      <div
        className="report__percentage__progress"
        style={{
          backgroundImage: `conic-gradient(
            ${background} ${ctrGrade}deg,
            #ccc 0deg)`,
        }}
      >
        <div className="report__percentage__value">{ctr}</div>
      </div>
      {status ? <span className="dash__report__text">{status}</span> : null}
    </div>
  );
};

export default CTRStatus;
