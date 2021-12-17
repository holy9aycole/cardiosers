import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  heading: {
    fontFamily: "Poppins",
    color: "#3D3DD9",
    fontWeight: "bold",
    fontSize: "24px",
    letterSpacing: ".16px",
    textAlign: "center",
  },
  inputHeading: {
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "Medium",
    color: "#202020",

    textAlign: "left",
  },
  inputContainer: {
   margin: "30px auto",
  },
  inputtext: {
    width: "100%",
    marginTop: "7px",
  },
  line: {
    margin: "10px 0px",
  },
}));

export const MainContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: "0px 10%",
}));
