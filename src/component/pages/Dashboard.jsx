import React from "react";

const Dashboard = ({ session }) => {
  return session === true ? <></> : <Redirect />;
};

export default Dashboard;
