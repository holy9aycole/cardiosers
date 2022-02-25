import React from "react";

import mask from "assets/images/mask.svg";
// import siteImage from "assets/images/RMZ_Ecoworld.png";
import PropertyCard from "components/PropertyCard";
import { Grid } from "@mui/material";
import useProperties from "hooks/useProperties";
import { MainContainer, Line, Text1, Text2, useStyles } from "./styles";

export default function WhatsNew() {
  const classes = useStyles();
  const { properties } = useProperties();

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
        <Grid container className={classes.gridItemContainer}>
          {properties.map((item, index) => (
            <PropertyCard
              key={index}
              RMZ_Ecoworld={`http://52.172.227.233${item.About.image.url}`}
              category={item.tag}
              name={item.PropertyName}
              description={item.About.description}
              time={item.updated_at}
            />
          ))}
        </Grid>
      </MainContainer>
    </div>
  );
}
