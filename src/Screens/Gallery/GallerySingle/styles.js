import { styled, Card } from "@mui/material";
import Switch from "@mui/material/Switch";

export const Container = styled("div")(({ theme }) => ({
	padding: 10,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginTop: 81,
	[theme.breakpoints.down("sm")]: {
		marginTop: 60,
	},
}));

export const ImageCard = styled(Card)({
	borderRadius: 2,
	cursor: "pointer",
});

export const StyledSwitch = styled(Switch)(({ theme }) => ({
	left: "45%",
	marginBottom: 10,
	width: "7%",
	padding: 10,
	[theme.breakpoints.down("sm")]: {
		width: "5%",
	},
	"& .MuiSwitch-switchBase": {
		transform: "translateX(0px)",
		color: "#FFF",
		"&.Mui-checked": {
			color: "#3D3DD9",
			transform: "translateX(68px)",
			"+ .MuiSwitch-track": {
				backgroundColor: "#555",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "none",
		width: 16,
		height: 16,
		margin: 2,
	},
	"& .MuiSwitch-track": {
		borderRadius: 22 / 2,
		backgroundColor: "#3D3DD9",
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
		"&:before, &:after": {
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
			width: 16,
			height: 16,
		},
		"&:after": {
			content: "'Videos'",
			left: "28px",
			top: "15px",
			color: "#fff"
		}
	},
}));
