import React, { useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import left from "assets/images/button-arrow-left.png";
import right from "assets/images/button-arrow-right.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const slider2 = useRef(null);

  const [updateCount, setUpdateCount] = useState(1);

  const next = () => {
    slider.current.slickPrev();
    slider2.current.slickPrev();
  };
  const previous = () => {
    slider.current.slickNext();
    slider2.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) =>
      setUpdateCount((index + 1) % 6 === 0 ? 6 : (index + 1) % 6),
    // beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <>
      <div className={classes.container}>
        <Grid container className={classes.mainContainer}>
          <Grid items md={6} xs={12}>
            <Slider ref={slider} {...settings}>
              {props.data.map((item, index) => (
                <SustainableImage
                  key={index}
                  src={item.image}
                  alt="sustainable"
                />
              ))}
            </Slider>
          </Grid>
          <TextContainer item md={6} xs={12}>
            <Description>
              <Slider ref={slider2} {...settings}>
                {props.data.map((item, index) => (
                  <div key={index}>
                    <Typography className="text1"> {item.title}</Typography>
                    <Typography className="text2">
                      {item.description}
                    </Typography>
                  </div>
                ))}
              </Slider>
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
    </>
  );
}
