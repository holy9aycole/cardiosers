import React from "react";
import { Typography, Grid, Card } from "@mui/material";

import DIcon from "assets/images/download-icon.png";
import mask2 from "assets/images/mask2.png";

import {
  CardFooter,
  useStyles,
  FooterShadow,
  CardHeader,
  Download,
} from "./styles";

const fileDownload = require("js-file-download");

const handleDownload = (src, name) => {
  fileDownload(`http://52.172.227.233${src}`, name);
};

export default function BrandCard(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item md={6} xs={12} className={classes.cardContainer}>
        <CardHeader>
          <Card className="ImageContainer">
            <img src={props.RMZ_Ecoworld} alt="site" className="siteImage" />
          </Card>
          <img className="Logo" src={props.Logo} alt="rmz logo" />
        </CardHeader>

        <CardFooter>
          <Typography className="text2">{props.name}</Typography>
          <Typography className="text3">Format: {props.fileType}</Typography>

          <FooterShadow src={mask2} alt="footer shadow" />
          <Download onClick={() => handleDownload(props.url, props.fileName)}>
            <img src={DIcon} alt="download icon" className="DIcon" />
          </Download>
        </CardFooter>
      </Grid>
    </>
  );
}
