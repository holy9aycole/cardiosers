import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const {
	styled,
	Select,
	Accordion,
	AccordionSummary,
	Typography,
	CardContent,
} = require("@mui/material");

export const PropertyPage = styled("div")({
	height: "100%",
	marginBottom: "100vh",
});

export const BannerContainer = styled("div")(({ theme }) => ({
	width: "100%",
	height: "233px",
	overflow: "hidden",
	marginTop: 81,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	marginBottom: 20,
	[theme.breakpoints.down("md")]: {
		marginTop: 60,
	},
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

export const BannerImage = styled("img")({
	position: "absolute",
	width: "100%",
	height: 233,
});

export const Overlay = styled("div")(({ theme }) => ({
	width: "100%",
	background: "rgba(61,61,217,0.7)",
	height: 233,
	position: "absolute",
	top: 81,
	[theme.breakpoints.down("md")]: {
		top: 60,
	},
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
	zIndex: 2,
}));

export const StyledSelect = styled(Select)({
	width: "30%",
	marginTop: 20,
	zIndex: 3,
	border: "1px solid #3D3DD9",
	color: "#fff",
	background: "rgba(0,0,0,0.2)",
});

export const StyledSelectIcon = styled(ArrowDropDownIcon)({
	color: "#3D3DD9",
});

export const AccordionContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		marginTop: 81,
	},
}));

export const StyledAccordion = styled(Accordion)({
	width: "80%",
	padding: 20,
	"& MuiPaper-root-MuiAccordion-root.Mui-expanded": {
		boxShadow: "none",
	},
});

export const StyledAccordionSummary = styled(AccordionSummary)({
	color: "#90A4AE",
	"& .Mui-expanded": {
		color: "#3D3DD9",
		">p": {
			fontFamily: "IvyPresto Display",
			fontSize: 24,
			transition: "all 300ms ease-in-out",
		},
	},
});

export const AccordionTypography = styled(Typography)({
	fontFamily: "IvyPresto Display",
	fontSize: 20,
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
	background: "#2E2E80",
	color: "#FFF",
	height: "16vh",
	overflow: "hidden",
	[theme.breakpoints.down("sm")]: {
		padding: 12,
	},
	[theme.breakpoints.only("lg")]: {
		height: "13vh",
	},
	">div": {
		fontFamily: "IvyPresto Display",
		fontSize: 24,
		[theme.breakpoints.down("sm")]: {
			fontSize: 18,
		},
		marginBottom: 0,
	},
	">p": {
		fontFamily: "Poppins",
		fontSize: 15,
		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
		},
		width: "80%",
	},
}));

export const StyledMask = styled("img")(({ theme }) => ({
	position: "relative",
	[theme.breakpoints.only("xl")]: {
		bottom: "23vh",
		left: "71%",
	},
	[theme.breakpoints.only("lg")]: {
		bottom: "20vh",
		left: "65%",
	},
	[theme.breakpoints.down("lg")]: {
		bottom: "12vh",
		left: "35%",
	},
	[theme.breakpoints.only("md")]: {
		bottom: "17vh",
		left: "37%",
	},
	[theme.breakpoints.only("sm")]: {
		bottom: "18vh",
		left: "37%",
	},
	[theme.breakpoints.down("sm")]: {
		bottom: "22vh",
		left: "12%",
	},
	[theme.breakpoints.only("xs")]: {
		bottom: "14vh",
		left: "12%",
	},
}));

export const NextButton = styled("div")(({ theme }) => ({
	width: 50,
	height: 50,
	borderRadius: 50 / 2,
	position: "relative",
	zIndex: 2,
	background: "#3D3DD9",
	left: "95%",
	[theme.breakpoints.only("xs")]: {
		bottom: "25vh",
		left: " 84%",
		width: "40px",
		height: "40px",
		borderRadius: "20px",
	},
	[theme.breakpoints.only("sm")]: {
		bottom: "27vh",
		left: "88%",
	},
	[theme.breakpoints.only("xl")]: {
		bottom: "36vh",
	},
	[theme.breakpoints.only("lg")]: {
		bottom: "29vh",
	},
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
}));
