import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";

function SplashScreen() {
  const classes = useStyles();
  return (
    <div>
      <div className="row">
        <div className="col-lg p-0">
          <img
            className={`${classes.image}`}
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ6ttL6asWwZCW6cPMthT-Z463W7N_wRZqA&usqp=CAU"
          />
        </div>
        <div className={`col-lg p-2 ${classes.content}`}>
          <div className="row">
            <img
            className = {classes.logo}
              alt="logo"
              src="https://qph.fs.quoracdn.net/main-qimg-9d50a5cdb7105f795cd43497094a0cd3-lq"
            />
          </div>
          <div className="row">
            <Typography variant="h1" color="white">
              CRAFTING SPACES THAT CONNECT SOCIALLY
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
