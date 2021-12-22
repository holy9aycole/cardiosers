import React from "react";
import { Link } from "react-router-dom";
import {
  MainContainer,
  Logo,
  FormContainer,
  MailIcon,
  TextField1,
  Button1,
  Text1
} from "./styles";
import logo from '../../assets/images/rmz-logo (1).svg'
import mailIcon from '../../assets/images/email-icon.svg'

function LoginScreen() {


  return (
    <>
      <MainContainer>
        <Logo src={logo} alt="" />

        <FormContainer>
          <MailIcon src={mailIcon} alt="" />
          <TextField1 label="Enter you Email" />
          <Link to="/otp">
            <Button1>GET OTP</Button1>
          </Link>
          <Text1>Check you email inbox for OTP</Text1>
        </FormContainer>
      </MainContainer>
    </>
  );
}

export default LoginScreen;
