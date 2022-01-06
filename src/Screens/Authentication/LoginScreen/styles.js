import { Button, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoginBg from "assets/images/login-web.png";

export const FormContainer = styled("div")(({ theme }) => ({
	border: "1px solid #3D3DD9",
	borderRadius: "30px",
	opacity: 1,
	backgroundColor: "rgba(46,46,128,0.5)",
	filter: "brightness(80%)",
	width: "40vw",
	padding: "80px 70px 40px 70px",
	margin: "40px auto",
	display: "block",
	[theme.breakpoints.down("sm")]: {
		width: "100vw",
		position: "absolute",
		bottom: 0,
		margin: 0,
		border: "none",
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: "#2E2E80",
		padding: "80px 30px 100px 30px",
	},
}));

export const MainContainer = styled("div")(() => ({
	backgroundImage: `url(${LoginBg})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100vh",
	paddingTop: "100px",
}));

export const Button1 = styled(Button)(() => ({
	backgroundColor: "#3d3dd9",
	width: "100%",
	opacity: 1,
	marginTop: "2rem",
	position: "relative",
	textDecoration: "none",
	color: "#FFF",
	height: "45px",
	"&:hover": {
		backgroundColor: "#3d3dd9",
		filter: "brightness(120%)",
	},
}));

export const Logo = styled("img")(({ theme }) => ({
	display: "block",
	margin: "auto",
	width: "100px",
	[theme.breakpoints.up("xl")]: {
		width: "160px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "120px",
	},
}));

export const TextField1 = styled(TextField)(() => ({
	width: "100%",
	borderRadius: "6px",
  backgroundColor:"#2E2E80",
  filter:"contrast(120%)"
}));

export const Text1 = styled(Typography)(() => ({
	color: "#ffffff",
	fontSize: "14px",
	textAlign: "center",
	marginTop: "10px",
	opacity: 0.8,
}));

export const MailIcon = styled("img")(() => ({
	position: "relative",
	left: "90%",
	marginBottom: "-30px",
}));
