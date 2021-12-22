import { makeStyles } from "@mui/styles";
import { styled, ListItem } from "@mui/material";

export const useStyles = makeStyles(() => ({
  heading: {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#3D3DD9",
    fontFamily: "Poppins",
    marginTop: "20px",
  },
}));

export const LinkContainer = styled("div")(() => ({
  background: "white",
  width: "200px",
  height: "100%",
  overflowX: "hidden",
  position: "relative",
  zIndex: 5,
}));

export const CloseIconContainer = styled(ListItem)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  cursor: "pointer",

  "& .icon": {
    width: "40px",
    height: "40px",
    color: "white",
  },
}));
export const Filter = styled("div")(() => ({
  // border: "1px solid red",
  display: "flex",
  justifyContent: "center",

  "& .filterContainer": {
    border: "1px solid #E0E0E0",
    fontSize: "18px",
    width: "130px",
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
}));

export const Links = styled(ListItem)(() => ({
  //   border: ".5px solid red",
  width: "360px",
  marginLeft: "5%",
  padding: "17px 20px",
  position: "relative",
  zIndex: 20,

  "& .linkNav": {
    color: "white",
    fontFamily: "Poppins",
  },
}));
