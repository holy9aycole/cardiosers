import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Button } from "@mui/material";
import { useStyles, Button1, ButtonContainer, ButtonLine, Text1 , Container2, MainContainer, Image1} from "./styles";
import image1 from '../../assets/images/splash-web.png'
import Logo from '../../assets/images/rmz-logo (1).svg'
import Image2 from '../../assets/images/MaskGroup6.svg'
import buttonArrow from '../../assets/images/button-arrow.svg'
import buttonLine from '../../assets/images/button-line-2.svg'

function SplashScreen() {
  const classes = useStyles();
  return (
    <MainContainer>
      <Grid container>
        <Grid item sm={6}>
          <Image1 src={image1} alt=""/>
        </Grid>
        <Container2 item sm={6}>
          <img src={Logo} alt="" className={classes.logo}/>
          <Text1 >CRAFTING SPACES<br/> THAT CONNECT<br/> SOCIALLY</Text1>
          <Button className={classes.skipButton}>SKIP</Button>
          <ButtonContainer><Button1 src={buttonArrow} alt=""/></ButtonContainer>
          <ButtonLine src={buttonLine} alt=""/>
          <img src={Image2} alt="" className={classes.image2}/>
        </Container2>
      </Grid>
    </MainContainer>
  );
}

export default SplashScreen;
