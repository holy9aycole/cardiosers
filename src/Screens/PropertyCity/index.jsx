import React from "react";
// material
import {
	MenuItem,
	AccordionDetails,
	Typography,
	Card,
	CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Youtube Vid
import YouTube from "react-youtube";
// Assets
import DashboardNavbar from "layouts/dashboard/DashboardNavbar";
import Mask1 from "assets/images/MaskGroup24.svg";
import banner1 from "assets/images/brand_sust.png";
import {
	BannerContainer,
	BannerImage,
	Overlay,
	PropertyPage,
	StyledSelect,
	StyledSelectIcon,
	AccordionContainer,
	StyledAccordion,
	StyledAccordionSummary,
	AccordionTypography,
	StyledCardContent,
	StyledMask,
	NextButton,
} from "./styles";

function PropertyCity({ locations, micromarketID }) {
	const [expanded, setExpanded] = React.useState(false);

	const [area, setArea] = React.useState("Bengaluru");

	const handleAreaChange = (event) => {
		setArea(event.target.value);
	};

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const onReady = (event) => {
		event.target.pauseVideo();
	};

	const opts = {
		height: window.innerWidth > 600 ? "600" : "300",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<PropertyPage>
			<DashboardNavbar
				title="Property"
				titleOptions="Bengaluru"
				handleChange={handleAreaChange}
				area={area}
			/>
			<BannerContainer>
				<BannerImage src={banner1} alt="" />
				<Overlay />
				<StyledSelect IconComponent={StyledSelectIcon}>
					{locations.map((location, index) => {
						if (index !== locations.length - 1) {
							return (
								<MenuItem key={index} value={location} divider>
									{location}
								</MenuItem>
							);
						}
						return (
							<MenuItem key={index} value={location}>
								{location}
							</MenuItem>
						);
					})}
				</StyledSelect>
			</BannerContainer>

			<AccordionContainer>
				<StyledAccordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>About Property</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Card>
							<CardMedia
								component="img"
								alt="green iguana"
								height="400"
								image={banner1}
							/>
							<StyledCardContent>
								<Typography component="div">RMZ Ecoworld</Typography>
								<Typography variant="body2">
									The profile of the podium blocks boosts the circulation of
									airflow for the Podium Confluence area, while the Central
									Plaza still enjoys a comforting breeze during the summer
									months.
								</Typography>
								<StyledMask src={Mask1} />
								<NextButton>
									<ArrowForwardIosIcon />
								</NextButton>
							</StyledCardContent>
						</Card>
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Micromarket Video</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<YouTube videoId={micromarketID} opts={opts} onReady={onReady} />
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>3D View</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Typography>
							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
							feugiat. Aliquam eget maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Assest AV</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat
							lectus, varius pulvinar diam eros in elit. Pellentesque convallis
							laoreet laoreet.
						</Typography>
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel5"}
					onChange={handleChange("panel5")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Progress Video</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Typography>
							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
							feugiat. Aliquam eget maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel6"}
					onChange={handleChange("panel6")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Gallery</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat
							lectus, varius pulvinar diam eros in elit. Pellentesque convallis
							laoreet laoreet.
						</Typography>
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel7"}
					onChange={handleChange("panel7")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Floor Plans</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Typography>
							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
							feugiat. Aliquam eget maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel8"}
					onChange={handleChange("panel8")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Asset Brochure</AccordionTypography>
					</StyledAccordionSummary>
					<AccordionDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat
							lectus, varius pulvinar diam eros in elit. Pellentesque convallis
							laoreet laoreet.
						</Typography>
					</AccordionDetails>
				</StyledAccordion>
			</AccordionContainer>
		</PropertyPage>
	);
}

export default PropertyCity;
