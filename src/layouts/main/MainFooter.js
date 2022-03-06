// material
import { styled } from "@mui/material/styles";
import { Divider, Container, Typography } from "@mui/material";
//

const RootStyle = styled("div")(({ theme }) => ({
	position: "relative",
	backgroundColor: theme.palette.background.default,
}));

const StyledContainer = styled(Container)({
	padding: "50px 0px",
});

const Foot = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontSize: "13px",
	lineHeight: "20px",
	color: "#A2A2A2",
	width: "fit-content",
	margin: "auto",
	[theme.breakpoints.down("md")]: {
		fontSize: "9px",
	},
}));

const Line = styled("div")(({ theme }) => ({
	width: "50px",
	border: "1px solid #2E2E80",
	backgroundColor: "#2E2E80",
	margin: "auto",
	marginTop: "10px",
	[theme.breakpoints.down("md")]: {},
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
	return (
		<RootStyle>
			<Divider />
			<StyledContainer maxWidth="lg">
				<Foot variant="body2">
					Copyright 2021 RMZ Corp. All rights reserved.
				</Foot>
				<Line />
			</StyledContainer>
		</RootStyle>
	);
}
