import React from "react";
import { Link } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logo from "assets/images/rmz-logo (1).svg";
import { ReactComponent as MailIcon } from "assets/images/email-icon.svg";
import {
	FormContainer,
	Logo,
	MainContainer,
	TextField1,
	OtpContainer,
	OtpInnerContainer,
	Button1,
	ResendButton,
	OtpTextField,
} from "./styles";

const theme = createTheme({
	components: {
		MuiInputBase: {
			color: "#ffffff",
		},
	},
});

function LoginScreen() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<MainContainer>
					<Logo src={logo} alt="" />
					<FormContainer>
						<TextField1
							placeholder="Enter your Email"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<MailIcon />
									</InputAdornment>
								),
							}}
						/>
						<OtpContainer>
							<OtpInnerContainer>
								<OtpTextField
									defaultValue="1"
									InputLabelProps={{
										style: { color: "#fff" },
									}}
								/>
							</OtpInnerContainer>
							<OtpInnerContainer>
								<OtpTextField
									defaultValue="2"
									InputLabelProps={{
										style: { color: "#fff" },
									}}
								/>
							</OtpInnerContainer>
							<OtpInnerContainer>
								<OtpTextField
									defaultValue="3"
									InputLabelProps={{
										style: { color: "#fff" },
									}}
								/>
							</OtpInnerContainer>
							<OtpInnerContainer>
								<OtpTextField
									defaultValue="4"
									InputLabelProps={{
										style: { color: "#fff" },
									}}
								/>
							</OtpInnerContainer>
						</OtpContainer>
						<Link to="/splash-screen">
							<Button1>Verify</Button1>
						</Link>
						<ResendButton>RESEND</ResendButton>
					</FormContainer>
				</MainContainer>
			</ThemeProvider>
		</>
	);
}

export default LoginScreen;
