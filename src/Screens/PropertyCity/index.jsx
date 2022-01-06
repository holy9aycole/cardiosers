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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// Youtube Vid
import YouTube from "react-youtube";
// Slider
import Slider from "react-slick";
// Assets
import Mask2 from "assets/images/PropertyCity/Mask Group 21.svg";
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
	NextArrowDiv,
	PrevArrowDiv,
} from "./styles";

function PropertyCity({ locations, micromarketID }) {
	const [expanded, setExpanded] = React.useState(false);

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

	const NextArrow = ({ onClick }) => (
		<NextArrowDiv onClick={onClick}>
			<ArrowForwardIosIcon />
		</NextArrowDiv>
	);

	const PrevArrow = ({ onClick }) => (
		<PrevArrowDiv onClick={onClick}>
			<ArrowBackIosIcon />
		</PrevArrowDiv>
	);

	const settings = {
		dots: false,
		infinite: true,
		autoplay: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	const ReadMoreMobile = ({ children }) => {
		const text = children;
		if (window.innerWidth < 600 && text.length > 50) {
			return <Typography variant="body2">{text.slice(0, 50)}...</Typography>;
		}
		return <Typography variant="body2">{text}</Typography>;
	};

	return (
		<PropertyPage>
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
								alt="banner1"
								height={window.innerWidth > 600 ? "400" : "200"}
								image={banner1}
							/>
							<StyledCardContent>
								<Typography component="div">RMZ Ecoworld</Typography>
								<ReadMoreMobile>
									The profile of the podium blocks boosts the circulation of
									airflow for the Podium Confluence area, while the Central
									Plaza still enjoys a comforting breeze during the summer
									months.
								</ReadMoreMobile>
								<StyledMask src={Mask2} />
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
						<Slider {...settings}>
							<YouTube videoId={micromarketID} opts={opts} onReady={onReady} />
							<YouTube videoId={micromarketID} opts={opts} onReady={onReady} />
						</Slider>
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
