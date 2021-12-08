import { makeStyles } from "@mui/styles";
import { Card, styled } from "@mui/material";

export const useStyles = makeStyles(() => ({
  divider: {},
}));

export const Feed = styled(Card)(({ theme }) => ({
  //   border: ".5px solid red",
  padding: "10px 20px",
  borderRadius: "0px",
  width: "40%",
  height: "auto",
  background: "#FFFFFF",
  margin: "10px 0px",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    padding: "10px 10px",
  },
  [theme.breakpoints.only("sm")]: {
    width: "60%",
  },
  [theme.breakpoints.only("md")]: {
    width: "60%",
  },
  "& .heading": {
    fontSize: "18px",
    fontFamily: "IvyPresto Display",
    fontWeight: 600,
    color: "#3D3DD9",
    letterSpacing: ".44px",
  },
  "& .subheading": {
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#202020",
    margin: "10px 0px 0px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px   ",
    },
  },
  "& .line": {
    margin: "20px 0px 10px 0px",
  },
}));

export const FeedFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0px",
  "& .tag": {
    display: "flex",

    alignItems: "center",
  },
  "& .text1": {
    marginLeft: "7px",
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "Regular",
    color: "#78909C",
  },
}));
