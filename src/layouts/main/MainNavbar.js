import PropTypes from "prop-types";
// material
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Select,
  //   InputBase,
  TextField,
} from "@mui/material";
// import Searchbar from "layouts/main/Searchbar";
import { Link as RouterLink } from "react-router-dom";
// components
import { useState } from "react";
import MainSidebar from "layouts/main/MainSidebar";
import { ReactComponent as Logo } from "assets/rmz-logo.svg";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import useProperties from "hooks/useProperties";
import _ from "lodash";
import { getLocation } from "redux/slices/location";
import { useDispatch, useSelector } from "react-redux";
// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 81;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha("#3D3DD9", 1),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - 0px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 20px",
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const SearchBarBox = styled("div")({
  display: "flex",
  alignItems: "center",
});

// const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
//   position: "absolute",
//   [theme.breakpoints.up("sm")]: {
//     display: "none",
//   },
// }));

const NavbarHeading = styled("div")(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bold",
  textTransform: "uppercase",
  marginLeft: "50px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
    marginLeft: "0px",
  },
}));

const StyledLogo = styled(Logo)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // display: "none",
  },
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const BootstrapInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "#ffffff",
  border: "1px solid #ced4da",
  borderRadius: 6,
  outline: "none",
  paddingLeft: 4,
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: "none",
      borderColor: theme.palette.primary.main,
    },
  },
}));

const IconContainer = styled("div")(() => ({
  width: "30px",
  height: "25px",
}));

const Line = styled("div")(() => ({
  width: "100%",
  height: "3px",
  background: "#FFFFFF",
  marginBottom: "8.5px",
}));
const Line2 = styled("div")(() => ({
  width: "50%",
  height: "3px",
  display: "flex",
  justifyContent: "flex-start",
  background: "#FFFFFF",
}));

const NavbarHeadingSelect = styled(Select)(({ theme }) => ({
  marginTop: -3,
  marginLeft: 2,
  color: "#FFF",
  fontSize: 20,
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));

// ----------------------------------------------------------------------

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

export default function MainNavbar(props) {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const { properties } = useProperties();
  const dispatch = useDispatch();

  const cities = [];
  properties.map((item) => cities.push(item?.City));
  const uniqueCities = _.uniq(cities);

  const { location } = useSelector((state) => state.location);

  const handleChange = (e) => {
    dispatch(getLocation(e.target.value));
  };

  return (
    <RootStyle>
      <ToolbarStyle>
        <RouterLink to="/home">
          <StyledLogo />
        </RouterLink>
        {/* <StyledSearchIcon /> */}
        {props.titleOptions ? (
          <NavbarHeading>
            {props.title}
            {props.titleOptions && (
              <>
                &nbsp; - &nbsp;
                <FormControl variant="standard">
                  <NavbarHeadingSelect
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={location}
                    onChange={handleChange}
                    defaultValue="all"
                  >
                    <MenuItem value="all">All</MenuItem>
                    {uniqueCities.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </NavbarHeadingSelect>
                </FormControl>
              </>
            )}
          </NavbarHeading>
        ) : (
          <NavbarHeading>{props.title}</NavbarHeading>
        )}
        <SearchBarBox>
          <FormControlStyled variant="standard">
            <BootstrapInput
              variant="standard"
              defaultValue=""
              placeholder="Search..."
              id="bootstrap-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginRight: "-5px" }}
                  >
                    <SearchIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </FormControlStyled>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{}}>
            <IconContainer>
              <Line />
              <Line />
              <Line2 />
            </IconContainer>
          </IconButton>
        </SearchBarBox>
      </ToolbarStyle>

      <MainSidebar
        isDrawerOpen={DrawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
      />
    </RootStyle>
  );
}
