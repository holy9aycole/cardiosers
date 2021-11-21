import React from "react";
import { Grid, Typography } from "@mui/material";
import sust from "assets/images/sustainable.png";
import left from "assets/images/button-arrow-left.png";
import right from "assets/images/button-arrow-right.png";

import mask3 from "assets/images/mask3.svg";

import {
  useStyles,
  SustainableImage,
  Description,
  TextContainer,
  Shadow,
  LeftIconContainer,
  RightIconContainer,
  NumberContainer,
  BottomMobile,
} from "./styles";

export default function SustainabilityCard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Grid container className={classes.mainContainer}>
          <Grid items md={6} xs={12}>
            <SustainableImage src={sust} alt="sustainable" />
          </Grid>
          <TextContainer item md={6} xs={12}>
            <Description>
              <Typography className="text1"> The 5’S</Typography>
              <Typography className="text2">
                RMZ were the first to use the 5S - hitherto a concept used in
                manufacturing units – in the real estate industry.
              </Typography>

              <LeftIconContainer>
                <img className="leftIcon" src={left} alt="shadow" />
              </LeftIconContainer>
              <RightIconContainer>
                <img className="rightIcon" src={right} alt="shadow" />
              </RightIconContainer>
              <NumberContainer>
                <Typography className="one">01</Typography>
                <div className="line" />
                <Typography className="six">06</Typography>
              </NumberContainer>
              {/* --------------- */}
              <BottomMobile>
                <div className="number">
                  <Typography className="one">01</Typography>
                  <div className="MobileLine" />
                  <Typography className="six">06</Typography>
                </div>
                <div className="arrowContaiiner">
                  <div className="leftContainer">
                    <img className="leftIcon" src={left} alt="shadow" />
                  </div>
                  <div className="rightConatiner">
                    <img className="rightIcon" src={right} alt="shadow" />
                  </div>
                </div>
              </BottomMobile>
            </Description>
            <Shadow src={mask3} alt="shadow" />
          </TextContainer>
        </Grid>
      </div>
    </div>
  );
}
