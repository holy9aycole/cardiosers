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
import Searchbar from "./Searchbar";
import { ReactComponent as Logo } from "../../assets/rmz-logo.svg";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
	boxShadow: "none",
	backdropFilter: "blur(6px)",
	WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
	backgroundColor: alpha("#3D3DD9", 1),
	[theme.breakpoints.up("lg")]: {
		width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
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

const StyledSearchbar = styled(Searchbar)(({theme})=>({
	[theme.breakpoints.down("sm")]: {
		display: "none",
	}
}))

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
	onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
	const { isCollapse } = useCollapseDrawer();

	return (
		<RootStyle
			sx={{
				...(isCollapse && {
					width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` },
				}),
			}}
		>
			<ToolbarStyle>
				<StyledLogo />
				<StyledSearchIcon />
				<NavbarHeading>What's New</NavbarHeading>
				<SearchBarBox>
					<StyledSearchbar />
					<IconButton
						onClick={onOpenSidebar}
						sx={{ color: "text.primary" }}
					>
						<Icon icon={menu2Fill} />
					</IconButton>
				</SearchBarBox>
			</ToolbarStyle>
		</RootStyle>
	);
}
