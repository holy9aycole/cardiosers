/* eslint-disable */
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, TextField } from "components/custom";
import { Link } from "react-router-dom";
import useAuth from "hooks/useAuth";
import OtpInput from "react-otp-input";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logo from "assets/images/rmz-logo (1).svg";
import mailIcon from "assets/images/email-icon.svg";
import {
  FormContainer,
  Logo,
  MainContainer,
  MailIcon,
  TextField1,
  OtpContainer,
  OtpInnerContainer,
  Button1,
  ResendButton,
  OtpTextField,
} from "./styles";

const theme = createTheme({
  components: {
    MuiInputBase: {
      color: "#ffffff",
    },
  },
});

function LoginScreen() {
  const [otp,setotp] = React.useState("");
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().email().required("email is required!"),
        password: Yup.string().required(),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      })
    ),
  });

  const handleOtpChange = (otp) =>{
    setotp(otp);
  } 

  const { register } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    if(otp.length !== 4){
      return;
    }
    const registerData = {
      email:data.email,
      password:data.password,
      otp:otp,
    }

    register(registerData);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Logo src={logo} alt="" />
          <Form methods={methods} onSubmit={onSubmit}>
            <FormContainer>
              <MailIcon src={mailIcon} alt="" />
              <TextField
                variant="outlined"
                fullWidth
                label="Enter you Email"
                name="email"
                InputLabelProps={{
                  style: { color: "whitesmoke" },
                }}
              />
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                // separator={<span>-</span>}
                inputStyle={{
                  width: "4rem",
                  height: "4rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  backgroundColor:'red',
                  color:'white',
                  border: "1px solid rgba(0,0,0,0.3)"
                }}
                containerStyle={{
                  margin:'5px auto 20px auto',
                  flexDirection:'row',
                  justifyContent:'center'
                }}
                focusStyle={{
                  outline:'none',
                  color:'white'
                }}
                isInputNum
              />
              {/* <OtpContainer>
                <OtpInnerContainer>
                  <OtpTextField
                    defaultValue="1"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    type="Number"
                  />
                </OtpInnerContainer>
                <OtpInnerContainer>
                  <OtpTextField
                    defaultValue="2"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </OtpInnerContainer>
                <OtpInnerContainer>
                  <OtpTextField
                    defaultValue="3"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </OtpInnerContainer>
                <OtpInnerContainer>
                  <OtpTextField
                    defaultValue="4"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </OtpInnerContainer>
              </OtpContainer> */}
              <TextField
                variant="outlined"
                fullWidth
                label="Enter password"
                name="password"
                InputLabelProps={{
                  style: { color: "whitesmoke" },
                }}
                type="password"
              />
              <TextField
                variant="outlined"
                fullWidth
                label="Confirm password"
                name="confirmPassword"
                InputLabelProps={{
                  style: { color: "whitesmoke" },
                }}
                type="password"
              />

              <Button1 type="submit">Verify</Button1>

              <ResendButton>RESEND</ResendButton>
            </FormContainer>
          </Form>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default LoginScreen;
