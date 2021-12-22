import { makeStyles } from "@mui/styles";
import { InputBase, styled, Button } from "@mui/material";

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
  padding: "10px 20px",

  "& .filterContainer": {
    border: "1px solid #E0E0E0",
    fontSize: "13px",
    width: "auto",
    height: "37px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    margin: "10px 0px",
    color: "#808080",
    cursor: "pointer",
    "&:hover": {
      background: "#3D3DD9",
      color: "white",
    },
  },
  "& .gridItems": {
    padding: "0px 8px",
  },
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

export const BootstrapInput2 = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    marginTop: "5px",
    borderRadius: 10,
    position: "relative",

    border: "1px solid #8489C1",
    fontSize: 16,
    width: "300px",
    padding: "10px 8px",
    height: "30px",

    fontFamily: "Poppins",
    [theme.breakpoints.only("xs")]: {
      width: "250px",
    },
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    marginTop: "5px",
    borderRadius: 10,
    position: "relative",

    border: "1px solid #8489C1",
    fontSize: 16,
    width: "300px",
    padding: "10px 8px",

    height: "70px",

    fontFamily: "Poppins",
    [theme.breakpoints.only("xs")]: {
      width: "250px",
    },
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
