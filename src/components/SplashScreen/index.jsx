import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import { useStyles, Button, ButtonContainer, ButtonLine, Text1 , Container2} from "./styles";
import Image1 from '../../assets/images/splash-web.png'
import Logo from '../../assets/images/rmz-logo (1).svg'
import Image2 from '../../assets/images/MaskGroup6.svg'
import buttonArrow from '../../assets/images/button-arrow.svg'
import buttonLine from '../../assets/images/button-line-2.svg'

function SplashScreen() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container>
        <Grid item sm={6}>
          <img src={Image1} alt="" className={classes.image1}/>
        </Grid>
        <Container2 item sm={6}>
          <img src={Logo} alt="" className={classes.logo}/>
          <Text1 >CRAFTING SPACES<br/> THAT CONNECT<br/> SOCIALLY</Text1>
          <ButtonContainer><Button src={buttonArrow} alt=""/></ButtonContainer>
          <ButtonLine src={buttonLine} alt=""/>
          <img src={Image2} alt="" className={classes.image2}/>
        </Container2>
      </Grid>
    </div>
  );
}

export default SplashScreen;
