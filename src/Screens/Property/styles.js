import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Bg from "assets/images/Map-bg-web.png";

export const IndiaMap = styled("img")(({ theme }) => ({
  display: "block",
  margin: "0px auto",
  width: "50vw",
  [theme.breakpoints.down("sm")]: {
    margin: "140px auto",
    width: "100vw",
  },
}));

export const MainContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  height: "90vh",
  backgroundSize: "cover",
  marginTop: "81px",
  paddingTop: "40px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "66px",
    height: "80vh",
    width: "100vw",
  },
}));

export const Text1 = styled(Typography)(({ theme }) => ({
  color: "#3d3dd9",
  fontSize: "48px",
  fontFamily: "IvyPresto",
  letterSpacing: "0.48px",
  lineHeight: "50px",
  position: "absolute",
  marginLeft: "60px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    marginLeft: "30px",
    lineHeight: "40px",
  },
}));
