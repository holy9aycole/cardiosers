import React from "react";
// material
import {
	MenuItem,
	Typography,
	Card,
	CardMedia,
	ImageList,
	ImageListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// Youtube Vid
import YouTube from "react-youtube";
// Slider
import Slider from "react-slick";
// Assets
import image1 from "assets/images/PropertyCity/6.png";
import image2 from "assets/images/PropertyCity/7.png";
import image3 from "assets/images/PropertyCity/13.png";
import Mask2 from "assets/images/PropertyCity/Mask Group 21.svg";
import banner1 from "assets/images/brand_sust.png";
import banner2 from "assets/images/PropertyCity/g-3.png"
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
	StyledAccordionDetails
} from "./styles";

const images = [image1, image2, image3, image1, image2, image3];

function PropertyCity({ locations, micromarketID, assetavID }) {
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
					<StyledAccordionDetails>
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
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Micromarket Video</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<Slider {...settings}>
							<YouTube videoId={micromarketID} opts={opts} onReady={onReady} />
							<YouTube videoId={micromarketID} opts={opts} onReady={onReady} />
						</Slider>
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>3D View</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<ImageList
							sx={{ width: "100%", height: 350 }}
							cols={window.innerWidth > 600 ? 4 : 2}
							rowHeight={window.innerWidth > 600 ? 400 : 200}
							gap={15}
						>
							{images.map((image, index) => (
								<ImageListItem key={index}>
									<img
										src={`${image}?w=164&h=164&fit=crop&auto=format`}
										srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
										alt=""
										loading="lazy"
									/>
								</ImageListItem>
							))}
						</ImageList>
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Assest AV</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<Slider {...settings}>
							<YouTube videoId={assetavID} opts={opts} onReady={onReady} />
						</Slider>
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel5"}
					onChange={handleChange("panel5")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Progress Video</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<Slider {...settings}>
							<YouTube videoId={assetavID} opts={opts} onReady={onReady} />
						</Slider>
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel6"}
					onChange={handleChange("panel6")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Gallery</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<ImageList
							sx={{ width: "100%", height: 350 }}
							cols={window.innerWidth > 600 ? 4 : 3}
							rowHeight={window.innerWidth > 600 ? 400 : 100}
							gap={15}
						>
							{images.map((image, index) => (
								<ImageListItem key={index}>
									<img src={image} alt="" loading="lazy" />
								</ImageListItem>
							))}
						</ImageList>
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel7"}
					onChange={handleChange("panel7")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Floor Plans</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<Card>
							<img src={banner2} alt="" />
						</Card>
					</StyledAccordionDetails>
				</StyledAccordion>
				<StyledAccordion
					expanded={expanded === "panel8"}
					onChange={handleChange("panel8")}
				>
					<StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
						<AccordionTypography>Asset Brochure</AccordionTypography>
					</StyledAccordionSummary>
					<StyledAccordionDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat
							lectus, varius pulvinar diam eros in elit. Pellentesque convallis
							laoreet laoreet.
						</Typography>
					</StyledAccordionDetails>
				</StyledAccordion>
			</AccordionContainer>
		</PropertyPage>
	);
}

export default PropertyCity;
