/* eslint-disable */
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, TextField } from "components/custom";
import useAuth from "hooks/useAuth";
import logo from "assets/images/rmz-logo (1).svg";
import mailIcon from "assets/images/email-icon.svg";
import {
  MainContainer,
  Logo,
  FormContainer,
  MailIcon,
  TextField1,
  Button1,
  Text1,
} from "./styles";

function LoginScreen() {
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().email().required("email is required!"),
      })
    ),
  });
  const navigate = useNavigate();

  const {getOtp} = useAuth();



  const onSubmit = (data) => {
    console.log(data);
    getOtp({email:data.email});
    navigate('/otp');
  };

  return (
    <>
      <MainContainer>
        <Logo src={logo} alt="" />
        <Form methods={methods} onSubmit={onSubmit}>
          <FormContainer>
            <MailIcon src={mailIcon} alt="" />
            {/* <TextField1 label="Enter you Email" /> */}
            <TextField
              name="email"
              variant="outlined"
              label="Enter your Email"
              fullWidth
              sx={{ color: "white" }}
            />

            <Button1 type="submit">GET OTP</Button1>

            <Text1>Check you email inbox for OTP</Text1>
          </FormContainer>
        </Form>
      </MainContainer>
    </>
  );
}

export default LoginScreen;
