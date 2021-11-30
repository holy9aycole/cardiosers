import React from "react";
 import {
  
  TextField,
  Button,
  Typography
} from "@mui/material"; 

import { useStyles } from "./styles";
import Logo from '../../assets/images/rmz-logo.svg'
import mailIcon from '../../assets/images/email-icon.svg'

function LoginScreen() {
  const classes = useStyles();
  
  return (
    <>
     <div className={classes.mainContainer}>
        <img src={Logo} alt="" className={classes.logo}/>
        <Typography className={classes.text2}>FUTURE OF SPACE<sup style={{fontSize:"8px"}}> TM</sup></Typography>
        <div className={classes.formContainer}>
            <img src={mailIcon} alt="" className={classes.mailicon}/>
            <TextField label="Enter you Email" className={classes.textField}/>
            <Button className={classes.button}>GET OTP</Button>
            <Typography className={classes.text1}>Check you email inbox for OTP</Typography>
        </div>
     </div>
    </>
  );
}

export default LoginScreen;
