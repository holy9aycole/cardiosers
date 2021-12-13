import { makeStyles } from "@mui/styles";
import { Card, styled } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
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

export const CommentBox = styled(Card)(({ theme }) => ({
  padding: "20px 20px",
  borderRadius: "0px",
  width: "40%",
  height: "auto",
  background: "#FFFFFF",
  margin: "10px auto",
  display: "flex",

  justifyContent: "space-between",
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
  "& .ask": {
    margin: "auto",
    border: ".5px solid #78909C",
    borderRadius: "25px",
    background: "#FFFFFF",
    height: "50px",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  "& .ques": {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "18px",
    color: "#3D3DD9",
    letterSpacing: ".48px",

    marginRight: "5px",
  },
}));
