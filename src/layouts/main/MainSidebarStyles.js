import { makeStyles } from "@mui/styles";
import { styled, ListItem } from "@mui/material";

export const useStyles = makeStyles(() => ({}));

export const LinkContainer = styled("div")(() => ({
  background: "#3D3DD9",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  position: "relative",
  zIndex: 5,

  "& .shadow": {
    position: "absolute",

    bottom: 0,
    left: 0,
    zIndex: 10,
  },
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

export const Links = styled(ListItem)(() => ({
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
