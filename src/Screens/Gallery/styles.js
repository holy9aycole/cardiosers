import { styled } from "@mui/material";

export const GalleryCardContainer = styled("div")(({ theme }) => ({
  marginTop: 130,
  padding: 10,
  width: "100%",
  height: "70%",
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginBottom: 100,
    height: "100%",
  },
}));
