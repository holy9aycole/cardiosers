import { makeStyles } from "@mui/styles";
import { styled, Button } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    fontSize: "16px",
    letterSpacing: ".16px",
    color: "#3D3DD9",
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  inputheading: {
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: 500,
    color: "#202020",
    marginTop: "20px",
  },
  container: {
    display: "flex",
    width: "330px",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      width: "255px",
    },
  },
}));

export const MainContainer = styled("div")(() => ({
  width: "auto",
  height: "auto",
  display: "flex",
  justifyContent: "center",
}));

export const Submit = styled(Button)(({ theme }) => ({
  background: "#3D3DD9",
  marginTop: "40px",
  width: "315px",
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
