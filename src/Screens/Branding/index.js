import React from "react";

import BrandCard from "components/BrandCard";
import siteImage from "assets/images/RMZ_Ecoworld.png";
import Logo from "assets/images/rmz-logo.png";

export default function Branding() {
  return (
    <>
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
