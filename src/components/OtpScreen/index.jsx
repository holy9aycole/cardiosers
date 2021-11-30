import React from "react";
 import {
  TextField,
  Button,
  Typography
} from "@mui/material"; 
import { FormContainer, useStyles } from "./styles";
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
            <div className={classes.otpContainer}>
                <div className={classes.otpInnerContainer}>2</div>
                <div className={classes.otpInnerContainer}>3</div>
                <div className={classes.otpInnerContainer}>4</div>
                <div className={classes.otpInnerContainer}>5</div>
            </div>
            <Button className={classes.button}>Verify</Button>
            <Button className={classes.resendButton}>RESEND</Button>
        </FormContainer>
     </div>
    </>
  );
}

export default LoginScreen;
