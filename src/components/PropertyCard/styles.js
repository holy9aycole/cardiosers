import { makeStyles } from "@mui/styles";
import { Card, styled } from "@mui/material";

export const useStyles = makeStyles(() => ({
  cardContainer: {
    padding: "2% 2%",
  },

  gridItemContainer: {
    textAlign: "center",
  },
}));

export const CardFooter = styled(Card)(() => ({
  background: "#2E2E80 0% 0% no-repeat padding-box",
  borderRadius: "15px",
  height: "auto",
  width: "100%",
  marginTop: "-20px",
  textAlign: "left",
  padding: "0px 35px",
  position: "relative",
  "& .text2": {
    color: "#FFFFFF",
    letterSpacing: ".44px",
    fontSize: "22px",
    fontWeight: 400,
    marginTop: "15px",
  },
  "& .text3": {
    color: "#FFFFFF",
    fontWeight: "Light",
    fontSize: "15px",
    fontFamily: "Poppins",
    marginTop: "15px",

    maxWidth: "90%",
  },
}));

export const Time = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "15px 0px",
  "& .clock": {
    width: "16px",
    height: "16px",
    marginRight: "6px",
  },
  "& .ago": {
    color: "#FFFFFF",
    fontSize: "12px",
    fontWeight: "Regular",
    fontFamily: "Poppins",
  },
}));

export const FooterShadow = styled("img")(() => ({
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
}));

export const CardHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  "& .ImageContainer": {
    width: "95%",

    height: "265px",
    borderRadius: "15px 15px 0px 0px",
  },
  "& .siteImage": {
    width: "100%",
    height: "100%",
    position: "relative",
  },
}));

export const ImageTag = styled("div")(() => ({
  position: "absolute",
  left: "20px",
  bottom: "40px",
  display: "flex",
  alignItems: "center",
  "& .tagIcon": {
    width: "16px",
    height: "16px",
    margin: "0px 5px",
  },
  "& .tagTitle": {
    color: "#FFFFFF",
    letterSpacing: ".42px",

    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 600,
  },
}));
