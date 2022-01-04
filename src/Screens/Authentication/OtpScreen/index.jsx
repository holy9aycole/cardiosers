import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from 'assets/images/rmz-logo (1).svg'
import mailIcon from 'assets/images/email-icon.svg'
import { FormContainer, Logo, MainContainer, MailIcon, TextField1, OtpContainer, OtpInnerContainer, Button1, ResendButton, OtpTextField } from "./styles";

const theme = createTheme({
  components: {
    MuiInputBase: {
      color: "#ffffff"
    }
  },
});

function LoginScreen() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Logo src={logo} alt="" />

          <FormContainer>
            <MailIcon src={mailIcon} alt="" />
            <TextField1 label="Enter you Email" InputLabelProps={{
              style: { color: 'whitesmoke' },
            }} />
            <OtpContainer>
              <OtpInnerContainer><OtpTextField defaultValue="1" InputLabelProps={{
                style: { color: '#fff' },
              }} /></OtpInnerContainer>
              <OtpInnerContainer><OtpTextField defaultValue="2" InputLabelProps={{
                style: { color: '#fff' },
              }} /></OtpInnerContainer>
              <OtpInnerContainer><OtpTextField defaultValue="3" InputLabelProps={{
                style: { color: '#fff' },
              }} /></OtpInnerContainer>
              <OtpInnerContainer><OtpTextField defaultValue="4" InputLabelProps={{
                style: { color: '#fff' },
              }} /></OtpInnerContainer>
            </OtpContainer>
            <Link to="/splash-screen">
              <Button1 >Verify</Button1>
            </Link>
            <ResendButton >RESEND</ResendButton>
          </FormContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default LoginScreen;
