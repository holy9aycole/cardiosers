import PropTypes from "prop-types";
// import { Icon } from "@iconify/react";
// import menu2Fill from "@iconify/icons-eva/menu-2-fill";
// material
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import Searchbar from "layouts/main/Searchbar";

// components
import { useState } from "react";
import MainSidebar from "layouts/main/MainSidebar";
import { ReactComponent as Logo } from "../../assets/rmz-logo.svg";

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

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavbarHeading = styled("div")(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bold",
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));

const StyledLogo = styled(Logo)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledSearchbar = styled(Searchbar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
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

// ----------------------------------------------------------------------

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

export default function MainNavbar(props) {
  const [DrawerOpen, setDrawerOpen] = useState(false);

  return (
    <RootStyle>
      <ToolbarStyle>
        <StyledLogo />
        <StyledSearchIcon />
        <NavbarHeading>{props.title}</NavbarHeading>
        <SearchBarBox>
          <StyledSearchbar />
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
