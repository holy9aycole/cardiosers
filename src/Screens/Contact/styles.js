import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

export const Container = styled("div")({
	height: "100vh",
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export const ContactCard = styled(Card)(({ theme }) => ({
	width: "20%",
	height: "10%",
	position: "absolute",
	bottom: "10%",
	padding: 10,
	borderRadius: 40,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-evenly",
	[theme.breakpoints.down("md")]: {
		width: "50%",
	},
}));

export const CustomButton = styled(IconButton)(({ theme }) => ({
	height: 60,
	width: 60,
	borderRadius: "50%",
	background: "#3D3DD9",
	"&:hover": {
		background: "#eee",
		border: "1px solid #3D3DD9",
		"> svg": {
			"> path": {
				fill: "#3D3DD9",
			},
			"> g": {
				"> path": {
					fill: "#3D3DD9",
				},
			},
		},
	},
	[theme.breakpoints.down("sm")]: {
		height: 40,
		width: 40,
	},
}));
