import { Card, Button, Typography, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
	width: "50%",
	padding: 10,
	paddingBottom: 0,
	borderRadius: "0px",
	boxShadow: "none",
	border: "none",
	background: "#FFFFFF",
	[theme.breakpoints.down("md")]: {
		width: "100%",
		margin: "auto",
	},
}));

export const StyledContentDiv = styled("div")(() => ({
	backgroundImage: "url(assets/Mask Group 18.svg)",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	position: "absolute",
	borderRadius: "50%",
	height: "60px",
	width: "50px",
	background: "#3D3DD9",
	color: "#fff",
	bottom: "16%",
	right: "5%",
	"&:hover": {
		background: "#fff",
		color: "#3D3DD9",
	},
	[theme.breakpoints.down("sm")]: {
		bottom: "18%",
	}
}));

export const Title = styled(Typography)({
	fontFamily: "Ivypresto Display",
	fontSize: "24px",
	color: "#3D3DD9",
	marginBottom: "10px",
});

export const ReadMoreText = styled(Typography)({
	fontFamily: "Poppins",
	fontSize: "16px",
	color: "#000",
});

export const MediaBox = styled("div")({
	display: "flex",
	overflow: "hidden",
	justifyContent: "center",
});

export const CardMediaBox1 = styled("div")({
	width: "60%",
});

export const CardMediaBox2 = styled("div")({
	width: "100%",
	marginLeft: 5,
});

export const CardMediaBox3 = styled("div")({
	width: "100%",
	marginLeft: 5,
	marginTop: 5,
});

export const FooterContainer = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	margin: "20px 10px",
});

export const Footer = styled("div")({
	display: "flex",
	padding: "10px",
});

export const FooterDiv = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginRight: 5,
});

export const FooterFont = styled(Typography)(({ theme }) => ({
	padding: "0px 16px",
	fontSize: "16px",
	fontFamily: "Poppins",
	color: "#3D3DD9",
	[theme.breakpoints.down("sm")]: {
		fontSize: "12px",
		lineHeight: '20px'
	}
}));

export const MediaDiv = styled("div")({
	flexDirection: "column",
	display: "flex",
	justifyContent: "space-between",
});
