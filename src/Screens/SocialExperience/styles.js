import { makeStyles } from "@mui/styles";
import { FormControl, styled } from "@mui/material";
import Button from "@mui/material/Button";

export const useStyles = makeStyles(() => ({
  option: {
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: 600,
    color: "#3D3DD9",
    background: "white",
  },

  gridItemContainer: {
    textAlign: "center",
  },
}));

export const MainContainer = styled("div")(({ theme }) => ({
  windth: "100%",
  //   border: "1px solid red",
  height: "auto",
  padding: "1px 8% 25px 8%",
  marginTop: "5.5%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    marginTop: "18%",
    padding: "15px 0px 0px 0px",
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "18%",
    padding: "0px 12% 0px 12%",
  },
}));

export const FilterContainer = styled("div")(({ theme }) => ({
  width: "100%",
  //   border: "1px solid green",
  height: "auto",
  padding: "1px 5%",
  marginTop: "5%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  [theme.breakpoints.only("xs")]: {
    padding: "1px 3%",
  },
}));

export const FilterButton = styled(Button)(() => ({
  background: "#3D3DD9",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    background: "#3D3DD9",
  },
}));

export const SelectStyle = styled(FormControl)(({ theme }) => ({
  minWidth: 180,
  width: 280,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
