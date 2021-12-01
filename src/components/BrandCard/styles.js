import { makeStyles } from "@mui/styles";
import { Card, styled } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "4% 1%",
  },

  gridItemContainer: {
    textAlign: "center",

    padding: "0px 12%",
    [theme.breakpoints.only("xs")]: {
      padding: "0px 0px",
    },
  },
}));

export const CardFooter = styled(Card)(() => ({
  background: "#2E2E80 0% 0% no-repeat padding-box",
  borderRadius: "15px",
  height: "auto",
  width: "100%",
  textAlign: "left",
  padding: "0px 35px",
  position: "relative",

  "& .text2": {
    color: "#FFFFFF",
    letterSpacing: ".44px",
    fontSize: "24px",
    fontWeight: 400,
    marginTop: "25px",
    fontFamily: "Poppins",
  },
  "& .text3": {
    color: "#FFFFFF",
    fontWeight: "Light",
    fontSize: "15px",
    fontFamily: "Poppins",
    margin: "15px 0px 30px 0px",
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

  marginBottom: "-30px",
  justifyContent: "center",
  position: "relative",

  "& .ImageContainer": {
    width: "100%",

    height: "265px",
    borderRadius: "15px",
  },
  "& .siteImage": {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  "& .Logo": {
    position: "absolute",
    width: "130px",
    height: "132px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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

export const Download = styled("div")(({ theme }) => ({
  width: "47px",
  height: "47px",
  background: "#3D3DD9",
  borderRadius: "50%",
  boxShadow: "0px 15px 20px #00000066",
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 18,
  right: 30,
  // right: 150,
  cursor: "pointer",
  [theme.breakpoints.only("xs")]: {
    width: "41dp",
    height: "41dp",
  },
  "& .DIcon": {
    width: "18.29px",
    height: "17.17px",
  },
}));
