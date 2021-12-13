import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material";

export const useStyles = makeStyles(() => ({
  divider: {},
}));

export const MainContainer = styled("div")(({ theme }) => ({
  marginTop: "8%",
  // border: "1px solid red",
  width: "auto",
  height: "auto",
  [theme.breakpoints.only("sm")]: {
    marginTop: "12%",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "25%",
  },
}));
