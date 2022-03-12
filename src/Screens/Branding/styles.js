import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "4% 1%",
  },

  gridItemContainer: {
    textAlign: "center",
    marginTop: "7%",

    padding: "0px 12%",
    [theme.breakpoints.only("xs")]: {
      padding: "0px 0px",
      marginTop: "25%",
    },
  },
}));
