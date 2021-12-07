import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import { Button1, ButtonContainer, ButtonLine, Text1, Container2, MainContainer, Image1, Logo, Image2, SkipButton } from "./styles";
import image1 from '../../assets/images/splash-web.png'
import logo from '../../assets/images/rmz-logo (1).svg'
import image2 from '../../assets/images/MaskGroup6.svg'
import buttonArrow from '../../assets/images/button-arrow.svg'
import buttonLine from '../../assets/images/button-line-2.svg'

function SplashScreen() {

  return (
    <MainContainer>
      <Grid container>
        <Grid item sm={6}>
          <Image1 src={image1} alt="" />
        </Grid>
        <Container2 item sm={6}>
          <Logo src={logo} alt="" />
          <Text1 >CRAFTING SPACES<br /> THAT CONNECT<br /> SOCIALLY</Text1>
          <SkipButton disableRipple>SKIP</SkipButton>
          <ButtonContainer><Button1 src={buttonArrow} alt="" /></ButtonContainer>
          <ButtonLine src={buttonLine} alt="" />
          <Image2 src={image2} alt="" />
        </Container2>
      </Grid>
    </MainContainer>
  );
}

export default SplashScreen;
