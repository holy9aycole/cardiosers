import { Typography, styled } from "@mui/material";

export const Assets = styled(Typography)(({ theme }) => ({
	fontFamily: "Ivypresto Display",
	fontSize: "24px",
	color: "#3D3DD9",
	marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "20px",
	},
}));

