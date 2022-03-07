import { styled, Card } from "@mui/material";
import Switch from "@mui/material/Switch";

export const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Container = styled("div")(({ theme }) => ({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 81,
  width: "97vw",
  [theme.breakpoints.down("sm")]: {
    marginTop: 60,
  },
}));

export const ImageCard = styled(Card)({
  borderRadius: 2,
  cursor: "pointer",
});

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  left: "46.5%",
  marginBottom: 10,
  width: "8%",
  [theme.breakpoints.only("lg")]: {
    width: "8.5%",
  },
  [theme.breakpoints.only("md")]: {
    width: "10.5%",
  },
  [theme.breakpoints.only("sm")]: {
    width: "22%",
    left: "41.5%",
  },
  [theme.breakpoints.only("xs")]: {
    width: "29.5%",
    left: "36.5%",
  },
  padding: 10,
  height: 55,
  "& .MuiSwitch-switchBase": {
    top: 4,
    left: 1,
    [theme.breakpoints.only("xs")]: {
      left: 3,
    },
    [theme.breakpoints.only("md")]: {
      left: 5,
    },
    [theme.breakpoints.only("xl")]: {
      left: 4,
    },
    "&.Mui-checked": {
      color: "#000",
      opacity: 0.5,
      [theme.breakpoints.only("xs")]: {
        transform: "translateX(125%)",
      },
      [theme.breakpoints.only("sm")]: {
        transform: "translateX(196%)",
      },
      [theme.breakpoints.only("md")]: {
        transform: "translateX(105%)",
      },
      [theme.breakpoints.up("lg")]: {
        transform: "translateX(140%)",
      },
      [theme.breakpoints.only("xl")]: {
        transform: "translateX(155%)",
      },
      "+ .MuiSwitch-track": {
        backgroundColor: "#3D3DD9",
        opacity: 1,
        "&:after": {
          display: "block",
        },
        "&:before": {
          display: "none",
        },
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 24,
    height: 24,
    margin: 0,
    marginTop: 2,
  },
  "& .MuiSwitch-track": {
    borderRadius: 40 / 2,
    backgroundColor: "#444",
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    "&:after , &:before": {
      position: "absolute",
      transform: "translateY(-50%)",
      top: "50%",
      color: "#fff",
      fontSize: "90%",
    },
    "&:after": {
      display: "none",
      content: "'Videos'",
      left: "16%",
    },
    "&:before": {
      content: "'Photos'",
      left: "40%",
    },
  },
}));

export const FileDownloadButton = styled("div")(({ theme }) => ({
  backgroundColor: "#3D3DD9",
  zIndex: 2000,
  position: "fixed",
  left: "38%",
  bottom: "7.5vh",
  height: "50px",
  width: "50px",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "> svg": {
    fill: "#FFF",
  },
  [theme.breakpoints.down("md")]: {
    left: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    bottom: "5.5vh",
    left: "15%",
  },
}));
