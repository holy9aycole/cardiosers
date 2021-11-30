import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
// material
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Toolbar, IconButton } from "@mui/material";
// hooks
import useCollapseDrawer from "../../hooks/useCollapseDrawer";
// components
// import { MHidden } from "../../components/@material-extend";
import Searchbar from "../dashboard/Searchbar";
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
  }
}))

// ----------------------------------------------------------------------

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
  title: PropTypes.string
};

// ----------------------------------------------------------------------

export default function MainNavbar(props) {
  const { isCollapse } = useCollapseDrawer();


  return (
    <RootStyle
      sx={{
        ...(isCollapse),
      }}
    >
      <ToolbarStyle>
        <StyledLogo />
        <StyledSearchIcon />
        <NavbarHeading>{props.title}</NavbarHeading>
        <SearchBarBox>
          <StyledSearchbar />
          <IconButton
            onClick={props.onOpenSidebar}
            sx={{ color: "text.primary" }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </SearchBarBox>
      </ToolbarStyle>
    </RootStyle>
  );
}
