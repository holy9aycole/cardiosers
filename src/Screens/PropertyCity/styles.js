import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const {
	styled,
	Select,
	Accordion,
	AccordionSummary,
	Typography,
	CardContent,
	AccordionDetails,
	Card,
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
		height: 100,
	},
}));

export const BannerImage = styled("img")(({ theme }) => ({
	position: "absolute",
	width: "100%",
	height: 233,
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

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

export const StyledSelect = styled(Select)(({ theme }) => ({
	width: "30%",
	marginTop: 20,
	zIndex: 3,
	color: "#fff",
	background: "rgba(0,0,0,0.2)",
	[theme.breakpoints.down("sm")]: {
		width: "75%",
		background: "#FFF",
		color: "#000",
	},
}));

export const StyledSelectIcon = styled(ArrowDropDownIcon)({
	color: "#3D3DD9",
});

export const AccordionContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
	width: "90%",
	padding: 20,
	boxShadow: "none!important",
	background: "transparent",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	}
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	color: "#90A4AE",
	[theme.breakpoints.down("sm")]: {
		padding: "0px 10%",
	},
	"& .Mui-expanded": {
		color: "#3D3DD9",
		boxShadow: "none",
		">p": {
			fontFamily: "IvyPresto Display",
			fontSize: 24,
			transition: "all 300ms ease-in-out",
		},
	},
}));

export const AccordionTypography = styled(Typography)({
	fontFamily: "IvyPresto Display",
	fontSize: 20,
});

export const StyledCard = styled(Card)({
	background: "transparent",
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
	background: "#2E2E80",
	color: "#FFF",
	height: "18vh",
	overflow: "hidden",
	[theme.breakpoints.only("sm")]: {
		padding: 14,
		height: "26vh",
	},
	[theme.breakpoints.only("md")]: {
		height: "25vh",
	},
	[theme.breakpoints.only("lg")]: {
		height: "20vh",
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
		bottom: "27vh",
		left: "50%",
	},
	[theme.breakpoints.only("sm")]: {
		bottom: "30vh",
		left: "42%",
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
		bottom: "34vh",
		left: " 84%",
		width: "40px",
		height: "40px",
		borderRadius: "20px",
	},
	[theme.breakpoints.only("sm")]: {
		bottom: "47vh",
		left: "88%",
	},
	[theme.breakpoints.only("md")]: {
		bottom: "44vh",
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

export const NextArrowDiv = styled("div")(({ theme }) => ({
	background: "transparent",
	height: 40,
	width: 40,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"> svg": {
		fill: "#3D3DD9",
	},
	position: "relative",
	top: 0,
	left: "96%",
	cursor: "pointer",
	[theme.breakpoints.down("sm")]: {
		top: "-0.3vh",
		left: "90%",
	},
}));
export const PrevArrowDiv = styled("div")(({ theme }) => ({
	background: "transparent",
	height: 40,
	width: 40,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"> svg": {
		fill: "#555",
	},
	position: "relative",
	top: "51vh",
	left: "92%",
	cursor: "pointer",
	[theme.breakpoints.up("sm")]: {
		top: 646,
	},
	[theme.breakpoints.down("sm")]: {
		top: "96vh",
		left: "80%",
	},
}));
export const StyledAccordionDetails = styled(AccordionDetails)({
	background: "transparent",
});
export const StyledAccordionDetails2 = styled(AccordionDetails)({
	marginTop: -40,
	background: "transparent",
});

export const FloorPlans = styled("div")({
	width: "100%",
	height: "100%",
	position: "absolute",
	top: 0,
	background: "#3d3dd978",
	display: "flex",
	alignItems: "center",
	padding: 20,
	borderRadius: "inherit",
	justifyContent: "space-between",
});

export const Text1 = styled(Typography)(({ theme }) => ({
	fontFamily: "IvyPresto Display",
	fontSize: 60,
	[theme.breakpoints.down("md")]: {
		fontSize: 30,
	},
}));
export const Text2 = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontWeight: 500,
	fontSize: 22,
	[theme.breakpoints.down("md")]: {
		fontSize: 15,
	},
}));
export const TextBox = styled("div")({
	display: "flex",
	flexDirection: "column",
});

export const PDFDownload = styled(FileDownloadIcon)({
	height: "80%",
	width: "20%",
});
