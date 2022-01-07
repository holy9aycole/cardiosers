import { styled } from "@mui/material/styles";
import { Button, TextField, Typography } from "@mui/material";
import LoginBg from "assets/images/login-web.png";

export const FormContainer = styled("div")(({ theme }) => ({
	border: "1px solid #3D3DD9",
	borderRadius: "30px",
	opacity: 1,
	backgroundColor: "rgba(46,46,128,0.5)",
	filter: "brightness(80%)",
	width: "40vw",
	padding: "60px 70px 40px 70px",
	margin: "40px auto",
	display: "block",
	[theme.breakpoints.down("sm")]: {
		width: "100vw",
		position: "absolute",
		bottom: 0,
		margin: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: "#2e2e80",
		mixBlendMode: "normal",
		padding: "80px 30px 50px 30px",
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
	color: "#ffffff",
	width: "100%",
	opacity: 1,
	marginTop: "2rem",
	position: "relative",
	height: "45px",
	textDecorationLine: "none",
	"&:hover": {
		backgroundColor: "#3d3dd9",
		filter: "brightness(120%)",
	},
}));

export const TextField1 = styled(TextField)(() => ({
	width: "100%",
	borderRadius: "6px",
	backgroundColor: "#2E2E80",
	filter: "contrast(120%)",
	"& .MuiOutlinedInput-root": {
		borderRadius: 8,
		color: "#FFF",
		borderColor: "#FFF",
	},
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
	left: "92%",
	width: 25,
	height: 20,
	marginBottom: "-40px",
	zIndex: 1,
}));

export const ResendButton = styled(Button)(() => ({
	color: "#ffffff",
	display: "block",
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "20px",
}));

export const OtpInnerContainer = styled("div")(() => ({
	width: "70px",
	height: "56px",
	backgroundColor: "#3d3dd9",
	borderRadius: "10px",
	textAlign: "center",
	color: "white",
	fontSize: "24px",
}));

export const OtpContainer = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "25px",
}));

export const OtpTextField = styled(TextField)(() => ({
	fontSize: "30px",
	borderRadius: "10px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"& .MuiOutlinedInput-root": {
		"& input": {
			color: "#fff",
			textAlign: "center",
		},
		"& fieldset": {
			borderColor: "grey",
			borderRadius: "10px",
		},
		"&:hover fieldset": {
			borderColor: "grey",
			borderRadius: "10px",
		},
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
