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
	width: "88vw",
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
	width: "8.5%",
	[theme.breakpoints.only("lg")]:{
		width:"9.5%",

	},
	[theme.breakpoints.only("sm")]:{
		width:"24.5%",
		left:"41.5%"
	},
	[theme.breakpoints.only("xs")]:{
		width:"31.5%",
		left:"39.5%"
	},
	padding: 10,
	height: 50,
	"& .MuiSwitch-switchBase": {
		transform: "translateX(7%)",
		top: 4,
		left: 1,
		"&.Mui-checked": {
			color: "#000",
			opacity: 0.5,
			[theme.breakpoints.only("xs")]:{
				transform:"translateX(121%)"
			},
			[theme.breakpoints.only("sm")]: {
				transform: "translateX(156%)",
			},
			[theme.breakpoints.up("lg")]: {
				transform: "translateX(140%)",
			},
			[theme.breakpoints.only("xl")]: {
				transform: "translateX(126%)",
			},
			"+ .MuiSwitch-track": {
				backgroundColor: "#3D3DD9",
				opacity: 1,
				"&:after": {
					display: "block",
				},
			},
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "none",
		width: 20,
		height: 20,
		margin: 2,
	},
	"& .MuiSwitch-track": {
		borderRadius: 40 / 2,
		backgroundColor: "#444",
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
		"&:after": {
			display: "none",
			position: "absolute",
			transform: "translateY(-50%)",
			content: "'Videos'",
			left: "16%",
			top: "50%",
			color: "#fff",
			fontSize: "90%",
		},
	},
}));
