import { makeStyles } from "@mui/styles";
import { Grid, styled } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // border: "1px solid red",
  },
  container: {
    width: "70%",
    height: "580px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  right: {},
}));

export const SustainableImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: "15%",
    borderBottomRightRadius: "15%",
  },
}));

export const TextContainer = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  display: "flex",
  justifyContent: "center",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    height: "230px",
  },
}));

export const Description = styled("div")(({ theme }) => ({
  width: "70%",
  height: "auto",
  marginTop: "25%",
  position: "relative",
  background: "transparent",
  // border: "1px solid red",

  [theme.breakpoints.down("md")]: {
    width: "90%",
    marginTop: "5%",
  },

  "& .text1": {
    color: "#3D3DD9",
    letterSpacing: ".44dp",
    textAlign: "left",
    fontSize: "24px",
  },
  "& .text2": {
    color: "#202020",
    fontWeight: "Light",
    fontSize: "18px",
    fontFamily: "Poppins",
    marginTop: "5px",

    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  "& .line": {
    height: "1px",
    border: "1px solid #2E2E80",
    width: "35%",
  },
}));

export const Shadow = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  // border: "1px solid green",
  zIndex: 5,
  top: "22.5%",

  right: 0,
  [theme.breakpoints.only("sm")]: {
    width: "79%",
    height: "79%",
    top: "22%",

    right: "60%",
  },
  [theme.breakpoints.only("xs")]: {
    width: "79%",
    height: "79%",
    top: "27%",

    right: "60%",
  },
}));

export const LeftIconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  background: "#90A4AE",
  boShadow: "0px 15px 20px #00000033",

  alignItems: "center",

  cursor: "pointer",
  zIndex: 10,
  // pointerEvents: "none",

  width: "41px",
  height: "41px",
  borderRadius: "50%",
  position: "absolute",
  bottom: 25,
  left: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  "& .leftIcon": {},
}));
export const RightIconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  background: "#3D3DD9",
  boShadow: "0px 15px 20px #00000033",

  alignItems: "center",
  cursor: "pointer",

  zIndex: 10,

  width: "41px",
  height: "41px",
  borderRadius: "50%",
  position: "absolute",
  bottom: 25,
  left: 55,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  "& .leftIcon": {},
}));

export const NumberContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  position: "absolute",
  right: 0,
  bottom: 32,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  "& .one": {
    fontSize: "14px",
    color: "#3D3DD9",
    letterSpacing: ".28px",
    paddingRight: "5px",
  },
  "& .six": {
    fontSize: "14px",
    color: "#90A4AE",
    letterSpacing: ".28px",
    paddingLeft: "5px",
  },
}));
export const BottomMobile = styled("div")(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  "& .number": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    position: "absolute",
    bottom: "10%",
    left: "-10%",
  },
  "& .one": {
    fontSize: "14px",
    color: "#3D3DD9",
    letterSpacing: ".28px",
    paddingRight: "5px",
  },
  "& .six": {
    fontSize: "14px",
    color: "#90A4AE",
    letterSpacing: ".28px",
    paddingLeft: "5px",
  },
  "& .MobileLine": {
    height: "1px",
    border: "1px solid #2E2E80",
    width: "35%",
  },
  "& .leftContainer": {
    display: "flex",
    justifyContent: "center",
    background: "#90A4AE",
    boShadow: "0px 15px 20px #00000033",

    alignItems: "center",
    cursor: "pointer",

    width: "31px",
    height: "31px",
    borderRadius: "50%",
    position: "absolute",
    bottom: "7%",
    right: 70,
  },
  "& .rightConatiner": {
    display: "flex",
    justifyContent: "center",
    background: "#3D3DD9",
    boShadow: "0px 15px 20px #00000033",

    alignItems: "center",
    cursor: "pointer",

    width: "31px",
    height: "31px",
    borderRadius: "50%",
    position: "absolute",
    bottom: "7%",
    right: 25,
  },
  "& .arrowContaiiner": {
    display: "flex",
    justifyContent: "space-between",
  },
}));
