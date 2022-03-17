import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import tag from "assets/images/tag-icon.png";
import mask2 from "assets/images/mask2.png";

import {
  CardFooter,
  useStyles,
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
        <FooterShadow src={mask2} alt="footer shadow" />
      </CardFooter>
    </Grid>
  );
}
