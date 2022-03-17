import React from "react";
import { Typography, Grid, Card } from "@mui/material";
// import moment from "moment";
import tag from "assets/images/tag-icon.png";
// import clock from "assets/images/clock-icon.png";
import mask2 from "assets/images/mask2.png";

import {
  CardFooter,
  useStyles,
  // Time,
  FooterShadow,
  CardHeader,
  ImageTag,
} from "./styles";

export default function ExperienceCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid item md={6} xs={12} className={classes.cardContainer}>
      <CardHeader>
        <Card className="ImageContainer">
          <img src={props.RMZ_Ecoworld} alt="site" className="siteImage" />
          <ImageTag>
            <img className="tagIcon" src={tag} alt="tag" />
            <Typography className="tagTitle">{props.category}</Typography>
          </ImageTag>
        </Card>
      </CardHeader>

      <CardFooter>
        <Typography className="text2">{props.name}</Typography>
        <Typography className="text3">{props.description}</Typography>
        {/* <Time>
          <img className="clock" src={clock} alt="clock" />
          <Typography className="ago">
            {moment(props.time).fromNow()}
          </Typography>
        </Time> */}
        <FooterShadow src={mask2} alt="footer shadow" />
      </CardFooter>
    </Grid>
  );
}
