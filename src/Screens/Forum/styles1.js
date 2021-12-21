import { makeStyles } from "@mui/styles";
import { styled, Button } from "@mui/material";

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
    // border: "1px solid red",

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
  //   border: "1px solid red",
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: "0px 10%",
}));

export const Submit = styled(Button)(({ theme }) => ({
  background: "#3D3DD9",
  marginTop: "40px",
  width: "100%",
  height: "50px",
  color: "white",
  display: "block",
  [theme.breakpoints.only("xs")]: {
    width: "250px",
  },

  "&:hover": {
    background: "#3D3DD9",
    color: "white",
  },
}));
