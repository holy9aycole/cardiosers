import React from "react";
import { Typography } from "@mui/material";
import Time from "assets/images/timeline.jpg";
import { HeadLine, Heading, DividerStyled, MainImage, ImgText } from "./styles";

function Timeline({ innerRef }) {
  return (
    <>
      <HeadLine ref={innerRef}>
        <div className="line" />
        <Typography class="text">Timeline</Typography>
      </HeadLine>
      <Heading>
        Our continuous pursuit to create <br /> the future of spaces
      </Heading>
      <MainImage src={Time} />
      <ImgText>First project launched in Bengaluru</ImgText>
      <DividerStyled />
    </>
  );
}

export default Timeline;
