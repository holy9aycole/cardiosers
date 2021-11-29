import React, { useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
// import sust from "assets/images/sustainable.png";
import left from "assets/images/button-arrow-left.png";
import right from "assets/images/button-arrow-right.png";
import Slider from "react-slick";

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

export default function SustainabilityCard(props) {
  const classes = useStyles();

  const slider = useRef(null);

  // const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(1);

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    // beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div>
      <div className={classes.container}>
        <Grid container className={classes.mainContainer}>
          <Grid items md={6} xs={12}>
            <Slider ref={slider} {...settings}>
              <SustainableImage src={props.sustainImage} alt="sustainable" />
              <SustainableImage src={props.sustainImage} alt="sustainable" />
              <SustainableImage src={props.sustainImage} alt="sustainable" />
              <SustainableImage src={props.sustainImage} alt="sustainable" />
            </Slider>
          </Grid>
          <TextContainer item md={6} xs={12}>
            {/* <input
              onChange={(e) => slider.slickGoTo(e.target.value)}
              value={slideIndex}
              type="range"
              min={0}
              max={3}
            /> */}
            <Description>
              <Typography className="text1"> {props.title}</Typography>
              <Typography className="text2">{props.description}</Typography>
              <LeftIconContainer onClick={next}>
                <img className="leftIcon" src={left} alt="shadow" />
              </LeftIconContainer>
              <RightIconContainer onClick={previous}>
                <img className="rightIcon" src={right} alt="shadow" />
              </RightIconContainer>
              <NumberContainer>
                <Typography className="one">0{updateCount}</Typography>
                <div className="line" />
                <Typography className="six">06</Typography>
              </NumberContainer>

              <BottomMobile>
                <div className="number">
                  <Typography className="one">0{updateCount}</Typography>
                  <div className="MobileLine" />
                  <Typography className="six">06</Typography>
                </div>
                <div className="arrowContaiiner">
                  <div
                    onClick={next}
                    className="leftContainer"
                    aria-hidden="true"
                  >
                    <img className="leftIcon" src={left} alt="shadow" />
                  </div>
                  <div
                    onClick={previous}
                    className="rightConatiner"
                    aria-hidden="true"
                  >
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
