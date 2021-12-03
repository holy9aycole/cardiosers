import React from "react";
import Header from "layouts/dashboard/DashboardNavbar";
import BrandCard from "components/BrandCard";
import siteImage from "assets/images/RMZ_Ecoworld.png";
import Logo from "assets/images/rmz-logo.png";

export default function Branding() {
  return (
    <>
      <Header title="Branding" />
      <BrandCard
        Logo={Logo}
        RMZ_Ecoworld={siteImage}
        cetegory="IT Park"
        name="RMZ Ecoworld"
        description="An architectural marvel redefining the idea of tech parks in
    Bangalore, India."
        time="1h"
      />
    </>
  );
}
