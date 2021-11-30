import React from "react";
 import {
  
  TextField,
  Button,
  Typography
} from "@mui/material"; 
import { FormContainer, useStyles } from "./styles";
// import { useStyles } from "./styles";
import Logo from '../../assets/images/rmz-logo.svg'
import mailIcon from '../../assets/images/email-icon.svg'

function LoginScreen() {
  const classes = useStyles();
  
  return (
    <>
     <div className={classes.mainContainer}>
        <img src={Logo} alt="" className={classes.logo}/>
        <Typography className={classes.text2}>FUTURE OF SPACE<sup style={{fontSize:"8px"}}> TM</sup></Typography>
        <FormContainer>
            <img src={mailIcon} alt="" className={classes.mailicon}/>
            <TextField label="Enter you Email" className={classes.textField}/>
            <Button className={classes.button}>GET OTP</Button>
            <Typography className={classes.text1}>Check you email inbox for OTP</Typography>
        </FormContainer>
     </div>
    </>
  );
}

export default LoginScreen;
