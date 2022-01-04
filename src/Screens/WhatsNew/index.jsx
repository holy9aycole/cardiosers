import React from "react";

import mask from "assets/images/mask.svg";
import siteImage from "assets/images/RMZ_Ecoworld.png";
import PropertyCard from "components/PropertyCard";

import { MainContainer, Line, Text1, Text2 } from "./styles";

export default function WhatsNew() {
  //   const classes = useStyles();
  return (
    <div>
      <MainContainer>
        <img className="shadow" src={mask} alt="shadow" />

        <Line className="line" />
        <Text1>INNOVATION & ENTREPRENEURSHIP</Text1>
        <Text2>
          We relentlessly pursue innovation. By empowering our talented team, we
          promote entrepreneurship and new ideas to bring our ambitions to life.
        </Text2>
        <PropertyCard
          RMZ_Ecoworld={siteImage}
          category="IT Park"
          name="RMZ Ecoworld"
          description="An architectural marvel redefining the idea of tech parks in
    Bangalore, India."
          time="1h"
        />
      </MainContainer>
    </div>
  );
}
