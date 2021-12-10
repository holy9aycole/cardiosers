import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const { styled, Select } = require("@mui/material");


export const PropertyPage = styled("div")({
	height: "100%",
});

export const BannerContainer = styled("div")(({ theme }) => ({
	width: "100%",
	height: "233px",
	overflow: "hidden",
	marginTop: 81,
	[theme.breakpoints.down("md")]: {
		marginTop: 60,
	},
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

export const BannerImage = styled("img")({
	width: "100%",
	height: 233,
});

export const Overlay = styled("div")(({ theme }) => ({
	width: "100%",
	background: "rgba(61,61,217,0.6)",
	height: 233,
	position: "absolute",
	top: 81,
	[theme.breakpoints.down("md")]: {
		top: 60,
	},
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
	zIndex: 2,
}));

export const StyledSelect = styled(Select)({
	width: "30%",
    marginTop:20,
	position: "relative",
	left: "50%",
	transform: "translateX(-50%)",
    top:"-20%",
    zIndex:3,
    border:"1px solid #3D3DD9",
    color:"#fff"
});

export const StyledSelectIcon = styled(ArrowDropDownIcon)({
    color:"#3D3DD9"
})