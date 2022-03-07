import React from "react";
import { Typography, Grid } from "@mui/material";
import Growth from "assets/images/growth.png";
import BlueCardAchievement from "components/AboutUs/BlueCardAchievement";
import {
  HeadLine,
  Heading,
  DividerStyled,
  MainImage,
  ImageGrid,
} from "./styles";

function Achievements({ innerRef }) {
  return (
    <>
      <HeadLine ref={innerRef}>
        <div className="line" />
        <Typography class="text">Achievements</Typography>
      </HeadLine>
      <Heading>We design for growth</Heading>
      <MainImage
        src={Growth}
        style={{ marginTop: "20px", position: "relative" }}
      />
      <ImageGrid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <BlueCardAchievement
            name="16.74M sft."
            description="committed for 1st WELL Portfolio from India"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <BlueCardAchievement
            name="$150M"
            description="of IT Park space bought in Gurugram"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <BlueCardAchievement
            name="$1B"
            description="invested in Hyderabad across 20M sft."
          />
        </Grid>
      </ImageGrid>
      <DividerStyled />
    </>
  );
}

export default Achievements;
