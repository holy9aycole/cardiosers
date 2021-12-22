import { styled } from "@mui/material";
import { Card, Typography } from "@mui/material";

export const GalleryCard = styled(Card)(({ theme }) => ({
	width: "30%",
	borderRadius: 25,
	background: "#eee",
	color: "#000",
	height: 320,
	margin: "10px 0px",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
	"& img": {
		height: "100%",
		width: "100%",
	},
	overflow: "visible",
	cursor: "pointer",
}));

export const GalleryCardText = styled(Typography)(({ theme }) => ({
	fontSize: 25,
	color: "#FFF",
	position: "relative",
	marginLeft: 20,
	bottom: 70,
	height: 30,
	fontFamily: "Ivypresto Display",
	[theme.breakpoints.down("sm")]: {
		fontSize: 20,
	},
	zIndex: 3,
}));

export const StyledDiv = styled("div")({
	width: "100%",
	height: 100,
	position: "absolute",
	top: 225,
	zIndex: 2,
	background:
		"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(46,46,128,0.5) 50%, rgba(46,46,128,1) 100%)",
	borderRadius: "0px 0px 25px 25px "
});
