import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Stack } from "@mui/material";

export const useStyles = makeStyles(() => ({
  formText: {
    color: "white",
  },
  card: {
    backgroundColor: "transparent",
    border: "2px solid",
  },
}));

export const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
  },
}));

export const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: "auto",
    textAlign: "center",
    position: "relative",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  })
);

export const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
