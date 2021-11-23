import { makeStyles } from "@mui/styles";
import { styled, Typography } from "@mui/material";

export const useStyles = makeStyles(() => ({
  mainContainer: {},
}));

export const MainContainer = styled("div")(({ theme }) => ({
  windth: "100%",

  height: "auto",
  padding: "1px 8%",
  marginTop: "5.5%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    marginTop: "18%",
    padding: "15px 0px 0px 0px",
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "18%",
    padding: "0px 12% 0px 12%",
  },

  "& .shadow": {
    position: "absolute",
    left: 0,
    top: 0,
  },
}));

export const Line = styled("div")(({ theme }) => ({
  marginTop: "6%",
  width: "12%",
  height: "2px",
  border: "1px solid #D6D6D6",
  marginLeft: "2.4%",
  [theme.breakpoints.down("md")]: {
    width: "15%",
    marginLeft: "5%",
  },
}));

export const Text1 = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: "Regular",
  textAlign: "left",
  color: "#3D3DD9",
  letterSpacing: "0.48px",
  fontFamily: "Poppins",
  marginTop: ".3%",
  marginLeft: "2.3%",
  width: "80%",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
    width: "80%",
    marginLeft: "5%",
    marginTop: "2.5%",
  },
  //   [theme.breakpoints.only("sm")]: {
  //     fontSize: "32px",
  //     width: "80%",
  //     marginLeft: "5%",
  //     marginTop: "2.5%",
  //   },
}));
export const Text2 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "Medium",
  textAlign: "left",
  color: "#202020",
  fontFamily: "Poppins",
  marginTop: ".5%",
  marginLeft: "2.3%",
  width: "65%",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    width: "80%",
    marginLeft: "5%",
    marginTop: "3.5%",
  },
}));
