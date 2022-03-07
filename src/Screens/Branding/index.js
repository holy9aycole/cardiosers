import React from "react";

import BrandCard from "components/BrandCard";
import siteImage from "assets/images/RMZ_Ecoworld.png";
import Logo from "assets/images/rmz-logo.png";
import useBranding from "hooks/useBranding";
import { Grid } from "@mui/material";
import { useStyles } from "./styles";

export default function Branding() {
  const { branding } = useBranding();
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridItemContainer}>
        {branding.map((item, index) => (
          <BrandCard
            key={index}
            Logo={Logo}
            RMZ_Ecoworld={siteImage}
            name={item.title}
            fileType={item.fileType}
            url={item.file.url}
            fileName={item.file.name}
          />
        ))}
      </Grid>
    </>
  );
}
