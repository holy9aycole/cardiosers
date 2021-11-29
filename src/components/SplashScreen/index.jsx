import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Image1 from '../../assets/images/splash-web.png'
import Logo from '../../assets/images/rmz-logo (1).svg'
import Image2 from '../../assets/images/MaskGroup6.svg'

function SplashScreen() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container>
        <Grid item sm={6}>
          <img src={Image1} alt="" className={classes.image1}/>
        </Grid>
        <Grid item sm={6} className={classes.container2}>
          <img src={Logo} alt="" className={classes.logo}/>
          <Typography className={classes.text1}>CRAFTING SPACES<br/> THAT CONNECT<br/> SOCIALLY</Typography>
          <img src={Image2} alt="" className={classes.image2}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default SplashScreen;
