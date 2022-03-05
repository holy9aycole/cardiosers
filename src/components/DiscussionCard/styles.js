import { makeStyles, withStyles } from "@mui/styles";
import { Card, InputBase, styled } from "@mui/material";

export const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: "30px",

    border: "1px solid #90A4AE",
    marginTop: "5px",
    backgroundColor: theme.palette.background.paper,
    // width: "100%",
    height: "50px",
    fontSize: "13.28px",
    paddingLeft: "10px",

    "&:focus": {
      borderRadius: "30px",
      border: "1px solid #BEBEC3",
    },
  },
}))(InputBase);

export const useStyles = makeStyles({
  input: {
    width: "87%",
    border: ".5px solid #90A4AE",
    fontSize: "13px",
    fontFamily: "Poppins",
    color: "#90A4AE",
  },
  input2: {
    width: "85%",
  },
});

export const Feed = styled(Card)(({ theme }) => ({
  //   border: ".5px solid red",
  padding: "10px 20px",
  borderRadius: "0px",
  width: "40%",
  height: "auto",
  background: "#FFFFFF",
  margin: "10px auto",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    padding: "10px",
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
    fontWeight: "Medium",
    color: "#202020",

    margin: "20px 0px 15px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  "& .line": {
    margin: "20px 0px 10px 0px",
  },
}));

export const FeedFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0px 0px 0px",
  "& .tag": {
    display: "flex",

    // border: ".2px solid red",
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

export const Comments = styled(Card)(({ theme }) => ({
  borderRadius: "0px",
  padding: "0px 20px",
  width: "40%",
  height: "auto",
  background: "#FFFFFF",
  margin: "10px auto",
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    padding: "0px 10px",
  },
  [theme.breakpoints.only("sm")]: {
    width: "60%",
  },
  [theme.breakpoints.only("md")]: {
    width: "60%",
  },
  "& .text3": {
    fontSize: "18px",
    letterSpacing: ".45px",
    fontFamily: "IvyPresto Display",
    margin: "20px 10px",
  },
  "& .commentDivider": {
    margin: "20px 0px 10px 0px",
  },
}));

export const CommentSection = styled("div")(({ theme }) => ({
  margin: "10px 10px",
  display: "flex",

  "& .userContainer": {
    marginRight: "10px",
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px",
    },
  },

  "& .user": {
    background: "#90A4AE",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20px",
  },
  "& .commentHeading": {
    fontFamily: "IvyPresto Display",
    fontSize: "18px",
    color: "#78909C",
    fontWeight: "Regular",
    marginTop: "10px",
  },
  "& .commentDesc": {
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: "Medium",
    textAlign: "left",
    margin: "10px 0px 15px 0px",
  },
  "& .comment": {
    marginRight: "2px",
    width: "100%",
  },
}));

export const TagTime = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
  //   paddingRight: "10px",
  "& .time": {
    display: "flex",
    alignItems: "center",
  },
  "& .ago": {
    fontSize: "12px",
    fontFamily: "Poppins",
    fontWeight: "Regular",
    color: "#78909C",
    marginLeft: "8px",
  },
  "& .edit": {
    cursor: "pointer",
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
  alignItems: "center",
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
  "& .input": {
    border: ".5px solid #90A4AE",
    borderRadius: "20px",
  },

  "& .btn": {
    background: "#3D3DD9",
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));
